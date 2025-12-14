"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Beams from "@/components/reactbits/Beams";

export default function SolutionsHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 bg-black overflow-hidden pt-20">

            {/* Background Ambient Glows */}
            {/* Background Light Pillars (ReactBits) */}
            <div className="absolute inset-0 z-0">
                <Beams />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-medium text-cyan-200 tracking-wide uppercase">Enterprise AI Infrastructure</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
                >
                    Enterprise-Grade <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 animate-gradient-x bg-[length:200%_auto]">
                        AI Infrastructure
                    </span> <br className="hidden md:block" />
                    & Automation
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12"
                >
                    We provide the proprietary software, LLMOps engineering, and custom tuning required to turn generic AI into reliable business automation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    {/* Primary CTA */}
                    <Link
                        href="#contact-form"
                        className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-transform active:scale-95"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Project
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        href="#features"
                        className="text-gray-300 hover:text-white font-medium text-lg border-b border-transparent hover:border-white transition-colors pb-0.5"
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
