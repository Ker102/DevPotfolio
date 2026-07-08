"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { submitContactForm } from "@/lib/contact-form";

export default function OpenClawContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        plan: "automation-sprint",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");
        try {
            await submitContactForm({
                source: "Business Automations",
                name: formData.name,
                email: formData.email,
                company: formData.company,
                plan: formData.plan,
                message: formData.message,
            });
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                plan: "automation-sprint",
                message: "",
            });
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong while sending your request.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="openclaw-contact" className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Automation Inquiry
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Tell us what should be{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            automated
                        </span>{" "}
                        first.
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
                        Send the workflow, tools, data, and handoffs you have in mind. Kaelux will respond with the next sensible step.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden"
                    style={{ background: "#09090b" }}
                >
                    <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                    <div className="relative z-10 p-8 md:p-10">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Message sent</h3>
                                <p className="text-gray-400">
                                    Your business automation inquiry has been sent to Kaelux.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            Name
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            Email
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
                                            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Company / Team (Optional)
                                    </label>
                                    <input
                                        name="company"
                                        type="text"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company, studio, or personal workspace"
                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Interested In
                                    </label>
                                    <select
                                        name="plan"
                                        value={formData.plan}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="automation-sprint">Automation sprint</option>
                                        <option value="custom-automation-build">Custom automation build</option>
                                        <option value="workflow-scoping">Workflow scoping</option>
                                        <option value="unsure">Not sure yet</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what work repeats, which tools or data it touches, who reviews it, and what a good result would look like."
                                        rows={4}
                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-sm resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-full bg-white text-black font-semibold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                                                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>

                                {errorMessage ? (
                                    <p className="text-sm text-red-400 text-center">{errorMessage}</p>
                                ) : null}
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
