"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
                <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-cyan-400/8 blur-[110px]" />
                <div className="absolute bottom-0 right-[10%] h-64 w-64 rounded-full bg-violet-400/10 blur-[130px]" />
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-10 rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)] md:p-12"
                >
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/85">
                                Kaelux MedAI
                            </p>
                            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                                A new Kaelux division for secure medical research infrastructure.
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
                                <span
                                    key={point}
                                    className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80"
                                >
                                    {point}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
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
                                whileHover={{ x: 3 }}
                                className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                            >
                                Explore MedAI
                                <FaArrowRight className="text-xs" />
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
