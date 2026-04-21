"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { services, openclawPlans, ServicePlan } from "@/data/services";
import { NeedHelpLink } from "@/components/ui/NeedHelpLink";

interface PricingCategoryProps {
    title: string;
    description: string;
    plans: ServicePlan[];
    href: string;
    delay?: number;
}

function PricingCategory({ title, description, plans, href, delay = 0 }: PricingCategoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay }}
        >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{description}</p>
                    <div className="mt-3">
                        <NeedHelpLink />
                    </div>
                </div>
                <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                    Learn more <FaArrowRight className="text-xs" />
                </Link>
            </div>

            {/* Plans */}
            <div className={`grid gap-6 ${plans.length === 1 ? "max-w-lg" : plans.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-6 rounded-2xl border transition-all duration-300 ${plan.highlighted
                            ? "border-white/20 bg-white/[0.05]"
                            : "border-white/10 bg-white/[0.02]"
                            } hover:border-white/25 hover:bg-white/[0.06]`}
                    >
                        {plan.highlighted && (
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        )}

                        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em] mb-1">
                            {plan.subtitle}
                        </p>
                        <h4 className="text-lg font-bold text-white mb-3">{plan.name}</h4>

                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-4xl font-bold tracking-tight text-white">
                                {plan.price}
                            </span>
                            {plan.period && (
                                <span className="text-sm text-gray-500 font-medium">
                                    {plan.period}
                                </span>
                            )}
                        </div>

                        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                            {plan.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-2.5">
                                    <FaCheck className="w-3 h-3 text-white/60 mt-1 flex-shrink-0" />
                                    <span className="text-xs text-gray-400">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href={plan.ctaHref}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${plan.highlighted
                                    ? "bg-white text-black hover:bg-gray-100"
                                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                                    }`}
                            >
                                {plan.cta}
                                <FaArrowRight className="text-xs" />
                            </motion.button>
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default function PricingPageContent() {
    return (
        <section className="min-h-screen pt-32 pb-24 px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-4">
                        Pricing
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Transparent pricing for every service. Custom quotes for custom needs.
                    </p>
                </motion.div>

                {/* Pricing Categories */}
                <div className="space-y-20">
                    {/* Core AI Offerings */}
                    <PricingCategory
                        title="AI Solutions — Core Offerings"
                        description="Custom LLM integration, agentic workflows, and managed AI infrastructure"
                        plans={[
                            {
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
                                ctaHref: "/solutions#contact-form",
                                highlighted: false,
                            },
                            {
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
                                ctaHref: "/solutions#contact-form",
                                highlighted: true,
                            },
                            {
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
                                ctaHref: "/solutions#contact-form",
                                highlighted: false,
                            },
                        ]}
                        href="/solutions"
                        delay={0.05}
                    />

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* OpenClaw Cloud */}
                    <PricingCategory
                        title="OpenClaw Cloud"
                        description="Managed AI agent hosting — no hardware required"
                        plans={openclawPlans}
                        href="/openclaw"
                        delay={0.1}
                    />

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Platform Services */}
                    {services.map((service, index) => (
                        <div key={service.slug}>
                            <PricingCategory
                                title={service.title}
                                description={service.description}
                                plans={service.plans}
                                href={`/services/${service.slug}`}
                                delay={0.1 * (index + 1)}
                            />
                            {index < services.length - 1 && (
                                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
