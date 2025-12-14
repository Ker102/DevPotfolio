"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsArchitecture() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Ambient Background Glow matching the crosswind theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-400 font-medium tracking-widest uppercase mb-4 block">
                        The Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        From Raw Data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Automated Workflow</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We transform your messy, unstructured proprietary data into a fine-tuned engine that powers your business logic.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-indigo-500/10"
                >
                    <Image
                        src="/images/solutions/architecture-diagram.jpg"
                        alt="Kaelux AI Architecture Diagram"
                        width={1600}
                        height={900}
                        className="w-full h-auto object-cover"
                        priority
                    />

                    {/* Glass Overlay for sheen effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
