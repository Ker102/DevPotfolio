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
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ADetails:%0D%0A${formData.details}`;
        window.location.href = `mailto:ker102@kaelux.dev?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const socials = [
        { icon: FaEnvelope, href: "mailto:ker102@kaelux.dev", label: "Email" },
        { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com/ker102", label: "GitHub" },
        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
    ];

    return (
        <section id="contact-form" className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Get Started
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Start Your Project
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        Ready to automate? Tell us about your infrastructure needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">

                    {/* Contact Form - Glass Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
                        className="relative group"
                    >
                        <div className="relative bg-zinc-950/80 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm group-hover:border-white/15 transition-colors duration-500">
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
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300"
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
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300"
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
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your automation goals..."
                                    />
                                </div>

                                {/* Glass-style Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <FaPaperPlane className="text-sm" />
                                    Send Request
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* 'OR' Divider */}
                    <div className="relative flex items-center justify-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full max-w-[250px]" />
                        <span className="px-5 text-gray-600 font-medium text-xs uppercase tracking-[0.2em]">OR</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full max-w-[250px]" />
                    </div>

                    {/* Social/Media Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                        className="text-center"
                    >
                        <h3 className="text-white text-lg font-semibold mb-8">Connect via Social Media</h3>
                        <div className="flex flex-wrap justify-center gap-5">
                            {socials.map((social, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        className="flex p-4 bg-zinc-900/80 border border-white/5 rounded-full text-gray-400 hover:text-white hover:border-white/20 hover:bg-zinc-800 transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                        <span className="sr-only">{social.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
