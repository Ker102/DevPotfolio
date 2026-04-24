"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { Send } from "lucide-react";

export default function DiagnoserCTA() {
    const [input, setInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

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
        if (input.trim()) {
            const encodedMessage = encodeURIComponent(input.trim());
            router.push(`/diagnoser?q=${encodedMessage}`);
        } else {
            router.push("/diagnoser");
        }
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
                            <span className="text-sm text-gray-600 font-semibold tracking-wide">Intelligent Diagnostics</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                            Let our neural engine analyze your business infrastructure and architect the perfect solution.
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
                                    <span className="text-xs font-mono text-zinc-500">Kaelux Neural Agent</span>
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
                                    <span>kaelux-agent v3.5 initialized</span>
                                </div>

                                {/* Ready prompt */}
                                <div className="flex items-start gap-2">
                                    <span className="text-white select-none shrink-0">❯</span>
                                    <span className="text-zinc-300">Describe your business and what you&apos;re looking to achieve.</span>
                                </div>

                                {/* Cursor blink */}
                                <div className="flex items-center gap-2">
                                    <span className="text-white select-none">❯</span>
                                    <span className="inline-block w-2 h-4 bg-white/70 animate-pulse" />
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
                                                Tell us about your business...
                                            </span>
                                        )}
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="absolute right-0 p-2.5 rounded-lg bg-white text-black
                                   hover:bg-gray-100 transition-colors shadow-lg shadow-white/5"
                                    >
                                        <Send className="w-4 h-4" />
                                    </motion.button>
                                </div>
                                <p className="text-[11px] text-zinc-600 mt-3 text-center tracking-widest uppercase font-mono">
                                    Press Enter to Initialize
                                </p>
                            </form>
                        </div>
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
                        <span className="text-xs font-mono text-gray-400">Powered by Enterprise Neural Engine v3.5</span>
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
