"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import MedAIContactForm from "@/components/medai/MedAIContactForm";

const whoWeHelp = [
    "Retina research labs and ophthalmology departments working with imaging, infrastructure, or AI workflows.",
    "Disease foundations and medical AI teams that need stronger DevSecOps, MLOps, and research tooling.",
    "Future collaborators in audiology, tinnitus research, and oncology imaging programs as the division expands.",
] as const;

const collaborationModes = [
    "Research collaborations where Kaelux owns infrastructure, tooling, and delivery engineering.",
    "Grant-funded infrastructure or workflow projects that need an execution-focused technical partner.",
    "Open-source and early-stage partnerships where we maintain the engineering side and help teams move faster.",
] as const;

const stageSignals = [
    "Retina-first and ophthalmology-adjacent projects are the current focus.",
    "We are actively looking for early collaborators in labs, hospitals, universities, and foundations.",
    "The long-term path is retina first, then hearing and tinnitus, then cancer imaging and treatment-planning support.",
] as const;

export default function MedAIPageClient() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[160px]" />
                    <div className="absolute right-[10%] top-16 h-80 w-80 rounded-full bg-violet-400/12 blur-[180px]" />
                </div>

                <div className="relative z-10 container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)] lg:items-end"
                    >
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                                    Kaelux MedAI
                                </p>
                                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                                    Practical AI infrastructure and research tooling for medical teams.
                                </h1>
                            </div>

                            <div className="max-w-3xl space-y-4 text-lg leading-8 text-gray-300">
                                <p>
                                    Kaelux MedAI is the medical-research division of Kaelux. We apply our AI,
                                    infrastructure, security, and engineering capabilities to build practical,
                                    secure tooling for research environments that need more than experiments.
                                </p>
                                <p>
                                    The current focus is retina first: retinal imaging, ophthalmology-related
                                    workflows, and rare disease or eye-disease projects that need stronger
                                    infrastructure, MLOps, and engineering support.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Link
                                    href="#medai-contact"
                                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                                >
                                    Collaborate with us
                                    <FaArrowRight className="text-xs" />
                                </Link>
                                <a
                                    href="mailto:business@kaelux.dev"
                                    className="text-sm font-medium text-white/72 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                                >
                                    business@kaelux.dev
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                                Scope
                            </p>
                            <div className="mt-5 space-y-4 text-base leading-7 text-gray-300">
                                <p>
                                    MedAI focuses on research infrastructure, secure tooling, DevSecOps, MLOps,
                                    and workflow engineering for medical AI programs.
                                </p>
                                <p className="text-white/78">
                                    We are not positioning this division as clinical decision-making or
                                    patient-facing diagnosis. The operating scope is technical infrastructure
                                    and tooling for research teams.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="border-t border-white/8 px-6 py-20">
                <div className="container mx-auto max-w-6xl space-y-16">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Mission and Focus
                            </p>
                            <div className="space-y-4 text-lg leading-8 text-gray-300">
                                <p>
                                    The immediate path is retina and ophthalmology work: retinal disease,
                                    retinal imaging pipelines, rare disease-related tooling, and the secure
                                    operational layer around research AI systems.
                                </p>
                                <p>
                                    Over time, the division expands from retina into hearing and tinnitus
                                    research, and later into cancer imaging and treatment-planning support
                                    where strong infrastructure and workflow reliability matter.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Who We Help
                            </p>
                            <ul className="space-y-4 text-lg leading-8 text-gray-300">
                                {whoWeHelp.map((item) => (
                                    <li key={item} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                How We Collaborate
                            </p>
                            <ul className="space-y-4 text-lg leading-8 text-gray-300">
                                {collaborationModes.map((item) => (
                                    <li key={item} className="border-l border-cyan-300/35 pl-5">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-base leading-7 text-white/65">
                                The role is clear: Kaelux MedAI operates as a technical infra and tooling
                                partner so research teams can move faster without adding another fragile
                                engineering dependency to the project.
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-7"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Current Stage
                            </p>
                            <ul className="space-y-4 text-lg leading-8 text-gray-300">
                                {stageSignals.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-base leading-7 text-white/72">
                                The near-term goal is to build real traction under Kaelux through projects,
                                pilots, open-source work, and research collaborations. If that becomes a
                                repeatable product line, it can later spin out as its own deep-tech startup.
                            </p>
                        </motion.section>
                    </div>
                </div>
            </section>

            <section id="medai-contact" className="border-t border-white/8 px-6 py-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                            Collaboration
                        </p>
                        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                            Looking for labs and teams that need a technical partner.
                        </h2>
                        <p className="text-lg leading-8 text-gray-300">
                            If your lab, department, hospital group, university team, or foundation needs
                            infrastructure, tooling, DevSecOps, MLOps, or engineering support around a
                            research program, send the context here or email us directly.
                        </p>
                        <a
                            href="mailto:business@kaelux.dev"
                            className="inline-block text-base font-medium text-white/75 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
                        >
                            business@kaelux.dev
                        </a>
                    </div>

                    <MedAIContactForm />
                </div>
            </section>
        </main>
    );
}
