"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";

const focusPoints = [
    "Retina research tooling",
    "Hearing and tinnitus tooling",
    "Secure AI infrastructure",
    "Early collaborator program",
] as const;

export default function MedAIIntro() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-24 md:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-16 h-56 w-56 rounded-full bg-white/[0.05] blur-[120px]" />
                <div className="absolute right-[12%] top-8 h-72 w-72 rounded-full bg-violet-300/[0.08] blur-[140px]" />
                <div className="absolute bottom-0 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[150px]" />
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 42, scale: 0.985, filter: "blur(14px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                    className="relative grid gap-10 overflow-hidden rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_24%,rgba(255,255,255,0.025)_100%)] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-[28px] md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)] md:p-12"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(188,170,255,0.12),transparent_30%)]" />
                        <div className="absolute inset-[1px] rounded-[33px] border border-white/[0.04]" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
                                Kaelux MedAI
                            </p>
                            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                                A{" "}
                                <ScrollUnderline underlineClassName="via-white/72">
                                    new
                                </ScrollUnderline>{" "}
                                Kaelux division for secure medical research infrastructure.
                            </h2>
                        </div>

                        <div className="space-y-4 text-base leading-8 text-gray-300 md:text-lg">
                            <p>
                                Kaelux MedAI applies our AI, infrastructure, and DevSecOps capabilities to
                                practical tooling for medical research teams that need production discipline,
                                not another fragile prototype.
                            </p>
                            <p>
                                The division is currently focused on retina and ophthalmology work together
                                with hearing and tinnitus research, with longer-term interest in cancer
                                imaging and treatment-planning support.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {focusPoints.map((point) => (
                                <motion.span
                                    key={point}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-full border border-white/12 bg-black/18 px-4 py-2 text-sm font-medium text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                                >
                                    {point}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 18, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-black/14 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md md:border-l md:border-t md:pl-8 md:pt-6"
                    >
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Positioning
                            </p>
                            <p className="text-base leading-7 text-gray-300">
                                MedAI is being built as a serious technical partner for labs, departments,
                                and foundations that need secure infrastructure, research tooling, MLOps,
                                and engineering support around medical AI work.
                            </p>
                            <p className="text-sm leading-7 text-white/62">
                                Early collaborators are especially welcome in retinal imaging, hearing and
                                tinnitus research, rare disease work, and ophthalmology-adjacent projects.
                            </p>
                        </div>

                        <Link href="/medai" className="self-start">
                            <motion.span
                                whileHover={{ x: 3, boxShadow: "0 16px 36px rgba(0,0,0,0.26)" }}
                                className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/92"
                            >
                                Explore MedAI
                                <FaArrowRight className="text-xs" />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
