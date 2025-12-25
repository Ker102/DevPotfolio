// Together AI Embeddings Helper
// CRITICAL: Must use the same model in both backend (Python) and frontend (Edge)

const TOGETHER_EMBEDDING_MODEL = 'togethercomputer/m2-bert-80M-32k-retrieval';

export interface EmbeddingResponse {
    embedding: number[];
    model: string;
}

export async function generateEmbedding(text: string): Promise<number[]> {
    const apiKey = process.env.TOGETHER_API_KEY;

    if (!apiKey) {
        throw new Error('TOGETHER_API_KEY is not configured');
    }

    const response = await fetch('https://api.together.xyz/v1/embeddings', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: TOGETHER_EMBEDDING_MODEL,
            input: text,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Together AI error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
}

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
    const apiKey = process.env.TOGETHER_API_KEY;

    if (!apiKey) {
        throw new Error('TOGETHER_API_KEY is not configured');
    }

    const response = await fetch('https://api.together.xyz/v1/embeddings', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: TOGETHER_EMBEDDING_MODEL,
            input: texts,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Together AI error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.data.map((d: any) => d.embedding);
}
