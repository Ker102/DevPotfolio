"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
    {
        question: "Is this still OpenClaw hosting?",
        answer:
            "No. The route remains for compatibility, but the active offer is business automations. OpenClaw or another agent framework may be used only if it is the right implementation detail for a workflow.",
    },
    {
        question: "Who is this for?",
        answer:
            "Businesses and teams with repeated operational work that is painful enough to automate but specific enough to scope seriously.",
    },
    {
        question: "Do you always build with AI agents?",
        answer:
            "No. The implementation can be a small internal tool, workflow integration, scheduled job, documented operating system, or agentic workflow. The workflow decides the shape.",
    },
    {
        question: "Can this connect to our existing tools?",
        answer:
            "Usually, yes. CRM, spreadsheets, inboxes, documents, databases, browser-only tools, and internal APIs can be considered, depending on access, security, and reliability constraints.",
    },
    {
        question: "What kinds of workflows fit?",
        answer:
            "Intake, research, reporting, lead qualification, document preparation, handoff tracking, data cleanup, and internal review workflows are better fits than vague requests to automate everything.",
    },
    {
        question: "Is this a subscription product?",
        answer:
            "Not by default. The first step is a scoped automation engagement. Ongoing support can be discussed only if the workflow is important enough to justify maintenance.",
    },
];

export default function OpenClawFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-gray-500 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Automation{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            questions
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                                    openIndex === index
                                        ? "border-gray-300 bg-gray-50 shadow-sm"
                                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50"
                                }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="shrink-0"
                                    >
                                        <HiChevronDown className="w-5 h-5 text-gray-400" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
