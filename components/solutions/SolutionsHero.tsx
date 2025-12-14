"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Beams from "@/components/reactbits/Beams";

export default function SolutionsHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 bg-black overflow-hidden pt-20">

            {/* Background Light Pillars (ReactBits) */}
            <div className="absolute inset-0 z-0">
                <Beams />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* Animated Badge - Glass Style */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-semibold text-gray-300 tracking-[0.15em] uppercase">Enterprise AI Infrastructure</span>
                </motion.div>

                {/* Main Headline - Chrome/Silver gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
                >
                    Enterprise-Grade <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-violet-300">
                        AI Infrastructure
                    </span> <br className="hidden md:block" />
                    & Automation
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.35 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12"
                >
                    We provide the proprietary software, LLMOps engineering, and custom tuning required to turn generic AI into reliable business automation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    {/* Primary CTA - Glass Style (matching badge) */}
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            href="#contact-form"
                            className="group relative px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 flex items-center gap-2"
                        >
                            Start Your Project
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>

                    {/* Secondary CTA */}
                    <Link
                        href="#features"
                        className="text-gray-400 hover:text-white font-medium text-lg border-b border-transparent hover:border-white/50 transition-all duration-300 pb-0.5"
                    >
                        Learn How It Works
                    </Link>
                </motion.div>

            </div>

            {/* Decorative Grid/Lines at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
