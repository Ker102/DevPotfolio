"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, Bot, Sparkles } from "lucide-react";

export default function DiagnoserCTA() {
    const [input, setInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            const encodedMessage = encodeURIComponent(input.trim());
            router.push(`/diagnoser?q=${encodedMessage}`);
        } else {
            router.push("/diagnoser");
        }
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-white">
            <div className="container mx-auto max-w-3xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    {/* Professional Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/80 border border-gray-200/50 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] mb-8 transition-all hover:border-gray-300/50">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" />
                        <span className="text-sm text-gray-600 font-semibold tracking-wide">Intelligent Diagnostics</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 drop-shadow-sm">
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#000000_0%,#434343_50%,#000000_100%)]">
                            Not Sure Where to Start?
                        </span>
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Let our neural engine analyze your business infrastructure and architect the perfect solution.
                    </p>
                </motion.div>

                {/* Chat Preview Box - Deep Black / Chrome Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${isFocused
                        ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20 scale-[1.02]"
                        : "shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]"
                        }`}
                    style={{ background: '#09090b' }} // Zinc-950
                >
                    {/* Glass Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                    {/* Chrome Border */}
                    <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Chat Header */}
                        <div className="flex items-center gap-4 px-8 py-5 border-b border-white/5 bg-white/[0.02]">
                            {/* Abstract Brand Icon */}
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm tracking-wide">Kaelux Neural Agent</h3>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs text-zinc-400 font-medium">System Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Initial Question */}
                        <div className="p-8">
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path d="M9 10a1 1 0 00-1 1v4a1 1 0 102 0v-2.5" />
                                            <path d="M14 13.5V11a1 1 0 10-2 0v4a1 1 0 102 0" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-zinc-900/80 border border-white/10 text-zinc-300 rounded-2xl rounded-tl-sm px-6 py-5 shadow-inner max-w-[90%] backdrop-blur-sm">
                                    <p className="leading-relaxed font-light text-[15px]">
                                        Analyzing system parameters... <br />
                                        I can help optimize your infrastructure.
                                        <span className="block mt-3 font-medium text-white">Which sector should we focus on?</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-5 border-t border-white/5 bg-black/20">
                            <div className="flex items-center gap-3 relative">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    placeholder="Describe your architecture needs..."
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-5 pr-14 py-4 
                                   text-white placeholder-zinc-600 focus:outline-none focus:ring-1 
                                   focus:ring-white/20 focus:border-white/20 transition-all font-light text-sm"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-2 p-2.5 rounded-lg bg-white text-black 
                                   hover:bg-gray-100 transition-colors shadow-lg shadow-white/5"
                                >
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </div>
                            <p className="text-[11px] text-zinc-600 mt-4 text-center tracking-widest uppercase font-medium">
                                Press Enter to Initialize
                            </p>
                        </form>
                    </div>
                </motion.div>

                {/* Trust indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center items-center gap-6 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <span className="text-xs font-mono text-gray-400">Powered by Enterprise Neural Engine v3.5</span>
                </motion.div>
            </div>
        </section>
    );
}
