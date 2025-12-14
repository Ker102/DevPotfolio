"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaNetworkWired, FaCheckDouble, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaNetworkWired className="w-8 h-8 text-indigo-400" />,
        title: "Model Agnostic Architecture",
        description: "We use various LLMs and custom models from Hugging Face—whatever is best for the specific task at hand. No vendor lock-in."
    },
    {
        icon: <FaCheckDouble className="w-8 h-8 text-purple-400" />,
        title: "Eval Pipelines",
        description: "We test every prompt change against your gold-standard dataset before deployment to ensure regression-free updates."
    },
    {
        icon: <FaShieldAlt className="w-8 h-8 text-pink-400" />,
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
                            <span className="text-indigo-400 font-medium tracking-widest uppercase mb-4 block">Technical Credibility</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Scale & Security</span>
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

                    {/* Right: Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-purple-500/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <Image
                                src="/images/solutions/features-scale-security.jpg"
                                alt="Feature Showcase: Model Agnostic, Eval Pipelines, Security"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
