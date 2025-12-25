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
            // Encode the message and redirect to diagnoser
            const encodedMessage = encodeURIComponent(input.trim());
            router.push(`/diagnoser?q=${encodedMessage}`);
        } else {
            // Just go to diagnoser if no message
            router.push("/diagnoser");
        }
    };

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-white">
            {/* Background glow effects - subtle purple accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/30 via-transparent to-pink-200/30 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-3xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-purple-700 font-medium">AI-Powered Consulting</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 mb-4">
                        Not Sure Where to Start?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Let our AI consultant analyze your business needs and recommend the perfect solution.
                    </p>
                </motion.div>

                {/* Chat Preview Box - Dark themed card on white background */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50 transition-all duration-300 ${isFocused
                        ? "shadow-purple-300/50 ring-2 ring-purple-400"
                        : ""
                        }`}
                    style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)' }}
                >
                    {/* Chat Header */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white text-sm">Kaelux Diagnostic Agent</h3>
                            <p className="text-xs text-gray-400">Ready to help</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                            <span className="text-xs text-gray-400">Online</span>
                        </div>
                    </div>

                    {/* Initial Question from Bot */}
                    <div className="p-6">
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white/10 text-gray-100 rounded-2xl px-4 py-3 max-w-[85%]">
                                <p className="leading-relaxed">
                                    Hello! I&apos;m here to understand your business and recommend the right AI solutions.
                                    <span className="block mt-2 font-medium text-white">What industry does your business operate in?</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/20">
                        <div className="flex items-center gap-3">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder="E.g., Healthcare, E-commerce, Finance..."
                                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 
                                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                                   focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
                                   flex items-center justify-center text-white
                                   hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                            >
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Press send to start your consultation →
                        </p>
                    </form>
                </motion.div>

                {/* Trust indicator */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-xs text-gray-500 mt-6"
                >
                    Powered by Groq • Llama 3.3 • Real-time model search via Hugging Face
                </motion.p>
            </div>
        </section>
    );
}
