"use client";

import { motion } from "framer-motion";

const metrics = [
    { value: "10+", label: "Enterprise Projects" },
    { value: "4000+", label: "Workflows Automated" },
    { value: "99.9%", label: "Uptime Reliability" },
];

export default function TrustBar() {
    return (
        <section className="relative py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm z-20">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap justify-center md:justify-around gap-8 md:gap-12">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-2">
                                {metric.value}
                            </span>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                                {metric.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
