/**
 * Redis Index Setup Script
 * Run this once to create the RediSearch index for vector similarity search
 * 
 * Usage: npx ts-node scripts/setup-redis-index.ts
 */

import { createClient } from 'redis';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function setupRedisIndex() {
    // Support multiple variable names
    const redisUrl = process.env.REDIS_URL || process.env.REDIS_HOST;
    const redisPassword = process.env.REDIS_PASSWORD;
    const redisPort = process.env.REDIS_PORT || '14966';

    if (!redisUrl) {
        console.error('❌ Redis URL not configured in .env.local');
        console.error('   Please add: REDIS_URL=redis-xxxxx.xxxxx.cloud.redislabs.com:14966');
        console.error('   Or add: REDIS_HOST=redis-xxxxx.xxxxx.cloud.redislabs.com');
        console.error('           REDIS_PORT=14966');
        console.error('           REDIS_PASSWORD=your-password');
        process.exit(1);
    }

    console.log('🔄 Connecting to Redis Cloud...');
    console.log(`   URL: ${redisUrl}`);

    // Build connection URL
    let connectionUrl: string;
    if (redisUrl.startsWith('redis://') || redisUrl.startsWith('rediss://')) {
        connectionUrl = redisUrl;
    } else if (redisUrl.includes(':')) {
        // Format: host:port
        connectionUrl = `redis://${redisPassword ? `default:${redisPassword}@` : ''}${redisUrl}`;
    } else {
        // Just host, add port
        connectionUrl = `redis://${redisPassword ? `default:${redisPassword}@` : ''}${redisUrl}:${redisPort}`;
    }

    const client = createClient({
        url: connectionUrl,
        socket: {
            tls: true,
            rejectUnauthorized: false,
        },
    });

    client.on('error', (err) => console.error('Redis Error:', err));

    try {
        await client.connect();
        console.log('✅ Connected to Redis Cloud');

        // Check if index already exists
        try {
            const info = await client.sendCommand(['FT.INFO', 'kaelux_knowledge']);
            console.log('ℹ️  Index "kaelux_knowledge" already exists');
            console.log('   Documents:', info);
        } catch (e) {
            // Index doesn't exist, create it
            console.log('🔄 Creating index "kaelux_knowledge"...');

            // Create the vector index
            // Dimension 768 for m2-bert-80M-8k-retrieval embeddings
            await client.sendCommand([
                'FT.CREATE', 'kaelux_knowledge',
                'ON', 'HASH',
                'PREFIX', '1', 'knowledge:',
                'SCHEMA',
                'text', 'TEXT',
                'source', 'TEXT',
                'title', 'TEXT',
                'embedding', 'VECTOR', 'HNSW', '6',
                'TYPE', 'FLOAT32',
                'DIM', '768',
                'DISTANCE_METRIC', 'COSINE',
            ]);

            console.log('✅ Created index "kaelux_knowledge"');
        }

        // Create cache index for semantic caching (optional but recommended)
        try {
            await client.sendCommand(['FT.INFO', 'kaelux_cache']);
            console.log('ℹ️  Index "kaelux_cache" already exists');
        } catch (e) {
            console.log('🔄 Creating index "kaelux_cache" for semantic caching...');

            await client.sendCommand([
                'FT.CREATE', 'kaelux_cache',
                'ON', 'HASH',
                'PREFIX', '1', 'cache:',
                'SCHEMA',
                'query', 'TEXT',
                'response', 'TEXT',
                'embedding', 'VECTOR', 'HNSW', '6',
                'TYPE', 'FLOAT32',
                'DIM', '768',
                'DISTANCE_METRIC', 'COSINE',
            ]);

            console.log('✅ Created index "kaelux_cache"');
        }

        // Verify indexes
        console.log('\n📊 Index Summary:');

        const knowledgeInfo = await client.sendCommand(['FT.INFO', 'kaelux_knowledge']) as string[];
        const numDocsIdx = knowledgeInfo.indexOf('num_docs');
        console.log(`   kaelux_knowledge: ${numDocsIdx !== -1 ? knowledgeInfo[numDocsIdx + 1] : 0} documents`);

        const cacheInfo = await client.sendCommand(['FT.INFO', 'kaelux_cache']) as string[];
        const cacheDocsIdx = cacheInfo.indexOf('num_docs');
        console.log(`   kaelux_cache: ${cacheDocsIdx !== -1 ? cacheInfo[cacheDocsIdx + 1] : 0} documents`);

        console.log('\n✅ Redis setup complete!');
        console.log('\n📝 Next steps:');
        console.log('   1. Run the ingestion script to populate kaelux_knowledge');
        console.log('   2. The cache will auto-populate as users interact');

    } catch (error) {
        console.error('❌ Failed to setup Redis:', error);
        process.exit(1);
    } finally {
        await client.quit();
    }
}

setupRedisIndex();
