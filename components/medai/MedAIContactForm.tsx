"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/lib/contact-form";

const collaborationModes = [
    "Research collaboration",
    "Grant-funded infrastructure",
    "Open-source / early collaboration",
    "Not sure yet",
] as const;

export default function MedAIContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        plan: collaborationModes[0],
        details: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            await submitContactForm({
                source: "MedAI Collaboration",
                name: formData.name,
                email: formData.email,
                company: formData.company,
                plan: formData.plan,
                details: formData.details,
            });

            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                plan: collaborationModes[0],
                details: "",
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
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-white/12 bg-white/[0.03] p-8 md:p-10"
        >
            {isSubmitted ? (
                <div className="space-y-3 py-10 text-center">
                    <h3 className="text-2xl font-semibold text-white">Collaboration request sent</h3>
                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300">
                        Your inquiry has been sent to business@kaelux.dev. We&apos;ll review it and reply
                        with the next step or a follow-up question.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Dr. Alex Example"
                                className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-cyan-300/45"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                                Work Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="researcher@lab.edu"
                                className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-cyan-300/45"
                            />
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px]">
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                                Institution / Lab / Department
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="University department, hospital lab, foundation, or research group"
                                className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-cyan-300/45"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="plan" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                                Collaboration Type
                            </label>
                            <select
                                id="plan"
                                name="plan"
                                value={formData.plan}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-300/45"
                            >
                                {collaborationModes.map((mode) => (
                                    <option key={mode} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="details" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                            Project Context
                        </label>
                        <textarea
                            id="details"
                            name="details"
                            required
                            rows={6}
                            value={formData.details}
                            onChange={handleChange}
                            placeholder="Tell us what you are building, which disease area or imaging workflow is involved, where the engineering bottleneck is, and what kind of technical partnership would help."
                            className="w-full rounded-3xl border border-white/12 bg-black/30 px-4 py-4 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-cyan-300/45"
                        />
                    </div>

                    {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}

                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="max-w-xl text-sm leading-6 text-white/60">
                            We&apos;re especially interested in early retinal imaging, ophthalmology, and
                            rare-disease projects that need a technical partner on infrastructure,
                            tooling, or secure AI workflows.
                        </p>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Sending..." : "Collaborate with us"}
                        </motion.button>
                    </div>
                </form>
            )}
        </motion.div>
    );
}
