#!/usr/bin/env python3
"""Quick test of Together AI embedding API"""
import os
import requests

key = os.environ.get('TOGETHER_API_KEY', 'not set')
print(f'Together API Key: {key[:25]}...')

resp = requests.post(
    'https://api.together.xyz/v1/embeddings',
    headers={'Authorization': f'Bearer {key}'},
    json={'model': 'togethercomputer/m2-bert-80M-32k-retrieval', 'input': 'test embedding'}
)

print(f'Status: {resp.status_code}')
if not resp.ok:
    print(f'Error: {resp.text}')
else:
    data = resp.json()
    emb = data['data'][0]['embedding']
    print(f'✅ Success! Embedding dimension: {len(emb)}')
