"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaNetworkWired, FaCheckDouble, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaNetworkWired className="w-6 h-6" />,
        title: "Model Agnostic Architecture",
        description: "We use various LLMs and custom models—whatever is best for the specific task at hand. No vendor lock-in."
    },
    {
        icon: <FaCheckDouble className="w-6 h-6" />,
        title: "Eval Pipelines",
        description: "We test every prompt change against your gold-standard dataset before deployment to ensure regression-free updates."
    },
    {
        icon: <FaShieldAlt className="w-6 h-6" />,
        title: "Data Privacy & Security",
        description: "Your data never trains public models. We implement strict RAG barriers and PII redaction for full compliance."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
};

export default function FeatureShowcase() {
    return (
        <section id="features" className="py-28 px-6 bg-black relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-12"
                        >
                            <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                                Technical Credibility
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                                Built for{" "}
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                                    Scale & Security
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don't just wrap OpenAI APIs. We engineer robust, production-ready AI systems designed to withstand the rigors of enterprise use.
                            </p>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group flex gap-5"
                                >
                                    {/* Icon with chrome/silver gradient */}
                                    <div className="shrink-0 p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 text-white border border-white/10 transition-transform duration-300 group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="relative group"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group-hover:border-white/15 transition-colors duration-500">
                            <Image
                                src="/images/solutions/features-scale-security.jpg"
                                alt="Feature Showcase: Model Agnostic, Eval Pipelines, Security"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
