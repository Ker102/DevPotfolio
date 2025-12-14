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

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 18
        }
    }
};

export default function ProblemAgitation() {
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
                        The Challenge
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Why &quot;Out of the Box&quot; AI{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            Isn't Enough
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Generic models are powerful, but they lack the context and integration required for real enterprise value.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] mb-6 rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-white/10">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={800}
                                    height={500}
                                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                />
                                {/* Gradient overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Solution Text */}
                            <div className="px-1">
                                <div className="flex items-start gap-4">
                                    {/* Silver/Chrome accent line */}
                                    <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 via-gray-500 to-transparent rounded-full mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-lg">The Solution</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
