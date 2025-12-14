"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsArchitecture() {
    return (
        <section className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        The Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        From Raw Data to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-violet-300">
                            Automated Workflow
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We transform your messy, unstructured proprietary data into a fine-tuned engine that powers your business logic.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 30 }}
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
                            src="/images/solutions/architecture-diagram.jpg"
                            alt="Kaelux AI Architecture Diagram: Raw Data → Custom Model → Automated Workflow"
                            width={1600}
                            height={900}
                            className="w-full h-auto object-cover"
                            priority
                        />

                        {/* Subtle glass overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
