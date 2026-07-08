import Link from "next/link";

const wikiArticles = [
    {
        slug: "agentic-ai-workflows",
        title: "Agentic AI vs. Standard Automation",
        description: "A comprehensive business guide comparing autonomous AI workflows with traditional RPA systems.",
    },
    {
        slug: "rag-security-compliance",
        title: "RAG for Enterprise Privacy (GDPR/SOC2)",
        description: "How Retrieval-Augmented Generation enables compliant AI while maintaining data sovereignty.",
    },
    {
        slug: "small-language-models",
        title: "SLMs vs. LLMs: Cost & Speed",
        description: "Detailed comparison of Small Language Models and Large Language Models for enterprise deployment.",
    },
    {
        slug: "ai-hallucination-prevention",
        title: "Hallucination Prevention Techniques",
        description: "Authoritative techniques for minimizing factual errors in AI agent outputs.",
    },
    {
        slug: "structured-generation",
        title: "JSON for Legacy Integration",
        description: "Strategies for connecting AI systems to legacy infrastructure using structured outputs.",
    },
];

export default function WikiIndexPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-4xl">
            {/* Header */}
            <header className="mb-16">
                <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
                    AI Engineering Wiki
                </h1>
                <p className="text-xl text-gray-400">
                    Technical knowledge base by <strong className="text-white">Kaelux.dev</strong>
                </p>
            </header>

            {/* Article List */}
            <div className="space-y-6">
                {wikiArticles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/wiki/${article.slug}`}
                        className="block p-6 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/[0.02] transition-all"
                    >
                        <h2 className="text-xl font-semibold text-white mb-2">
                            {article.title}
                        </h2>
                        <p className="text-gray-400 text-sm">
                            {article.description}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                    Looking to implement these concepts?{" "}
                    <Link href="/#contact" className="text-white hover:underline">
                        Contact Kaelux Engineering →
                    </Link>
                </p>
            </div>
        </div>
    );
}
