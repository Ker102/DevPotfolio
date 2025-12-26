"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiChevronRight, HiBookOpen } from "react-icons/hi";

interface WikiArticle {
    slug: string;
    title: string;
    shortTitle: string;
}

const wikiArticles: WikiArticle[] = [
    {
        slug: "agentic-ai-workflows",
        title: "Agentic AI vs. Standard Automation",
        shortTitle: "Agentic AI",
    },
    {
        slug: "rag-security-compliance",
        title: "RAG for Enterprise Privacy",
        shortTitle: "RAG Security",
    },
    {
        slug: "small-language-models",
        title: "SLMs vs. LLMs Comparison",
        shortTitle: "SLMs vs LLMs",
    },
    {
        slug: "ai-hallucination-prevention",
        title: "Hallucination Prevention",
        shortTitle: "Hallucinations",
    },
    {
        slug: "structured-generation",
        title: "JSON for Legacy Integration",
        shortTitle: "Structured Output",
    },
];

export default function WikiNav() {
    const pathname = usePathname();
    const currentSlug = pathname.split("/").pop();

    return (
        <nav className="space-y-2">
            <div className="flex items-center gap-2 mb-4 text-gray-400">
                <HiBookOpen className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Wiki Articles</span>
            </div>

            {wikiArticles.map((article) => {
                const isActive = currentSlug === article.slug;

                return (
                    <Link
                        key={article.slug}
                        href={`/wiki/${article.slug}`}
                        className={`group flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                ? "bg-cyan-950/50 border border-cyan-500/30 text-cyan-400"
                                : "hover:bg-slate-800/50 text-gray-400 hover:text-white"
                            }`}
                    >
                        <HiChevronRight
                            className={`w-4 h-4 transition-transform ${isActive ? "text-cyan-400" : "group-hover:translate-x-1"
                                }`}
                        />
                        <span className="text-sm font-medium">{article.shortTitle}</span>
                    </Link>
                );
            })}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-4 border-t border-slate-700/50"
            >
                <Link
                    href="/wiki"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                    ← Back to Wiki Index
                </Link>
            </motion.div>
        </nav>
    );
}

export { wikiArticles };
