"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import MedAIContactForm from "@/components/medai/MedAIContactForm";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";

const whoWeHelp = [
    "Retina research labs and ophthalmology departments working with imaging, infrastructure, or AI workflows.",
    "Audiology, hearing, and tinnitus research groups that need stronger engineering, secure tooling, or workflow infrastructure.",
    "Disease foundations and medical AI teams that need stronger DevSecOps, MLOps, and research tooling.",
    "Future collaborators in oncology imaging programs and broader disease-focused medical AI efforts as the division expands.",
] as const;

const collaborationModes = [
    "Research collaborations where Kaelux owns infrastructure, tooling, and delivery engineering.",
    "Grant-funded infrastructure or workflow projects that need an execution-focused technical partner.",
    "Open-source and early-stage partnerships where we maintain the engineering side and help teams move faster.",
] as const;

const stageSignals = [
    "Retina and ophthalmology work sit at the current focus level together with hearing and tinnitus research.",
    "We are actively looking for early collaborators in labs, hospitals, universities, and foundations.",
    "Cancer imaging, treatment-planning support, and other disease areas remain the longer-term expansion path.",
] as const;

const faqItems = [
    {
        question: "What is Kaelux MedAI?",
        answer:
            "Kaelux MedAI is the medical-research engineering division of Kaelux, focused on secure AI infrastructure, research tooling, DevSecOps, and MLOps for retina, hearing, and medical imaging teams.",
    },
    {
        question: "What are the current focus areas?",
        answer:
            "The current focus areas are retinal and ophthalmology-related work together with hearing and tinnitus research. Cancer imaging and other disease areas are part of the longer-term roadmap.",
    },
    {
        question: "What kind of collaboration is Kaelux MedAI looking for?",
        answer:
            "Kaelux MedAI is looking for labs, universities, hospitals, and foundations that need a technical infra and tooling partner for research collaborations, grant-funded infrastructure, or open-source and early-stage engineering work.",
    },
    {
        question: "Does Kaelux MedAI provide clinical diagnosis systems?",
        answer:
            "No. Kaelux MedAI is positioned around research infrastructure, secure tooling, workflow engineering, DevSecOps, and MLOps rather than clinical decision-making or patient-facing diagnosis.",
    },
] as const;

export default function MedAIPageClient() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-white/[0.05] blur-[160px]" />
                    <div className="absolute right-[10%] top-16 h-80 w-80 rounded-full bg-violet-300/[0.1] blur-[180px]" />
                    <div className="absolute bottom-0 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[160px]" />
                </div>

                <div className="relative z-10 container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 34, scale: 0.988, filter: "blur(14px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative grid gap-12 overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_24%,rgba(255,255,255,0.025)_100%)] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-[28px] md:p-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)] lg:items-end"
                    >
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(188,170,255,0.12),transparent_30%)]" />
                            <div className="absolute inset-[1px] rounded-[35px] border border-white/[0.04]" />
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
                                    Kaelux MedAI
                                </p>
                                <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                                    Last updated April 22, 2026
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
                                    The current focus areas are{" "}
                                    <ScrollUnderline underlineClassName="via-white/72">
                                        retina
                                    </ScrollUnderline>{" "}
                                    and ophthalmology-related work together
                                    with hearing and tinnitus research: imaging workflows, secure pipelines,
                                    rare disease and sensory-disease tooling, and the engineering layer needed
                                    to move serious research programs forward.
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

                        <div className="rounded-[30px] border border-white/10 bg-black/18 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
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
                            <div className="mt-7 border-t border-white/10 pt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                                    At a glance
                                </p>
                                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                                    <li>Current focus: retina, ophthalmology, hearing, and tinnitus research support.</li>
                                    <li>Core work: secure AI infra, research tooling, DevSecOps, and MLOps.</li>
                                    <li>Stage: actively seeking early collaborators and pilot projects.</li>
                                </ul>
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
                            className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.24)] backdrop-blur-[24px]"
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
                                    At the same current-focus level, the division is also targeting hearing and
                                    tinnitus research where better tooling, data pipelines, and engineering
                                    support can accelerate technical work. After that foundation is established,
                                    cancer imaging, treatment-planning support, and broader disease programs are
                                    the long-term expansion path.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.24)] backdrop-blur-[24px]"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Who We Help
                            </p>
                            <ul className="space-y-4 text-lg leading-8 text-gray-300">
                                {whoWeHelp.map((item) => (
                                    <li key={item} className="rounded-[24px] border border-white/10 bg-black/18 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
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
                            className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.24)] backdrop-blur-[24px]"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                How We Collaborate
                            </p>
                            <ul className="space-y-4 text-lg leading-8 text-gray-300">
                                {collaborationModes.map((item) => (
                                    <li key={item} className="border-l border-white/18 pl-5">
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
                            className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.24)] backdrop-blur-[24px]"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Current Stage
                            </p>
                            <ul className="space-y-4 text-lg leading-8 text-gray-300">
                                {stageSignals.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/75" />
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

            <section className="border-t border-white/8 px-6 py-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                            FAQ
                        </p>
                        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                            Clear answers for labs and collaborators evaluating the division.
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {faqItems.map((item) => (
                            <motion.article
                                key={item.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_72px_rgba(0,0,0,0.22)] backdrop-blur-[24px]"
                            >
                                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                                <p className="mt-3 text-base leading-7 text-gray-300">{item.answer}</p>
                            </motion.article>
                        ))}
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
                        <p className="text-base leading-7 text-white/68">
                            We are especially interested in early collaborators working on retinal imaging,
                            ophthalmology, hearing, tinnitus, and rare disease-related technical problems.
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
