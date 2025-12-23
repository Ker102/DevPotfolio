// Redis Vector Search Helper
// Uses Upstash Redis REST API for Edge runtime compatibility

export interface VectorSearchResult {
    id: string;
    text: string;
    source: string;
    score: number;
}

export async function queryKnowledgeBase(
    embedding: number[],
    topK: number = 3
): Promise<VectorSearchResult[]> {
    const restUrl = process.env.REDIS_REST_URL;
    const restToken = process.env.REDIS_REST_TOKEN;

    if (!restUrl || !restToken) {
        console.warn('Redis REST not configured, skipping RAG');
        return [];
    }

    try {
        // Upstash Redis REST API for vector search
        // Using FT.SEARCH with KNN query
        const response = await fetch(`${restUrl}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${restToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                'FT.SEARCH',
                'kaelux_knowledge',
                `*=>[KNN ${topK} @embedding $vec AS score]`,
                'PARAMS', '2', 'vec', JSON.stringify(embedding),
                'RETURN', '3', 'text', 'source', 'score',
                'SORTBY', 'score',
                'DIALECT', '2',
            ]),
        });

        if (!response.ok) {
            console.error('Redis search failed:', response.status);
            return [];
        }

        const data = await response.json();

        // Parse Redis FT.SEARCH response format
        if (!data.result || data.result.length < 2) {
            return [];
        }

        const results: VectorSearchResult[] = [];
        // Skip first element (count), then process pairs of [id, fields]
        for (let i = 1; i < data.result.length; i += 2) {
            const id = data.result[i];
            const fields = data.result[i + 1] || [];

            const fieldMap: Record<string, string> = {};
            for (let j = 0; j < fields.length; j += 2) {
                fieldMap[fields[j]] = fields[j + 1];
            }

            results.push({
                id,
                text: fieldMap.text || '',
                source: fieldMap.source || '',
                score: parseFloat(fieldMap.score) || 0,
            });
        }

        return results;
    } catch (error) {
        console.error('Redis query error:', error);
        return [];
    }
}
