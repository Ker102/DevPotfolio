#!/usr/bin/env python3
"""
Kaelux Knowledge Base Ingestion Pipeline

Scrapes engineering blogs, summarizes with Google Gemini,
embeds with Together AI, and stores in Redis Cloud.

Usage: python scripts/ingest.py
Runs on: GitHub Actions (weekly) or manually

Required env vars:
- GOOGLE_GENERATIVE_AI_API_KEY
- TOGETHER_API_KEY
- REDIS_URL (format: host:port)
- REDIS_PASSWORD
"""

import os
import hashlib
import struct
import time
from typing import List, Dict, Any

import redis
import requests
import google.generativeai as genai

# Configuration
TOGETHER_MODEL = "togethercomputer/m2-bert-80M-8k-retrieval"  # Must match frontend!
CHUNK_SIZE = 1500  # Characters per chunk
OVERLAP = 200  # Overlap between chunks

# Target blogs to scrape
SOURCES = [
    {
        "name": "Lil'Log",
        "url": "https://lilianweng.github.io/",
        "type": "rss",
    },
    {
        "name": "Chip Huyen",
        "url": "https://huyenchip.com/blog/",
        "type": "html",
    },
    {
        "name": "Eugene Yan",
        "url": "https://eugeneyan.com/",
        "type": "rss",
    },
    {
        "name": "Simon Willison",
        "url": "https://simonwillison.net/",
        "type": "rss",
    },
    {
        "name": "Hamel Husain",
        "url": "https://hamel.dev/",
        "type": "html",
    },
]


def get_env_or_fail(key: str) -> str:
    """Get environment variable or exit with error."""
    value = os.environ.get(key)
    if not value:
        print(f"❌ Missing environment variable: {key}")
        exit(1)
    return value


def connect_redis() -> redis.Redis:
    """Connect to Redis Cloud."""
    redis_url = get_env_or_fail("REDIS_URL")
    redis_password = get_env_or_fail("REDIS_PASSWORD")
    
    # Parse host:port format
    if ":" in redis_url and not redis_url.startswith("redis://"):
        host, port = redis_url.rsplit(":", 1)
        r = redis.Redis(
            host=host,
            port=int(port),
            password=redis_password,
            decode_responses=False,  # We need binary for vectors
        )
    else:
        r = redis.from_url(redis_url, password=redis_password)
    
    # Test connection
    try:
        r.ping()
        print("✅ Connected to Redis Cloud")
    except redis.ConnectionError as e:
        print(f"❌ Redis connection failed: {e}")
        exit(1)
    
    return r


def scrape_url(url: str) -> str:
    """Scrape content from a URL using Firecrawl API or simple fetch."""
    firecrawl_key = os.environ.get("FIRECRAWL_API_KEY")
    
    if firecrawl_key:
        # Use Firecrawl for better extraction
        resp = requests.post(
            "https://api.firecrawl.dev/v0/scrape",
            headers={"Authorization": f"Bearer {firecrawl_key}"},
            json={"url": url, "onlyMainContent": True},
        )
        if resp.ok:
            data = resp.json()
            return data.get("data", {}).get("markdown", "")
    
    # Fallback: simple fetch
    try:
        resp = requests.get(url, timeout=30)
        resp.raise_for_status()
        return resp.text
    except Exception as e:
        print(f"  ⚠ Failed to fetch {url}: {e}")
        return ""


def chunk_text(text: str, chunk_size: int = CHUNK_SIZE, overlap: int = OVERLAP) -> List[str]:
    """Split text into overlapping chunks."""
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        if chunk.strip():
            chunks.append(chunk.strip())
        start = end - overlap
    return chunks


def summarize_text(text: str, model: genai.GenerativeModel) -> str:
    """Summarize text using Google Gemini."""
    if len(text) < 200:
        return text  # Too short to summarize
    
    try:
        prompt = f"""Summarize this article excerpt concisely, focusing on:
- Key technical concepts
- Implementation details
- Best practices mentioned

Keep it under 300 words.

Text:
{text[:4000]}"""  # Limit input to avoid token limits
        
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"  ⚠ Summarization failed: {e}")
        return text[:500]  # Return truncated original


def embed_text(text: str, api_key: str) -> List[float]:
    """Generate embeddings using Together AI."""
    resp = requests.post(
        "https://api.together.xyz/v1/embeddings",
        headers={"Authorization": f"Bearer {api_key}"},
        json={"model": TOGETHER_MODEL, "input": text},
    )
    
    if not resp.ok:
        print(f"  ⚠ Embedding failed: {resp.text}")
        return []
    
    data = resp.json()
    return data["data"][0]["embedding"]


def store_in_redis(
    r: redis.Redis,
    doc_id: str,
    text: str,
    source: str,
    title: str,
    embedding: List[float],
) -> bool:
    """Store document with embedding in Redis."""
    try:
        # Convert embedding to binary format (float32)
        embedding_bytes = struct.pack(f"{len(embedding)}f", *embedding)
        
        key = f"knowledge:{doc_id}"
        r.hset(key, mapping={
            "text": text.encode("utf-8"),
            "source": source.encode("utf-8"),
            "title": title.encode("utf-8"),
            "embedding": embedding_bytes,
        })
        return True
    except Exception as e:
        print(f"  ⚠ Redis store failed: {e}")
        return False


def process_source(
    source: Dict[str, str],
    r: redis.Redis,
    gemini_model: genai.GenerativeModel,
    together_key: str,
) -> int:
    """Process a single source and return count of documents stored."""
    print(f"\n📚 Processing: {source['name']}")
    print(f"   URL: {source['url']}")
    
    # Scrape content
    content = scrape_url(source["url"])
    if not content:
        print("   ⚠ No content found")
        return 0
    
    print(f"   Scraped {len(content)} characters")
    
    # Chunk the content
    chunks = chunk_text(content)
    print(f"   Split into {len(chunks)} chunks")
    
    stored = 0
    for i, chunk in enumerate(chunks[:10]):  # Limit to 10 chunks per source
        # Create unique ID
        doc_id = hashlib.md5(f"{source['url']}:{i}".encode()).hexdigest()[:12]
        
        # Check if already exists
        if r.exists(f"knowledge:{doc_id}"):
            print(f"   Skip chunk {i+1} (already exists)")
            continue
        
        # Summarize
        summary = summarize_text(chunk, gemini_model)
        
        # Generate embedding
        embedding = embed_text(summary, together_key)
        if not embedding:
            continue
        
        # Store
        if store_in_redis(r, doc_id, summary, source["url"], source["name"], embedding):
            stored += 1
            print(f"   ✓ Stored chunk {i+1}")
        
        # Rate limit
        time.sleep(0.5)
    
    return stored


def main():
    print("=" * 50)
    print("🚀 Kaelux Knowledge Base Ingestion")
    print("=" * 50)
    
    # Load environment
    google_key = get_env_or_fail("GOOGLE_GENERATIVE_AI_API_KEY")
    together_key = get_env_or_fail("TOGETHER_API_KEY")
    
    # Initialize clients
    genai.configure(api_key=google_key)
    gemini_model = genai.GenerativeModel("gemini-2.0-flash")
    
    r = connect_redis()
    
    # Process each source
    total_stored = 0
    for source in SOURCES:
        count = process_source(source, r, gemini_model, together_key)
        total_stored += count
    
    print("\n" + "=" * 50)
    print(f"✅ Ingestion complete!")
    print(f"   Total documents stored: {total_stored}")
    print("=" * 50)


if __name__ == "__main__":
    main()
