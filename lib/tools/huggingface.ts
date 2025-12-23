// Hugging Face Hub API Tool
// Used by the Diagnostic Agent to search for AI models in real-time

import { z } from 'zod';

export const huggingFaceToolSchema = z.object({
    query: z.string().describe('Search query for models'),
    task: z.string().optional().describe('Task type like text-generation, image-classification, text-to-image'),
    limit: z.number().optional().default(5).describe('Number of results to return'),
});

export type HuggingFaceToolInput = z.infer<typeof huggingFaceToolSchema>;

export interface HuggingFaceModel {
    id: string;
    downloads: number;
    likes: number;
    task: string;
    lastModified: string;
}

export async function searchHuggingFaceModels(input: HuggingFaceToolInput): Promise<HuggingFaceModel[]> {
    const url = new URL('https://huggingface.co/api/models');
    url.searchParams.set('search', input.query);
    if (input.task) url.searchParams.set('filter', input.task);
    url.searchParams.set('limit', String(input.limit || 5));
    url.searchParams.set('sort', 'downloads');
    url.searchParams.set('direction', '-1');

    const res = await fetch(url.toString(), {
        headers: {
            'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Hugging Face API error: ${res.status}`);
    }

    const models = await res.json();

    return models.map((m: any) => ({
        id: m.modelId || m.id,
        downloads: m.downloads || 0,
        likes: m.likes || 0,
        task: m.pipeline_tag || 'unknown',
        lastModified: m.lastModified || '',
    }));
}
