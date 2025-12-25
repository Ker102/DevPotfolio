// Quick Redis Connection Test - Non-TLS
import { createClient } from 'redis';

// Direct values
const host = 'redis-14966.c328.europe-west3-1.gce.cloud.redislabs.com';
const port = 14966;
const password = 'XkzZ6ZKzLRtgtVPp4EF8y21TUWJ0kyhW';

async function main() {
    console.log('🔄 Connecting to Redis Cloud (non-TLS)...');
    console.log(`   Host: ${host}:${port}`);

    // Try non-TLS connection first
    const connectionUrl = `redis://default:${password}@${host}:${port}`;

    const client = createClient({
        url: connectionUrl,
    });

    client.on('error', (err) => console.error('Redis Error:', err.message));

    try {
        await client.connect();
        console.log('✅ Connected!');

        const pong = await client.ping();
        console.log(`   PING: ${pong}`);

        // Create indexes
        console.log('\n🔄 Setting up RediSearch indexes...');

        // Knowledge index
        try {
            await client.sendCommand(['FT.INFO', 'kaelux_knowledge']);
            console.log('   ✓ kaelux_knowledge exists');
        } catch {
            console.log('   Creating kaelux_knowledge...');
            await client.sendCommand([
                'FT.CREATE', 'kaelux_knowledge',
                'ON', 'HASH',
                'PREFIX', '1', 'knowledge:',
                'SCHEMA',
                'text', 'TEXT',
                'source', 'TEXT',
                'title', 'TEXT',
                'embedding', 'VECTOR', 'HNSW', '6', 'TYPE', 'FLOAT32', 'DIM', '768', 'DISTANCE_METRIC', 'COSINE',
            ]);
            console.log('   ✓ kaelux_knowledge created');
        }

        // Cache index
        try {
            await client.sendCommand(['FT.INFO', 'kaelux_cache']);
            console.log('   ✓ kaelux_cache exists');
        } catch {
            console.log('   Creating kaelux_cache...');
            await client.sendCommand([
                'FT.CREATE', 'kaelux_cache',
                'ON', 'HASH',
                'PREFIX', '1', 'cache:',
                'SCHEMA',
                'query', 'TEXT',
                'response', 'TEXT',
                'embedding', 'VECTOR', 'HNSW', '6', 'TYPE', 'FLOAT32', 'DIM', '768', 'DISTANCE_METRIC', 'COSINE',
            ]);
            console.log('   ✓ kaelux_cache created');
        }

        console.log('\n✅ Redis setup complete!');

    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : String(error);
        console.error('\n❌ Error:', msg);
    } finally {
        await client.quit();
    }
}

main();
