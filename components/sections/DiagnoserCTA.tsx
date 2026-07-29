"use client";

import { useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import Link from "next/link";
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const quickPrompts = [
    "What is Kaelux researching?",
    "How are Harneloop and ViperMesh connected?",
    "I want to invest or partner.",
    "Can Kaelux securely automate a business workflow?",
];

const initialAgentReply =
    "Ask about Kaelux research, open-source projects, ventures, partnerships, or secure business automations.";

export default function DiagnoserCTA() {
    const [input, setInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const { messages, sendMessage, status, error, clearError } = useChat({
        transport: new DefaultChatTransport({ api: "/api/chat" }),
    });
    const isLoading = status === "streaming" || status === "submitted";

    const latestAssistantText = useMemo(() => {
        for (let i = messages.length - 1; i >= 0; i -= 1) {
            const message = messages[i];

            if (message.role !== "assistant" || !message.parts) {
                continue;
            }

            return message.parts
                .filter((part): part is { type: "text"; text: string } => part.type === "text")
                .map((part) => part.text)
                .join("")
                .trim();
        }

        return "";
    }, [messages]);

    const agentReply = isLoading
        ? "Reading the Kaelux knowledge base and routing your question..."
        : error
            ? "That request did not complete. You can keep typing or choose a prompt to try again."
        : latestAssistantText || initialAgentReply;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 170,
        damping: 28,
        mass: 0.24,
    });

    const headerY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 8 : 22, 0, prefersReducedMotion ? -4 : -16]
    );
    const terminalY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 10 : 30, 0, prefersReducedMotion ? -5 : -18]
    );
    const trustY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 6 : 16, 0, prefersReducedMotion ? -3 : -10]
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const prompt = input.trim();

        if (!prompt || isLoading) {
            return;
        }

        if (error) {
            clearError();
        }

        void sendMessage({ text: prompt });
        setInput("");
    };

    const sendPrompt = (prompt: string) => {
        if (isLoading) {
            return;
        }

        if (error) {
            clearError();
        }

        void sendMessage({ text: prompt });
        setInput("");
    };

    return (
        <div className="relative z-20">
            {/* Mobile-only top shapes - positioned OUTSIDE the section for perfect layering */}
            <div className="md:hidden absolute -top-20 left-0 right-0 h-32 z-50 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, rotate: -25, x: -50 }}
                    whileInView={{ opacity: 1, rotate: -12, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-0 -left-12 w-48 h-48"
                >
                    <img
                        src="/models/cta-shape-1.png"
                        alt=""
                        className="w-full h-full object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, rotate: 20, x: 50 }}
                    whileInView={{ opacity: 1, rotate: 12, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute top-0 -right-16 w-56 h-56"
                >
                    <img
                        src="/models/cta-shape-2.png"
                        alt="3D Brain"
                        className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                    />
                </motion.div>
            </div>

            <section ref={sectionRef} id="diagnoser" className="relative overflow-hidden bg-white px-6 py-24 md:py-12">
                <div className="container mx-auto max-w-3xl relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        style={{ y: headerY }}
                        className="mb-16 text-center will-change-transform"
                    >
                        {/* Professional Badge */}
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/80 border border-gray-200/50 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] mb-8 transition-all hover:border-gray-300/50">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" />
                            <span className="text-sm text-gray-600 font-semibold tracking-wide">Kaelux Intake Agent</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
                            Ask Kaelux before you reach out.
                        </h2>
                        <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                            A fast terminal-style guide for venture questions, investor fit, partner builds, and business automations.
                        </p>
                    </motion.div>

                    {/* Terminal Window — macOS style with traffic lights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ y: terminalY, background: "#09090b" }}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${isFocused
                            ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20 scale-[1.02]"
                            : "shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]"
                            } will-change-transform`}
                    >
                        {/* Glass Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                        {/* Chrome Border */}
                        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Terminal Header with Traffic Lights */}
                            <div className="flex items-center gap-4 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
                                {/* Traffic Lights */}
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
                                </div>

                                {/* Terminal Title & Status */}
                                <div className="flex-1 flex items-center justify-center">
                                    <span className="text-xs font-mono text-zinc-500">kaelux.leads</span>
                                </div>

                                {/* Online indicator */}
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] text-zinc-500 font-mono">online</span>
                                </div>
                            </div>

                            {/* Terminal Body — prompt-style messages */}
                            <div className="p-6 font-mono text-sm space-y-3">
                                {/* System init line */}
                                <div className="flex items-center gap-2 text-zinc-600">
                                    <span className="text-zinc-700 select-none">#</span>
                                    <span>kaelux-intake v1 ready</span>
                                </div>

                                {/* Ready prompt */}
                                <div className="flex items-start gap-2">
                                    <span className="text-white select-none shrink-0">❯</span>
                                    <span className="text-zinc-300">{agentReply}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {quickPrompts.map((prompt) => (
                                        <button
                                            key={prompt}
                                            type="button"
                                            onClick={() => sendPrompt(prompt)}
                                            disabled={isLoading}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-left text-[11px] text-zinc-400 transition-colors hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSubmit} className="px-5 pb-5 pt-3 border-t border-white/5 bg-black/20">
                                <div className="flex items-center gap-3 relative">
                                    <span className="text-white font-mono text-sm select-none">❯</span>
                                    <div className="relative flex-1">
                                        <input
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            placeholder=""
                                            disabled={isLoading}
                                            aria-describedby={error ? "kaelux-intake-error" : undefined}
                                            className="w-full bg-transparent border-none rounded-none pl-0 pr-14 py-3
                                       text-white placeholder-zinc-600 focus:outline-none font-mono text-sm caret-transparent"
                                        />
                                        {/* Blinking rectangle cursor after text */}
                                        <span
                                            className="absolute top-1/2 -translate-y-1/2 inline-block w-[8px] h-[18px] bg-white/80 animate-pulse pointer-events-none"
                                            style={{ left: `${input.length * 8.4}px` }}
                                        />
                                        {/* Placeholder text when empty */}
                                        {!input && !isFocused && (
                                            <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-zinc-600 font-mono text-sm pointer-events-none">
                                                Ask about Kaelux...
                                            </span>
                                        )}
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={isLoading || !input.trim()}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="absolute right-0 p-2.5 rounded-lg bg-white text-black
                                   hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <Send className="w-4 h-4" />
                                    </motion.button>
                                </div>
                                {error && (
                                    <p id="kaelux-intake-error" role="alert" className="mt-3 text-center font-mono text-[11px] text-rose-300">
                                        Connection interrupted. Your input is still available; submit again to retry.
                                    </p>
                                )}
                                <p className="text-[11px] text-zinc-600 mt-3 text-center tracking-widest uppercase font-mono">
                                    Press Enter for a quick route
                                </p>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.28 }}
                        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
                        >
                            Choose engagement path
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:text-black"
                        >
                            Send context
                        </Link>
                    </motion.div>

                    {/* Trust indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.4 }}
                        style={{ y: trustY }}
                        className="relative z-10 mt-12 flex items-center justify-center gap-6 pb-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 will-change-transform md:pb-0"
                    >
                        <span className="text-xs font-mono text-gray-400">Fast triage for investors, partners, and serious build inquiries</span>
                    </motion.div>
                </div>

                {/* Floating 3D Shapes - Bottom models (inside section bounds) */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, rotate: -15, y: 50 }}
                        whileInView={{ opacity: 1, rotate: -8, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute bottom-4 -left-16 w-52 h-52 md:bottom-8 md:-left-14 md:w-[30rem] md:h-[30rem]"
                    >
                        <img
                            src="/models/cta-cloud.png"
                            alt="3D Cloud"
                            className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 15, y: 50 }}
                        whileInView={{ opacity: 1, rotate: 8, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-4 -right-16 w-52 h-52 md:-bottom-8 md:right-0 md:w-[28rem] md:h-[28rem]"
                    >
                        <img
                            src="/models/cta-shape-4.png"
                            alt=""
                            className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                        />
                    </motion.div>

                    {/* Desktop-only top shapes (hidden on mobile, shown via md:block) */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -25, x: -50 }}
                        whileInView={{ opacity: 1, rotate: -12, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden md:block absolute md:-top-8 md:left-4 md:w-[28rem] md:h-[28rem]"
                    >
                        <img
                            src="/models/cta-shape-1.png"
                            alt=""
                            className="w-full h-full object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 20, x: 50 }}
                        whileInView={{ opacity: 1, rotate: 12, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden md:block absolute md:-top-12 md:-right-28 md:w-[38rem] md:h-[38rem]"
                    >
                        <img
                            src="/models/cta-shape-2.png"
                            alt="3D Brain"
                            className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
