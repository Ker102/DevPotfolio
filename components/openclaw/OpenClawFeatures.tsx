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
        title: "Framework fit",
        pain: "OpenClaw may be right, but so might Hermes, NanoClaw, or a local-first setup around another agent framework.",
        solution: "We choose the setup around your actual workflow rather than forcing one branded stack.",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Access boundaries",
        pain: "Personal agents can touch files, browsers, terminals, and accounts. Misconfigured access creates real risk.",
        solution: "We define practical guardrails, permissions, and environment boundaries before the agent starts doing work.",
    },
    {
        icon: HiOutlineBolt,
        title: "Daily workflow integration",
        pain: "A demo agent is easy. A useful daily agent needs messaging, context, account flows, and repeatable routines.",
        solution: "We wire the agent into the channels and tools where it can actually save time.",
    },
    {
        icon: HiOutlineCommandLine,
        title: "Local machine readiness",
        pain: "Agents often depend on local packages, browser profiles, shell access, credentials, and environment setup.",
        solution: "We prepare the workspace so the agent can operate without constant manual repair.",
    },
    {
        icon: HiOutlineServerStack,
        title: "Local or cloud choice",
        pain: "Some workflows belong on a personal machine. Others need a small hosted environment or remote access.",
        solution: "We decide deployment shape based on privacy, uptime, and cost instead of defaulting to cloud.",
    },
    {
        icon: HiOutlineLockClosed,
        title: "Ongoing maintenance",
        pain: "Agent frameworks move quickly, and broken dependencies can turn a useful tool into shelfware.",
        solution: "We document the setup and can scope follow-up maintenance when the workflow deserves it.",
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
                        Setup Scope
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Useful agents need more than{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            installation
                        </span>
                        .
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        The work is choosing the right agent pattern, setting boundaries, and connecting the
                        agent to the places where it can do useful work.
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
