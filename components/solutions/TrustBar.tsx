"use client";

import { motion } from "framer-motion";

const metrics = [
    { value: "10+", label: "Enterprise Projects" },
    { value: "4000+", label: "Workflows Automated" },
    { value: "99.9%", label: "Uptime Reliability" },
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

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function TrustBar() {
    return (
        <section className="relative py-16 border-y border-white/5 bg-gradient-to-b from-black via-zinc-950 to-black z-20">
            <div className="container mx-auto max-w-6xl px-6">
                <motion.div
                    className="flex flex-wrap justify-center md:justify-around gap-12 md:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Chrome/Silver gradient for numbers */}
                            <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500 mb-3 transition-transform duration-300 group-hover:scale-105">
                                {metric.value}
                            </span>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
                                {metric.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
