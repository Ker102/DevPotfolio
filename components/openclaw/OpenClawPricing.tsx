"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const setupPaths = [
    {
        name: "Personal Setup",
        subtitle: "Founder / Creator Workspace",
        price: "Scoped",
        description:
            "A focused setup for one person or a small founder workspace using the agent framework that best fits the workflow.",
        features: [
            "Workflow and tool mapping",
            "OpenClaw, Hermes, NanoClaw, or alternative framework selection",
            "Local or cloud setup recommendation",
            "Model/API key and account integration guidance",
            "Basic guardrails and operating notes",
        ],
        cta: "Start setup inquiry",
        ctaHref: "#openclaw-contact",
        highlighted: true,
    },
    {
        name: "Custom Agent Build",
        subtitle: "Advanced / Team Workflow",
        price: "Custom",
        description:
            "A deeper engagement when the agent needs more integrations, stronger boundaries, or a team-ready operating environment.",
        features: [
            "Multi-tool workflow design",
            "Hosted or local environment architecture",
            "Messaging, browser, filesystem, and terminal integration where appropriate",
            "Security and access-control review",
            "Documentation and follow-up support options",
        ],
        cta: "Discuss custom setup",
        ctaHref: "#openclaw-contact",
        highlighted: false,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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

export default function OpenClawPricing() {
    return (
        <section id="pricing" className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-gray-500 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Setup Paths
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Scoped around the{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            real workflow
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Agent setup depends on tools, risk, access, and whether the work belongs locally or in the cloud.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {setupPaths.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative"
                        >
                            <div className="absolute -inset-[2px] rounded-[18px] bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] opacity-30 blur-lg group-hover:opacity-60 group-hover:blur-xl transition-all duration-700 pointer-events-none" />
                            <div className="absolute -bottom-2 left-8 right-8 h-6 bg-[linear-gradient(90deg,#FF3BFF,#5C24FF,#D94FD5)] blur-2xl rounded-full opacity-25 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                            <div className={`relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden bg-white ${
                                plan.highlighted
                                    ? "border-gray-300 shadow-2xl shadow-black/10"
                                    : "border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300"
                            }`}>
                                {plan.highlighted && (
                                    <div className="absolute top-5 right-5">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 text-white shadow-sm">
                                            First step
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] block mb-5">
                                        {plan.subtitle}
                                    </span>

                                    <div className="flex items-end gap-1 mb-4">
                                        <span className="text-5xl font-bold text-gray-900 tracking-tight">
                                            {plan.price}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <FaCheck className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <Link href={plan.ctaHref}>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`w-full py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
                                            plan.highlighted
                                                ? "bg-black text-white hover:shadow-xl hover:shadow-black/20"
                                                : "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200"
                                        }`}
                                    >
                                        {plan.cta}
                                        <FaArrowRight className="w-3.5 h-3.5" />
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
