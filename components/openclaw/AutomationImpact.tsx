"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowTrendingUp, HiOutlineClock, HiOutlineQueueList } from "react-icons/hi2";

const sourceSignals = [
    {
        id: "work-about-work",
        label: "Work about work",
        value: "60%",
        source: "Asana Anatomy of Work",
        href: "https://asana.com/resources/why-work-about-work-is-bad",
        note: "Asana reports that a large share of knowledge-work time is lost to status, searching, coordination, and duplicated effort.",
        bar: 60,
    },
    {
        id: "productivity-growth",
        label: "Productivity lift potential",
        value: "0.5-3.4 pts",
        source: "McKinsey Global Institute",
        href: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
        note: "McKinsey estimates that generative AI combined with other automation technologies can raise annual productivity growth.",
        bar: 72,
    },
    {
        id: "ticket-time",
        label: "Support-ticket reduction",
        value: "30+ min",
        source: "Zapier automation statistics",
        href: "https://zapier.com/blog/business-automation-statistics/",
        note: "Zapier cites support-ticket time reductions for IT teams using AI and automation.",
        bar: 45,
    },
];

const workflowStages = [
    { label: "Manual intake", before: 70, after: 28 },
    { label: "Research and routing", before: 62, after: 24 },
    { label: "Reporting", before: 54, after: 18 },
    { label: "Follow-up handoffs", before: 48, after: 16 },
];

const modelledOutcomes = [
    { label: "Hours reclaimed", value: "30", suffix: "/wk" },
    { label: "Manual touchpoints reduced", value: "58", suffix: "%" },
    { label: "Faster review cycle", value: "2.4", suffix: "x" },
];

export default function AutomationImpact() {
    const [activeSignal, setActiveSignal] = useState(sourceSignals[0]);

    return (
        <section id="automation-impact" className="relative overflow-hidden bg-black px-6 py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[12%] top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[150px]" />
                <div className="absolute right-[8%] bottom-0 h-96 w-96 rounded-full bg-violet-400/10 blur-[170px]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 70, damping: 18 }}
                    className="mb-14 max-w-3xl"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-white/45">
                        Automation impact
                    </p>
                    <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                        The useful target is less operational drag, not more software.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        These benchmarks are external signals, not Kaelux case studies. They help frame where
                        business automation should start: repeated work, measurable handoffs, and time that can
                        be returned to higher-value tasks.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 70, damping: 18 }}
                        className="space-y-4"
                    >
                        {sourceSignals.map((signal) => (
                            <motion.button
                                key={signal.id}
                                type="button"
                                onMouseEnter={() => setActiveSignal(signal)}
                                onFocus={() => setActiveSignal(signal)}
                                whileHover={{ y: -3 }}
                                className={`w-full rounded-[26px] border p-5 text-left transition-all duration-300 ${
                                    activeSignal.id === signal.id
                                        ? "border-white/24 bg-white/[0.08]"
                                        : "border-white/10 bg-white/[0.035] hover:border-white/18 hover:bg-white/[0.055]"
                                }`}
                            >
                                <div className="mb-4 flex items-center justify-between gap-4">
                                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/48">
                                        {signal.label}
                                    </span>
                                    <HiOutlineArrowTrendingUp className="h-5 w-5 text-white/50" />
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-semibold tracking-[-0.05em] text-white">
                                        {signal.value}
                                    </span>
                                </div>
                                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                                    <motion.div
                                        className="h-full rounded-full bg-white"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${signal.bar}%` }}
                                        animate={{ width: activeSignal.id === signal.id ? `${signal.bar}%` : `${Math.max(signal.bar - 22, 20)}%` }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.65, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 70, damping: 18 }}
                        className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_110px_rgba(0,0,0,0.32)] backdrop-blur"
                    >
                        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Active benchmark
                                </p>
                                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                                    {activeSignal.value} · {activeSignal.label}
                                </h3>
                                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                                    {activeSignal.note}
                                </p>
                            </div>
                            <a
                                href={activeSignal.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-xs font-semibold text-white/72 transition-colors hover:border-white/24 hover:text-white"
                            >
                                Source: {activeSignal.source}
                            </a>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {modelledOutcomes.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -4 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="rounded-3xl border border-white/10 bg-black/20 p-5"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                                        {item.label}
                                    </p>
                                    <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                                        {item.value}
                                        <span className="text-lg text-white/50">{item.suffix}</span>
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[26px] border border-white/10 bg-black/20 p-5">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                                    <HiOutlineQueueList className="h-5 w-5 text-white/70" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Modelled workflow reduction</p>
                                    <p className="text-xs text-white/45">Example only: a 10-person team with one repeated weekly process.</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {workflowStages.map((stage, index) => (
                                    <div key={stage.label}>
                                        <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                                            <span className="font-medium text-white/72">{stage.label}</span>
                                            <span className="text-white/42">
                                                {stage.before} min → {stage.after} min
                                            </span>
                                        </div>
                                        <div className="grid gap-1.5">
                                            <div className="h-2 overflow-hidden rounded-full bg-white/8">
                                                <motion.div
                                                    className="h-full rounded-full bg-white/28"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stage.before}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.08, duration: 0.6 }}
                                                />
                                            </div>
                                            <div className="h-2 overflow-hidden rounded-full bg-white/8">
                                                <motion.div
                                                    className="h-full rounded-full bg-gradient-to-r from-violet-300 to-white"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stage.after}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.2 + index * 0.08, duration: 0.6 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3 text-sm text-white/50">
                            <HiOutlineClock className="h-5 w-5" />
                            <span>Kaelux scopes against your real workflow before promising savings.</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
