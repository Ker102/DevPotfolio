"use client";

import { motion } from "framer-motion";
import {
    HiOutlineShieldCheck,
    HiOutlineBolt,
    HiOutlineWrenchScrewdriver,
    HiOutlineServerStack,
    HiOutlineLockClosed,
    HiOutlineCommandLine,
} from "react-icons/hi2";

const setupConcerns = [
    {
        icon: HiOutlineWrenchScrewdriver,
        title: "Workflow fit",
        pain: "Most automation fails because the workflow was never clearly mapped before tools were added.",
        solution: "We start with the repeated business process, the handoffs, and the outcome that should improve.",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Access boundaries",
        pain: "Automations can touch accounts, files, customer data, and internal systems. Loose access creates real risk.",
        solution: "We define practical guardrails, permissions, and review points before automating meaningful work.",
    },
    {
        icon: HiOutlineBolt,
        title: "Tool integration",
        pain: "A demo workflow is easy. A useful business automation needs to fit the tools people already use.",
        solution: "We wire automations into the channels, databases, documents, and systems where work actually happens.",
    },
    {
        icon: HiOutlineCommandLine,
        title: "System readiness",
        pain: "Business workflows often depend on messy data, brittle exports, browser-only tools, and undocumented routines.",
        solution: "We identify what needs cleanup, what can be automated now, and what should stay manual.",
    },
    {
        icon: HiOutlineServerStack,
        title: "Deployment shape",
        pain: "Some automations belong inside existing tools. Others need a small internal app, scheduled job, or agentic workflow.",
        solution: "We choose the simplest durable shape instead of defaulting to a platform rebuild.",
    },
    {
        icon: HiOutlineLockClosed,
        title: "Ongoing maintenance",
        pain: "Automations decay when upstream tools, schemas, or team habits change.",
        solution: "We document the operating model and can scope follow-up maintenance when the workflow deserves it.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 18,
        },
    },
};

export default function OpenClawFeatures() {
    return (
        <section className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Automation Scope
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Useful automations need more than{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            prompts
                        </span>
                        .
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        The work is choosing the right process, setting boundaries, and connecting the
                        automation to the places where it can actually save time.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {setupConcerns.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative p-7 bg-zinc-900/60 rounded-2xl hover:bg-zinc-800/60 transition-all duration-500 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(0,0,0,0.5)]"
                        >
                            <motion.div
                                className="mb-5 text-white/80 group-hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.15, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <item.icon className="w-8 h-8" strokeWidth={1.5} />
                            </motion.div>

                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                <span className="text-red-400/80 font-medium">The risk: </span>
                                {item.pain}
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                <span className="text-emerald-400/80 font-medium">The setup: </span>
                                {item.solution}
                            </p>

                            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
