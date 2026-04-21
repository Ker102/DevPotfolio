"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiCheck, HiOutlineCubeTransparent, HiOutlineWrenchScrewdriver, HiOutlineCog8Tooth } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { NeedHelpLink } from "@/components/ui/NeedHelpLink";

const corePlans = [
    {
        Icon: HiOutlineCubeTransparent,
        name: "Platform (SaaS)",
        subtitle: "Pre-Built Intelligence",
        price: "$499",
        period: "/mo",
        description: "Access our proprietary LLM tools with immediate plug-and-play integration.",
        features: [
            "PromptTriage prompt engineering suite",
            "Pre-built AI workflow templates",
            "API access & webhook integrations",
            "Usage-based compute billing",
            "Standard SLA (99.5% uptime)",
            "Community support + docs",
        ],
        cta: "Start Free Trial",
        highlight: false,
    },
    {
        Icon: HiOutlineWrenchScrewdriver,
        name: "Custom Engineering",
        subtitle: "Tailored Automation",
        price: "Custom",
        period: "",
        description: "We build custom agents and RAG pipelines specific to your data and workflows.",
        features: [
            "Dedicated AI engineering team",
            "Custom agent & RAG pipeline build",
            "Fine-tuned models on your data",
            "Architecture design & review",
            "Private deployment (your cloud or ours)",
            "Priority SLA (99.9% uptime)",
            "Dedicated Slack channel",
        ],
        cta: "Request a Proposal",
        highlight: true,
    },
    {
        Icon: HiOutlineCog8Tooth,
        name: "Managed LLMOps",
        subtitle: "Reliability at Scale",
        price: "$1,499",
        period: "/mo",
        description: "We handle fine-tuning, monitoring, and model updates so nothing breaks.",
        features: [
            "Continuous model monitoring",
            "Automated retraining pipelines",
            "Drift detection & alerting",
            "Model versioning & rollback",
            "Cost optimization reports",
            "24/7 on-call engineering support",
            "Quarterly performance reviews",
        ],
        cta: "Schedule a Call",
        highlight: false,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
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

export default function CorePricing() {
    return (
        <section className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Transparent{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        From plug-and-play AI tools to fully managed infrastructure —
                        choose the engagement model that fits your business.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {corePlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${plan.highlight
                                    ? "border-white/20 bg-white/[0.04]"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/15"
                                }`}
                        >
                            {/* Highlight accent */}
                            {plan.highlight && (
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
                                    <plan.Icon className="w-7 h-7 text-white/70" />
                                </div>

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.15em] mb-4 block">
                                    {plan.subtitle}
                                </span>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-gray-500 text-base ml-1">{plan.period}</span>
                                    )}
                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed mb-6">{plan.description}</p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <HiCheck className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link href="#contact-form">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${plan.highlight
                                                ? "bg-white text-black hover:bg-gray-100"
                                                : "border border-white/15 text-white hover:bg-white/5 hover:border-white/25"
                                            }`}
                                    >
                                        {plan.cta}
                                        <FaArrowRight className="w-3 h-3" />
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Custom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-500 text-sm mt-10"
                >
                    All plans include initial consultation. Volume discounts available for annual commitments.
                </motion.p>
                <div className="mt-4 flex justify-center">
                    <NeedHelpLink label="Need help choosing a plan?" />
                </div>
            </div>
        </section>
    );
}
