import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Engineering Wiki | Kaelux Technical Knowledge Base",
    description: "Authoritative technical definitions and guides on AI engineering, LLM integration, RAG architectures, and automation workflows. By Kaelux.dev.",
    keywords: [
        "AI engineering",
        "LLM",
        "RAG",
        "agentic AI",
        "automation",
        "Kaelux",
        "technical wiki",
    ],
    openGraph: {
        title: "AI Engineering Wiki | Kaelux",
        description: "Technical knowledge base for AI engineering, LLM integration, and intelligent automation.",
        type: "website",
        url: "https://kaelux.dev/wiki",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki",
    },
};

export default function WikiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Background effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </main>
    );
}
