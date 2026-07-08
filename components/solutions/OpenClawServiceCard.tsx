"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineBolt } from "react-icons/hi2";

export default function OpenClawServiceCard() {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Subtle separator */}
                <div className="flex items-center justify-center gap-6 mb-14">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 tracking-[0.2em] uppercase">
                        New Service
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
                </div>

                <Link href="/openclaw" className="block group">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14"
                    >
                        <div className="shrink-0 relative flex justify-center md:justify-start">
                            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-gray-200 bg-white shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.04]">
                                <HiOutlineBolt className="h-12 w-12 text-gray-900" />
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300">
                                    Business Automations
                                </h3>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-4 block">
                                Focused Workflow Builds
                            </span>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mb-6">
                                Kaelux scopes practical automations for repeated business workflows: intake,
                                research, reporting, handoffs, data cleanup, and internal operating systems.
                                The work starts from the process, then chooses the smallest durable build.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <FaArrowRight className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                                </span>
                                <span className="text-sm text-gray-400">|</span>
                                <span className="text-sm font-medium text-gray-500">
                                    Scoped engagement
                                </span>
                                <span className="text-sm text-gray-400">|</span>
                                {/* NEW badge — black-to-white gradient */}
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 text-white shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    New
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}
