"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
    {
        question: "Is this still OpenClaw hosting?",
        answer:
            "The route remains for compatibility, but the offer is broader now: personal AI agent setup. OpenClaw can be one option, alongside Hermes, NanoClaw, or another agent framework if it fits better.",
    },
    {
        question: "Who is this for?",
        answer:
            "Founders, creators, solo operators, and small teams who want an agentic workspace configured around real daily work instead of a demo-only tool.",
    },
    {
        question: "Do you always deploy to the cloud?",
        answer:
            "No. Some setups should stay local because of privacy, filesystem access, browser profiles, or cost. Others benefit from a hosted environment. The deployment shape is part of the scoping.",
    },
    {
        question: "Can I bring my own model or API keys?",
        answer:
            "Yes. The setup can work with the model providers and keys you already use, assuming the selected framework supports them and the access pattern is reasonable.",
    },
    {
        question: "What integrations can be included?",
        answer:
            "Messaging, browser workflows, local files, shell tasks, and tool-specific routines can be considered. The final scope depends on security, reliability, and what the agent can do safely.",
    },
    {
        question: "Is this a subscription product?",
        answer:
            "Not by default. The first step is a scoped setup. Ongoing support can be discussed only if the workflow is important enough to justify maintenance.",
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
                        Agent setup{" "}
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
