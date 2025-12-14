"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about-kaelux" },
    { label: "Services", href: "#features" },
    { label: "Contact", href: "#contact-form" }
];

export default function SolutionsFooter() {
    return (
        <footer className="py-12 px-6 bg-black border-t border-white/5 relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    {/* Logo/Brand */}
                    <Link href="/" className="text-xl font-bold text-white tracking-tight hover:text-violet-300 transition-colors duration-300">
                        Kaelux<span className="text-violet-400">.</span>
                    </Link>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Kaelux. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
