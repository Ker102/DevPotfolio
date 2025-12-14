"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaCode, FaServer } from "react-icons/fa";

const pillars = [
    {
        icon: <FaLayerGroup className="w-8 h-8" />,
        title: "The Platform (SaaS)",
        subtitle: "Pre-Built Intelligence",
        description: "Access our proprietary LLM tools designed for immediate integration.",
        useCase: "Best for: Quick Wins"
    },
    {
        icon: <FaCode className="w-8 h-8" />,
        title: "Custom Engineering (Build)",
        subtitle: "Tailored Automation",
        description: "We build custom agents and RAG pipelines specific to your data.",
        useCase: "Best for: Complex Workflows"
    },
    {
        icon: <FaServer className="w-8 h-8" />,
        title: "Managed LLMOps (Sustain)",
        subtitle: "Reliability at Scale",
        description: "We handle the fine-tuning, monitoring, and model updates so you never break.",
        useCase: "Best for: Long-term Stability"
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 18
        }
    }
};

export default function ThreePillars() {
    return (
        <section className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        The Core Offering
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We bridge the gap between abstract AI potential and concrete business infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative p-8 rounded-2xl border border-white/5 bg-zinc-950/80 backdrop-blur-sm hover:border-white/10 transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col items-start h-full">
                                {/* Icon with silver/chrome gradient background */}
                                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 text-white border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                                    {pillar.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-4 block">
                                    {pillar.subtitle}
                                </span>

                                <p className="text-gray-400 leading-relaxed mb-auto">
                                    {pillar.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/5 w-full">
                                    <span className="text-sm font-semibold text-gray-300">
                                        {pillar.useCase}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
