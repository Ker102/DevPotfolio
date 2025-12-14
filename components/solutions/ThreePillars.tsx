"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaCode, FaServer } from "react-icons/fa";

const pillars = [
    {
        icon: <FaLayerGroup className="w-8 h-8 text-cyan-400" />,
        title: "The Platform (SaaS)",
        subtitle: "Pre-Built Intelligence",
        description: "Access our proprietary LLM tools designed for immediate integration.",
        useCase: "Best for: Quick Wins",
        gradient: "from-cyan-500/20 to-blue-500/5",
        border: "border-cyan-500/20"
    },
    {
        icon: <FaCode className="w-8 h-8 text-purple-400" />,
        title: "Custom Engineering (Build)",
        subtitle: "Tailored Automation",
        description: "We build custom agents and RAG pipelines specific to your data.",
        useCase: "Best for: Complex Workflows",
        gradient: "from-purple-500/20 to-pink-500/5",
        border: "border-purple-500/20"
    },
    {
        icon: <FaServer className="w-8 h-8 text-emerald-400" />,
        title: "Managed LLMOps (Sustain)",
        subtitle: "Reliability at Scale",
        description: "We handle the fine-tuning, monitoring, and model updates so you never break.",
        useCase: "Best for: Long-term Stability",
        gradient: "from-emerald-500/20 to-teal-500/5",
        border: "border-emerald-500/20"
    }
];

export default function ThreePillars() {
    return (
        <section className="py-24 px-6 bg-black relative">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-900/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Core Offering</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We bridge the gap between abstract AI potential and concrete business infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`group relative p-8 rounded-2xl border ${pillar.border} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden`}
                        >
                            {/* Internal Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col items-start h-full">
                                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {pillar.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 block">
                                    {pillar.subtitle}
                                </span>

                                <p className="text-gray-300 leading-relaxed mb-auto">
                                    {pillar.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/10 w-full">
                                    <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full">
                                        {pillar.useCase}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
