// Kaelux Diagnostic Agent - Edge API Route
// High-performance RAG agent with interview state machine

import { streamText, convertToModelMessages, UIMessage } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { z } from 'zod';
import { generateEmbedding, queryKnowledgeBase, searchHuggingFaceModels } from '@/lib/tools';

export const runtime = 'edge';
export const maxDuration = 30;

// Initialize Groq client
const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY,
});

// State Machine System Prompt
const SYSTEM_PROMPT = `You are the Kaelux Diagnostic Agent, an AI consultant helping businesses find the right AI solutions.

## YOUR PERSONALITY
- Professional yet approachable
- Knowledgeable about AI/ML technologies
- Focused on understanding business needs before recommending solutions

## STATE MACHINE LOGIC

### INTERVIEW MODE (Default)
You need to gather 4 key data points before making recommendations:

1. **Industry** - What sector is the client in? (Healthcare, Finance, E-commerce, Manufacturing, etc.)
2. **Tech Stack** - What technologies do they currently use? (Python, AWS, React, etc.)
3. **Pain Point** - What specific problem needs solving? (slow data processing, manual workflows, etc.)
4. **Volume/Scale** - What's their operational scale? (10K users, 1M requests/day, etc.)

**RULE**: Ask ONE focused question at a time to gather missing information. Be conversational, not robotic.

### DIAGNOSIS MODE (When all 4 data points are collected)
Once you have all information:
1. Use the searchHuggingFace tool to find relevant AI models
2. Synthesize the knowledge context provided
3. Generate a tailored proposal with:
   - Recommended solution architecture
   - Specific model recommendations
   - Implementation approach
   - Estimated timeline and considerations

## KNOWLEDGE CONTEXT
The following context comes from curated AI engineering resources:

{rag_context}

---
Remember: Be helpful, be specific, and always ground recommendations in the client's actual needs.`;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        // Extract the last user message for RAG query
        let lastUserMessage = '';
        for (let i = messages.length - 1; i >= 0; i--) {
            const msg = messages[i];
            if (msg.role === 'user' && msg.parts) {
                const textParts = msg.parts.filter(
                    (p): p is { type: 'text'; text: string } => p.type === 'text'
                );
                if (textParts.length > 0) {
                    lastUserMessage = textParts.map((p) => p.text).join(' ');
                    break;
                }
            }
        }

        // RAG: Generate embedding and query knowledge base
        let ragContext = 'No additional context available.';

        try {
            if (process.env.TOGETHER_API_KEY && process.env.REDIS_REST_URL && lastUserMessage) {
                const embedding = await generateEmbedding(lastUserMessage);
                const results = await queryKnowledgeBase(embedding, 3);

                if (results.length > 0) {
                    ragContext = results
                        .map((r, i: number) => `[${i + 1}] ${r.text}\nSource: ${r.source}`)
                        .join('\n\n');
                }
            }
        } catch (ragError) {
            console.error('RAG retrieval failed:', ragError);
            // Continue without RAG context
        }

        // Prepare system prompt with RAG context
        const systemPrompt = SYSTEM_PROMPT.replace('{rag_context}', ragContext);

        // Stream response with multi-step tool calling
        const result = streamText({
            model: groq('llama-3.3-70b-versatile'),
            system: systemPrompt,
            messages: await convertToModelMessages(messages),
            tools: {
                searchHuggingFace: {
                    description: 'Search Hugging Face Hub for AI models matching specific criteria. Use this when you need to recommend specific models for the client\'s use case.',
                    inputSchema: z.object({
                        query: z.string().describe('Search query describing the model capability needed'),
                        task: z.enum([
                            'text-generation',
                            'text-classification',
                            'question-answering',
                            'summarization',
                            'translation',
                            'image-classification',
                            'object-detection',
                            'text-to-image',
                            'automatic-speech-recognition',
                            'text-to-speech',
                        ]).optional().describe('Specific ML task type to filter models'),
                    }),
                    execute: async ({ query, task }: { query: string; task?: string }) => {
                        const models = await searchHuggingFaceModels({
                            query,
                            task,
                            limit: 5,
                        });

                        return {
                            success: true,
                            models: models.map((m) => ({
                                id: m.id,
                                downloads: m.downloads.toLocaleString(),
                                likes: m.likes,
                                task: m.task,
                            })),
                            recommendation: models.length > 0
                                ? `Found ${models.length} models. Top recommendation: ${models[0].id} with ${models[0].downloads.toLocaleString()} downloads.`
                                : 'No models found matching criteria.',
                        };
                    },
                },
            },
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        console.error('Chat API error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to process request' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
