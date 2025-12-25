"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const services = [
    {
        title: "UI/UX Design",
        image: "/services/uiux.jpg",
    },
    {
        title: "Full-Stack Development",
        image: "/services/fullstack.jpg",
    },
    {
        title: "Cloud Infrastructure",
        image: "/services/cloud.jpg",
    },
    {
        title: "Continuous Delivery",
        image: "/services/cicd.jpg",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 50, damping: 15 } },
};

export default function PlatformServices() {
    return (
        <section className="relative py-20 px-6 overflow-hidden bg-white">
            <div className="container mx-auto max-w-5xl relative z-10">
                {/* OR-style Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-6 mb-16"
                >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                    <span className="text-xl md:text-2xl font-medium text-gray-500 tracking-[0.2em] uppercase">
                        Additionally
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </motion.div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 mb-6">
                        Complete Platform Solutions
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Beyond AI engineering, we design, build, and host your entire application—from
                        pixel-perfect interfaces to enterprise-grade cloud infrastructure. Everything
                        your business needs, under one roof.
                    </p>
                </motion.div>

                {/* Services Grid (Images) */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.03, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-100"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Hover Overlay - Optional Shine/Tint */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button - Dark style for white background */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="group relative px-10 py-5 bg-gradient-to-b from-gray-900 to-black text-white text-lg font-bold tracking-wide flex items-center gap-3 rounded-full overflow-hidden shadow-xl shadow-gray-400/30 hover:shadow-2xl hover:shadow-purple-300/40 transition-shadow duration-300"
                        >
                            {/* Metallic Sheen Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                            <span className="relative z-10">Get Started</span>
                            <FaArrowRight className="relative z-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
