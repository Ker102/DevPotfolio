"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
    {
        image: "/images/solutions/reason-1-data-gridlock.jpg",
        alt: "Reason 1: Data Integration Gridlock",
        solution: "We specialize in API-level automation and custom pipelines that untangle your proprietary data mess."
    },
    {
        image: "/images/solutions/reason-2-niche-context.jpg",
        alt: "Reason 2: Lack of Niche Context",
        solution: "Our custom fine-tuning and RAG architectures inject your specific domain knowledge into the model."
    },
    {
        image: "/images/solutions/reason-3-broken-workflow.jpg",
        alt: "Reason 3: Broken Workflow Automation",
        solution: "We build robust, regression-tested agentic workflows that integrate seamlessly with your existing stack."
    }
];

export default function ProblemAgitation() {
    return (
        <section className="py-24 px-6 bg-black relative">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-pink-500 font-medium tracking-widest uppercase mb-4 block">
                        The Challenge
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why &quot;Out of the Box&quot; AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Isn't Enough</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Generic models are powerful, but they lack the context and integration required for real enterprise value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative flex flex-col"
                        >
                            {/* Image Container with Glow */}
                            <div className="relative aspect-[16/9] mb-6 rounded-2xl overflow-hidden border border-white/10 group-hover:border-pink-500/30 transition-colors duration-500">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={800}
                                    height={450}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Solution Text */}
                            <div className="px-2">
                                <div className="flex items-start gap-4">
                                    <div className="h-full w-0.5 bg-gradient-to-b from-pink-500 to-transparent rounded-full mt-1.5" />
                                    <div>
                                        <h4 className="text-white font-bold mb-2 text-lg">The Solution</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
