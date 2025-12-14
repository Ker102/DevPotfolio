"use client";

import { motion } from "framer-motion";
import { FaNetworkWired, FaCheckDouble, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaNetworkWired className="w-8 h-8 text-cyan-400" />,
        title: "Model Agnostic Architecture",
        description: "We use various LLMs and custom models from Hugging Face—whatever is best for the specific task at hand. No vendor lock-in."
    },
    {
        icon: <FaCheckDouble className="w-8 h-8 text-purple-400" />,
        title: "Eval Pipelines",
        description: "We test every prompt change against your gold-standard dataset before deployment to ensure regression-free updates."
    },
    {
        icon: <FaShieldAlt className="w-8 h-8 text-emerald-400" />,
        title: "Data Privacy & Security",
        description: "Your data never trains public models. We implement strict RAG barriers and PII redaction for full compliance."
    }
];

export default function FeatureShowcase() {
    return (
        <section className="py-24 px-6 bg-black relative border-t border-white/5">

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <span className="text-cyan-400 font-medium tracking-widest uppercase mb-4 block">Technical Credibility</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Scale & Security</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don't just wrap OpenAI APIs. We engineer robust, production-ready AI systems designed to withstand the rigors of enterprise use.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="shrink-0 p-3 bg-white/5 rounded-lg border border-white/10 h-fit">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Representation (Abstract Code/Architecture) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center group">
                            {/* Animated Grid Background */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

                            {/* Central "Core" */}
                            <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full border border-cyan-500/30 flex items-center justify-center bg-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                                <div className="w-20 h-20 bg-cyan-500 rounded-full blur-[40px] opacity-50 animate-pulse" />
                                <div className="relative z-20 text-white font-mono text-xs md:text-sm text-center">
                                    <span className="block text-cyan-400 font-bold mb-1">CORE MODEL</span>
                                    <span className="opacity-50">v2.4.0</span>
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={`absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-spin-slow`} style={{ animationDuration: `${15 + i * 5}s`, width: `${250 + i * 80}px`, height: `${250 + i * 80}px` }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 border border-white/20 rounded-full" />
                                </div>
                            ))}

                            <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                                    <span>Success Rate</span>
                                    <span className="text-emerald-400">99.8%</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-emerald-500 h-full w-[99.8%]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
