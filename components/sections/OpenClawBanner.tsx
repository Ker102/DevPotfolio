"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineCloud, HiOutlineShieldCheck, HiOutlineBolt } from "react-icons/hi2";

import { AnimatedNumericText } from "@/components/ui/AnimatedNumberText";
import { NeedHelpLink } from "@/components/ui/NeedHelpLink";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";

const highlights = [
    {
        icon: HiOutlineBolt,
        label: "Always-On",
        desc: "99.9% uptime SLA",
    },
    {
        icon: HiOutlineCloud,
        label: "Zero Hardware",
        desc: "No Mac Mini needed",
    },
    {
        icon: HiOutlineShieldCheck,
        label: "Fully Managed",
        desc: "Security & updates included",
    },
];

export default function OpenClawBanner() {
    return (
        <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Subtle radial accent */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gray-200/40 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Separator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-6 mb-14"
                >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                    <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                        Featured
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </motion.div>

                <Link href="/openclaw" className="block group">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="flex justify-center mb-4"
                    >
                        <Image
                            src="/openclaw-logo.png"
                            alt="OpenClaw"
                            width={480}
                            height={160}
                            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] transition-all duration-500"
                            priority
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
                        className="text-center max-w-2xl mx-auto mb-10"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300">
                            OpenClaw in the Cloud
                        </h3>
                        <p className="text-gray-500 mb-5 text-base leading-relaxed">
                            Skip the Mac Mini. We deploy, secure, and manage your OpenClaw AI agent
                            in{" "}
                            <ScrollUnderline underlineClassName="via-gray-900/75">
                                production-grade cloud infrastructure
                            </ScrollUnderline>{" "}
                            for{" "}
                            <ScrollUnderline underlineClassName="via-gray-900/75">
                                always-on delivery
                            </ScrollUnderline>
                            , zero headaches.
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                            Learn More
                            <FaArrowRight className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                        </span>
                    </motion.div>
                </Link>

                {/* Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-8"
                >
                    {highlights.map((h, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <h.icon className="w-5 h-5 text-gray-700" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">{h.label}</p>
                                <AnimatedNumericText
                                    text={h.desc}
                                    className="text-xs text-gray-500"
                                    numberClassName="font-semibold text-gray-900"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Badge + Pricing hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-3"
                >
                    <AnimatedNumericText
                        text="Starting at $29/mo"
                        className="text-sm text-gray-500"
                        numberClassName="font-bold text-gray-900"
                    />
                    <NeedHelpLink label="Need help choosing?" className="text-gray-500 hover:text-gray-900 hover:decoration-gray-900" />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        New Service
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
