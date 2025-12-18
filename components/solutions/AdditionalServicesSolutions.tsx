"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCloud, FaPalette, FaServer, FaRocket, FaArrowRight } from "react-icons/fa";

const services = [
    {
        icon: <FaPalette className="w-6 h-6" />,
        title: "UI/UX Design",
        description: "Modern, responsive interfaces designed for optimal user experience and engagement."
    },
    {
        icon: <FaServer className="w-6 h-6" />,
        title: "Full-Stack Development",
        description: "End-to-end application development with robust backends and polished frontends."
    },
    {
        icon: <FaCloud className="w-6 h-6" />,
        title: "Cloud Infrastructure",
        description: "Scalable hosting solutions with managed databases, CDN, and automated deployments."
    },
    {
        icon: <FaRocket className="w-6 h-6" />,
        title: "Continuous Delivery",
        description: "CI/CD pipelines, monitoring, and maintenance to keep your platform running smoothly."
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 18 } },
};

export default function AdditionalServicesSolutions() {
    return (
        <section className="relative py-20 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
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
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        Complete{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            Platform Solutions
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Beyond AI engineering, we design, build, and host your entire application—from
                        pixel-perfect interfaces to enterprise-grade cloud infrastructure. Everything
                        your business needs, under one roof.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={item}
                            className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Link href="#contact-form">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="group relative px-10 py-5 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white text-lg font-bold tracking-wide flex items-center gap-3 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Sheen Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                            <span className="relative z-10">Get Started</span>
                            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
