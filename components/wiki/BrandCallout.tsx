"use client";

import { motion } from "framer-motion";

interface BrandCalloutProps {
    children: React.ReactNode;
    variant?: "default" | "highlight" | "subtle";
}

export default function BrandCallout({ children, variant = "default" }: BrandCalloutProps) {
    const variants = {
        default: "bg-gradient-to-r from-cyan-950/50 via-slate-900/50 to-purple-950/50 border-cyan-500/30",
        highlight: "bg-gradient-to-r from-purple-950/60 via-slate-900/60 to-cyan-950/60 border-purple-500/40",
        subtle: "bg-slate-900/30 border-slate-700/30",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative my-8 p-6 rounded-xl border ${variants[variant]} backdrop-blur-sm`}
        >
            {/* Decorative gradient orb */}
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 text-gray-200 text-lg leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}
