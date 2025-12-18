"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    HiOutlinePaintBrush,
    HiOutlineCodeBracket,
    HiOutlineCloud,
    HiOutlineRocketLaunch
} from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";

const services = [
    {
        icon: HiOutlinePaintBrush,
        title: "UI/UX Design",
        description: "Modern, responsive interfaces designed for optimal user experience and engagement."
    },
    {
        icon: HiOutlineCodeBracket,
        title: "Full-Stack Development",
        description: "End-to-end application development with robust backends and polished frontends."
    },
    {
        icon: HiOutlineCloud,
        title: "Cloud Infrastructure",
        description: "Scalable hosting solutions with managed databases, CDN, and automated deployments."
    },
    {
        icon: HiOutlineRocketLaunch,
        title: "Continuous Delivery",
        description: "CI/CD pipelines, monitoring, and maintenance to keep your platform running smoothly."
    }
];

// Double the services for infinite loop effect
const duplicatedServices = [...services, ...services];

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

                {/* Infinite Carousel */}
                <div className="relative mb-12 overflow-hidden">
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: [0, -50 * services.length + "%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedServices.map((service, index) => (
                            <div
                                key={index}
                                className="group flex-shrink-0 w-72 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Icon with chrome gradient */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-200 via-white to-gray-300 border border-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <service.icon className="w-7 h-7 text-transparent bg-clip-text bg-gradient-to-b from-gray-600 via-gray-500 to-gray-700" style={{ stroke: 'url(#chrome-gradient)' }} />
                                        {/* Fallback: use gray color */}
                                        <service.icon className="w-7 h-7 text-gray-600 absolute opacity-100" />
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
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Button - Chrome/Gray metallic style */}
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
                            className="group relative px-10 py-5 bg-gradient-to-b from-gray-100 to-gray-300 text-black text-lg font-bold tracking-wide flex items-center gap-3 rounded-full overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                        >
                            {/* Metallic Sheen Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                            <span className="relative z-10">Get Started</span>
                            <FaArrowRight className="relative z-10 text-black group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
