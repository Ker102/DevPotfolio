"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function SolutionsContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        details: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mailto fallback
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ADetails:%0D%0A${formData.details}`;
        window.location.href = `mailto:ker102@kaelux.dev?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact-form" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Project</h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Ready to automate? Tell us about your infrastructure needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Work Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                        placeholder="jane@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="details" className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
                                <textarea
                                    name="details"
                                    id="details"
                                    required
                                    rows={4}
                                    value={formData.details}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                                    placeholder="Tell us about your automation goals..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25"
                            >
                                <FaPaperPlane className="text-sm" />
                                Send Request
                            </button>
                        </form>
                    </motion.div>

                    {/* 'OR' Divider */}
                    <div className="relative flex items-center justify-center">
                        <div className="h-px bg-white/10 w-full max-w-[200px]" />
                        <span className="px-4 text-gray-500 font-medium text-sm uppercase tracking-widest">OR</span>
                        <div className="h-px bg-white/10 w-full max-w-[200px]" />
                    </div>

                    {/* Social/Media Contact */}
                    <div className="text-center">
                        <h3 className="text-white text-xl font-bold mb-8">Connect via Social Media</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { icon: FaEnvelope, href: "mailto:ker102@kaelux.dev", label: "Email", color: "hover:text-red-400" },
                                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
                                { icon: FaGithub, href: "https://github.com/ker102", label: "GitHub", color: "hover:text-white" },
                                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank" // For external links
                                    className={`p-4 bg-white/5 border border-white/10 rounded-full text-gray-400 ${social.color} transition-all hover:scale-110 hover:bg-white/10 hover:border-white/20`}
                                >
                                    <social.icon className="w-6 h-6" />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
