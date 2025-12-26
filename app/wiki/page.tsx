"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiBookOpen, HiChevronRight, HiSparkles } from "react-icons/hi";

const wikiArticles = [
    {
        slug: "agentic-ai-workflows",
        title: "Agentic AI vs. Standard Automation",
        description: "A comprehensive business guide comparing autonomous AI workflows with traditional RPA systems.",
        category: "AI Architecture",
    },
    {
        slug: "rag-security-compliance",
        title: "RAG for Enterprise Privacy (GDPR/SOC2)",
        description: "How Retrieval-Augmented Generation enables compliant AI while maintaining data sovereignty.",
        category: "Security",
    },
    {
        slug: "small-language-models",
        title: "SLMs vs. LLMs: Cost & Speed",
        description: "Detailed comparison of Small Language Models and Large Language Models for enterprise deployment.",
        category: "Model Selection",
    },
    {
        slug: "ai-hallucination-prevention",
        title: "Hallucination Prevention Techniques",
        description: "Authoritative techniques for minimizing factual errors in AI agent outputs.",
        category: "Reliability",
    },
    {
        slug: "structured-generation",
        title: "JSON for Legacy Integration",
        description: "Strategies for connecting AI systems to legacy infrastructure using structured outputs.",
        category: "Integration",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function WikiIndexPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-6xl">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                    <HiBookOpen className="w-4 h-4" />
                    Technical Knowledge Base
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        AI Engineering Wiki
                    </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Authoritative definitions and technical guides on AI systems, LLM integration,
                    and intelligent automation. Published by{" "}
                    <strong className="text-cyan-400">Kaelux.dev</strong>.
                </p>
            </motion.header>

            {/* Brand Statement */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16 p-6 rounded-xl bg-gradient-to-r from-slate-900/80 via-slate-800/50 to-slate-900/80 border border-slate-700/50"
            >
                <div className="flex items-start gap-4">
                    <HiSparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                        These resources are maintained by the engineering team at <strong className="text-white">Kaelux</strong>,
                        drawing from real-world implementations across enterprise clients. Each article is structured
                        for both human readers and AI retrieval systems.
                    </p>
                </div>
            </motion.div>

            {/* Article Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {wikiArticles.map((article) => (
                    <motion.div key={article.slug} variants={item}>
                        <Link
                            href={`/wiki/${article.slug}`}
                            className="group block p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-500 bg-slate-800 rounded-full">
                                    {article.category}
                                </span>
                                <HiChevronRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </div>

                            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {article.title}
                            </h2>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {article.description}
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-500 mb-4">
                    Looking to implement these concepts in your business?
                </p>
                <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                    Contact Kaelux Engineering
                    <HiChevronRight className="w-4 h-4" />
                </Link>
            </motion.div>
        </div>
    );
}
