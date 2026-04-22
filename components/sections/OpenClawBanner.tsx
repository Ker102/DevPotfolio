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
                <div className="absolute top-1/2 left-1/2 h-[720px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55 blur-3xl" />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="pointer-events-none absolute inset-x-8 top-10 bottom-10 overflow-hidden rounded-[2.4rem] md:inset-x-12 md:top-12 md:bottom-12">
                    <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_28%_56%,rgba(239,68,68,0.34),transparent_24%),radial-gradient(circle_at_50%_28%,rgba(139,92,246,0.30),transparent_26%),radial-gradient(circle_at_74%_54%,rgba(217,70,239,0.28),transparent_24%),radial-gradient(circle_at_52%_72%,rgba(168,85,247,0.16),transparent_28%)] blur-[90px] opacity-95" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 18 }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/55 bg-white/18 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-[32px] md:rounded-[2.4rem] md:p-10"
                >
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.04)_38%,rgba(255,255,255,0.09)_100%)] opacity-90" />
                    </div>

                    <div className="relative z-10">
                        {/* Separator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-12 flex items-center justify-center gap-6"
                        >
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/35 to-white/35" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-700">
                                Featured
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/35 to-white/35" />
                        </motion.div>

                        <Link href="/openclaw" className="group block">
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 60, damping: 18 }}
                                className="mb-4 flex justify-center"
                            >
                                <Image
                                    src="/openclaw-logo.png"
                                    alt="OpenClaw"
                                    width={480}
                                    height={160}
                                    className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)] group-hover:drop-shadow-[0_35px_60px_rgba(94,32,74,0.22)] group-hover:scale-[1.03] transition-all duration-500"
                                    priority
                                />
                            </motion.div>

                            {/* Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
                                className="mx-auto mb-10 max-w-2xl text-center"
                            >
                                <h3 className="mb-3 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                                    OpenClaw in the Cloud
                                </h3>
                                <p className="mb-5 text-base leading-relaxed text-gray-600">
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
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all duration-300 group-hover:gap-3">
                                    Learn More
                                    <FaArrowRight className="text-gray-500 transition-colors duration-300 group-hover:text-gray-900" />
                                </span>
                            </motion.div>
                        </Link>

                        {/* Feature Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
                            className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-3"
                        >
                            {highlights.map((h, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-2xl border border-white/35 bg-white/40 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-all duration-300 hover:bg-white/50"
                                >
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/45">
                                        <h.icon className="h-5 w-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{h.label}</p>
                                        <AnimatedNumericText
                                            text={h.desc}
                                            className="text-xs text-gray-600"
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
                                className="text-sm text-gray-600"
                                numberClassName="font-bold text-gray-900"
                            />
                            <NeedHelpLink label="Need help choosing?" className="text-gray-600 hover:text-gray-900 hover:decoration-gray-900" />
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                New Service
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
