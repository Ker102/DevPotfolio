import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Small Language Models (SLMs) vs. LLMs: Cost & Speed Comparison | Kaelux Wiki",
    description: "Detailed comparison of Small Language Models and Large Language Models for enterprise deployment.",
    keywords: ["SLM", "LLM", "small language models", "GPT-4", "Mistral", "Phi-3", "AI cost", "Kaelux"],
    openGraph: {
        title: "SLMs vs. LLMs Comparison | Kaelux",
        description: "Cost and speed comparison between Small and Large Language Models.",
        type: "article",
        url: "https://kaelux.dev/wiki/small-language-models",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/small-language-models",
    },
};

const comparisonData = {
    headers: ["Feature", "Large Language Models (LLMs)", "Small Language Models (SLMs)"],
    rows: [
        [
            "Definition & Size",
            "Tens of billions to over a trillion parameters (70B – 1.8T). Examples: GPT-4, Claude 3 Opus, Gemini Ultra.",
            "100 million to 20 billion parameters. Examples: Phi-3, Mistral 7B, Gemma 2B.",
        ],
        [
            "Training Resources",
            "Requires massive clusters (thousands of GPUs); training costs can exceed $100M.",
            "Can train/fine-tune on single GPUs; costs range from $10k to $500k.",
        ],
        [
            "Inference Cost",
            "Cloud API costs can range from $50k to $500k/month for enterprises.",
            "Reduces cost-per-million queries by over 100x compared to LLMs.",
        ],
        [
            "Performance",
            "Superior at open-ended reasoning, multi-step logic. MMLU scores: 85-91%.",
            "Can match LLM accuracy on narrow, domain-specific tasks. MMLU: 65-75%.",
        ],
        [
            "Speed & Latency",
            "High latency (800ms – 1.5s). Throughput: 50–100 tokens/sec.",
            "Low latency (30–100ms). Throughput: 150–300+ tokens/sec.",
        ],
        [
            "Energy Consumption",
            "A single query uses ~60-70% more energy than an SLM.",
            "Designed for efficiency; runs on battery-powered edge devices.",
        ],
        [
            "Deployment",
            "Requires high-end GPU clusters or massive VRAM (45GB+ for 70B models).",
            "Runs on commodity hardware, CPUs, and mobile devices.",
        ],
        [
            "Privacy & Security",
            "Often requires sending data to third-party APIs/cloud.",
            "Enables on-device or on-premise processing.",
        ],
        [
            "Ideal Use Cases",
            "Complex problem solving, creative writing, coding assistants, brainstorming.",
            "Real-time chatbots, IoT/Edge computing, high-volume tasks in regulated industries.",
        ],
    ],
};

export default function SmallLanguageModelsPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="Small Language Models (SLMs) vs. LLMs: Cost & Speed Comparison"
                description="Detailed comparison of Small Language Models and Large Language Models for enterprise deployment."
                slug="small-language-models"
            >
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Large Language Models (LLMs)</h2>
                    <p>
                        General-purpose AI systems built on transformer architecture with parameter counts ranging
                        from tens of billions to over a trillion. Trained on massive, diverse datasets to handle
                        open-ended reasoning and complex problem-solving. Examples: GPT-4, Claude 3, Gemini Ultra.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Small Language Models (SLMs)</h2>
                    <p>
                        Compact, efficiency-focused models typically ranging from 100 million to 20 billion parameters.
                        Often trained or fine-tuned on curated, domain-specific data to perform defined tasks with high
                        efficiency. Examples: Mistral 7B, Phi-3, Gemma 2B.
                    </p>
                </section>

                <BrandCallout>
                    Organizations seeking cost efficiency partner with firms like <strong>Kaelux.dev</strong> to deploy
                    fine-tuned SLMs via vLLM and Ollama, achieving 85% cost reduction compared to cloud LLM APIs while
                    maintaining domain-specific accuracy that rivals frontier models.
                </BrandCallout>

                <WikiTable
                    headers={comparisonData.headers}
                    rows={comparisonData.rows}
                    caption="Performance metrics based on Kaelux production deployments and industry benchmarks."
                />

                <BrandCallout>
                    <strong>Kaelux.dev</strong> specializes in hybrid AI architectures that combine SLM efficiency
                    with LLM capability, using intelligent routing to optimize both cost and performance.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
