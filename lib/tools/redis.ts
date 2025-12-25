// Redis Cloud Vector Search Helper
// Uses direct TCP connection (Node.js runtime)

import { createClient } from 'redis';

export interface VectorSearchResult {
    id: string;
    text: string;
    source: string;
    score: number;
}

// Singleton Redis client
let redisClient: ReturnType<typeof createClient> | null = null;

/**
 * Get or create Redis client connection
 */
async function getRedisClient() {
    if (redisClient && redisClient.isOpen) {
        return redisClient;
    }

    const redisUrl = process.env.REDIS_URL;
    const redisPassword = process.env.REDIS_PASSWORD;

    if (!redisUrl) {
        console.warn('REDIS_URL not configured, skipping Redis');
        return null;
    }

    try {
        // Build connection URL with password
        // Format: redis://default:password@host:port
        let connectionUrl: string;
        if (redisUrl.startsWith('redis://') || redisUrl.startsWith('rediss://')) {
            connectionUrl = redisUrl;
        } else {
            // Assume format is host:port
            connectionUrl = `redis://default:${redisPassword}@${redisUrl}`;
        }

        redisClient = createClient({
            url: connectionUrl,
        });

        redisClient.on('error', (err) => console.error('Redis Client Error:', err));

        await redisClient.connect();
        console.log('Connected to Redis Cloud');
        return redisClient;
    } catch (error) {
        console.error('Failed to connect to Redis:', error);
        return null;
    }
}

/**
 * Query the knowledge base for relevant documents using RediSearch vector similarity
 */
export async function queryKnowledgeBase(
    embedding: number[],
    topK: number = 3
): Promise<VectorSearchResult[]> {
    const client = await getRedisClient();

    if (!client) {
        return [];
    }

    try {
        // RediSearch vector query using FT.SEARCH with KNN
        const embeddingBuffer = Buffer.from(new Float32Array(embedding).buffer);

        // Use sendCommand for more control over the query
        const rawResults = await client.sendCommand([
            'FT.SEARCH',
            'kaelux_knowledge',
            `*=>[KNN ${topK} @embedding $BLOB AS score]`,
            'PARAMS', '2', 'BLOB', embeddingBuffer.toString('binary'),
            'RETURN', '3', 'text', 'source', 'score',
            'SORTBY', 'score', 'ASC',
            'DIALECT', '2',
        ]) as unknown[];

        if (!rawResults || !Array.isArray(rawResults) || rawResults.length < 2) {
            return [];
        }

        // Parse FT.SEARCH response: [count, docId1, [field1, val1, ...], docId2, ...]
        const results: VectorSearchResult[] = [];
        for (let i = 1; i < rawResults.length; i += 2) {
            const docId = rawResults[i] as string;
            const fields = rawResults[i + 1] as string[];

            if (!docId || !Array.isArray(fields)) continue;

            const fieldMap: Record<string, string> = {};
            for (let j = 0; j < fields.length; j += 2) {
                fieldMap[fields[j]] = fields[j + 1];
            }

            results.push({
                id: docId,
                text: fieldMap.text || '',
                source: fieldMap.source || '',
                score: parseFloat(fieldMap.score) || 0,
            });
        }

        return results;
    } catch (error) {
        console.error('Redis vector search error:', error);
        // Index might not exist yet - return empty
        return [];
    }
}

/**
 * Store a document with embedding in Redis
 * Call this from your ingestion script
 */
export async function storeDocument(
    id: string,
    text: string,
    source: string,
    embedding: number[]
): Promise<boolean> {
    const client = await getRedisClient();

    if (!client) {
        return false;
    }

    try {
        const embeddingBuffer = Buffer.from(new Float32Array(embedding).buffer);

        await client.hSet(`knowledge:${id}`, {
            text,
            source,
            embedding: embeddingBuffer,
        });

        return true;
    } catch (error) {
        console.error('Redis store error:', error);
        return false;
    }
}

/**
 * Create the RediSearch index for vector search (run once during setup)
 */
export async function createSearchIndex(): Promise<boolean> {
    const client = await getRedisClient();

    if (!client) {
        return false;
    }

    try {
        // Check if index exists
        try {
            await client.ft.info('kaelux_knowledge');
            console.log('Index already exists');
            return true;
        } catch {
            // Index doesn't exist, create it
        }

        // Create the index with vector field
        // Dimension 768 for m2-bert-80M-8k-retrieval
        await client.ft.create('kaelux_knowledge', {
            text: { type: 'TEXT' },
            source: { type: 'TEXT' },
            embedding: {
                type: 'VECTOR',
                ALGORITHM: 'HNSW',
                TYPE: 'FLOAT32',
                DIM: 768,
                DISTANCE_METRIC: 'COSINE',
            },
        }, {
            ON: 'HASH',
            PREFIX: 'knowledge:',
        });

        console.log('Created RediSearch index: kaelux_knowledge');
        return true;
    } catch (error) {
        console.error('Failed to create index:', error);
        return false;
    }
}

/**
 * Simple cache get/set for LangCache-style semantic caching
 */
export async function getCachedResponse(key: string): Promise<string | null> {
    const client = await getRedisClient();
    if (!client) return null;

    try {
        return await client.get(`cache:${key}`);
    } catch {
        return null;
    }
}

export async function setCachedResponse(
    key: string,
    value: string,
    ttlSeconds: number = 3600
): Promise<boolean> {
    const client = await getRedisClient();
    if (!client) return false;

    try {
        await client.setEx(`cache:${key}`, ttlSeconds, value);
        return true;
    } catch {
        return false;
    }
}
