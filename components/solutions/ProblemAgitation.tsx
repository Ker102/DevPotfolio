"use client";

import { motion } from "framer-motion";
import { FaExclamationTriangle, FaPuzzlePiece, FaSync } from "react-icons/fa";

const problems = [
    {
        icon: <FaExclamationTriangle className="w-6 h-6 text-amber-400" />,
        title: "Hallucinations",
        problem: "Generic models don't know your business data.",
        solution: "We fix this with RAG & Tuning."
    },
    {
        icon: <FaPuzzlePiece className="w-6 h-6 text-red-400" />,
        title: "Integration Hell",
        problem: "Chatbots are easy; integrating into legacy ERPs is hard.",
        solution: "We specialize in API-level automation."
    },
    {
        icon: <FaSync className="w-6 h-6 text-blue-400" />,
        title: "Maintenance Costs",
        problem: "Models change every week. Keeping up is a full-time job.",
        solution: "Our LLMOps service manages the drift for you."
    }
];

export default function ProblemAgitation() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why &quot;Out of the Box&quot; AI Isn't Enough.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        The gap between a demo and production is reliability.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-800/50 transition-colors flex flex-col md:flex-row items-start md:items-center gap-6"
                        >
                            <div className="p-4 bg-black/50 rounded-xl border border-white/10 shrink-0">
                                {item.icon}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 mb-2">
                                    <span className="text-red-400/80 mr-2">Problem:</span>
                                    {item.problem}
                                </p>
                                <p className="text-white font-medium">
                                    <span className="text-emerald-400 mr-2">Solution:</span>
                                    {item.solution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
