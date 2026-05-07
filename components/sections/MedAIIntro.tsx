"use client";

import Link from "next/link";
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";

const focusPoints = [
    "Retina research tooling",
    "Hearing and tinnitus tooling",
    "Secure AI infrastructure",
    "Early collaborator program",
] as const;

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(max-width: 767px)");
        const update = () => setIsMobile(query.matches);

        update();
        query.addEventListener("change", update);

        return () => query.removeEventListener("change", update);
    }, []);

    return isMobile;
}

export default function MedAIIntro() {
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const revealViewport = { once: isMobile, amount: isMobile ? 0.14 : 0.3 };
    const chipViewport = { once: isMobile, amount: isMobile ? 0.18 : 0.4 };

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 170,
        damping: 28,
        mass: 0.24,
    });

    const shellY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 8 : isMobile ? 10 : 26, 0, prefersReducedMotion ? -5 : isMobile ? -6 : -18]
    );
    const shellScale = useTransform(
        progress,
        [0, 0.5, 1],
        [isMobile ? 1 : 0.985, 1, isMobile ? 1 : 0.992]
    );
    const leftColumnY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 6 : isMobile ? 6 : 18, 0, prefersReducedMotion ? -4 : isMobile ? -4 : -12]
    );
    const rightColumnY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 8 : isMobile ? 6 : 26, 0, prefersReducedMotion ? -5 : isMobile ? -4 : -16]
    );
    const leftColumnX = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion || isMobile ? 0 : -18, 0, prefersReducedMotion || isMobile ? 0 : 12]
    );
    const rightColumnX = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion || isMobile ? 0 : 20, 0, prefersReducedMotion || isMobile ? 0 : -12]
    );
    const glowY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? -8 : isMobile ? -8 : -24, 0, prefersReducedMotion ? 6 : isMobile ? 6 : 18]
    );

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-24 md:py-28">
            <motion.div className="pointer-events-none absolute inset-0 will-change-transform" style={{ y: glowY }}>
                <div className="absolute left-[10%] top-16 h-56 w-56 rounded-full bg-white/[0.05] blur-[120px]" />
                <div className="absolute right-[12%] top-8 h-72 w-72 rounded-full bg-violet-300/[0.08] blur-[140px]" />
                <div className="absolute bottom-0 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[150px]" />
            </motion.div>

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: isMobile ? 18 : 42,
                        scale: isMobile ? 1 : 0.985,
                        filter: isMobile ? "none" : "blur(14px)",
                    }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={revealViewport}
                    transition={{ duration: isMobile ? 0.62 : 0.95, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: shellY, scale: shellScale }}
                    className="relative grid gap-10 overflow-hidden rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_24%,rgba(255,255,255,0.025)_100%)] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.34)] will-change-transform md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)] md:p-12 md:backdrop-blur-[28px]"
                >
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(188,170,255,0.12),transparent_30%)]" />
                        <div className="absolute inset-[1px] rounded-[33px] border border-white/[0.04]" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 12 : 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={revealViewport}
                        transition={{ duration: isMobile ? 0.52 : 0.8, delay: isMobile ? 0.04 : 0.12, ease: [0.22, 1, 0.36, 1] }}
                        style={{ y: leftColumnY, x: leftColumnX }}
                        className="space-y-6 will-change-transform"
                    >
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
                                Kaelux MedAI
                            </p>
                            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                                A{" "}
                                <ScrollUnderline
                                    className="pb-[0.2em]"
                                    underlineClassName="h-[0.11em] bottom-[0.01em] via-violet-200/85 from-white/18 to-white/14"
                                >
                                    new
                                </ScrollUnderline>{" "}
                                Kaelux division for secure medical research infrastructure.
                            </h2>
                        </div>

                        <div className="space-y-4 text-base leading-8 text-gray-300 md:text-lg">
                            <p>
                                Kaelux MedAI applies our AI, infrastructure, and DevSecOps capabilities to
                                practical tooling for medical research teams that need production discipline,
                                not another fragile prototype.
                            </p>
                            <p>
                                The division is currently focused on retina and ophthalmology work together
                                with hearing and tinnitus research, with longer-term interest in cancer
                                imaging and treatment-planning support.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {focusPoints.map((point) => (
                                <motion.span
                                    key={point}
                                    initial={{ opacity: 0, y: isMobile ? 8 : 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={chipViewport}
                                    transition={{ duration: isMobile ? 0.42 : 0.55, delay: isMobile ? 0.04 : 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-full border border-white/12 bg-black/18 px-4 py-2 text-sm font-medium text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:backdrop-blur-md"
                                >
                                    {point}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 12 : 0, x: isMobile ? 0 : 18, filter: isMobile ? "none" : "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={revealViewport}
                        transition={{ duration: isMobile ? 0.52 : 0.85, delay: isMobile ? 0.08 : 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ y: rightColumnY, x: rightColumnX }}
                        className="relative flex flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-black/14 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] will-change-transform md:border-l md:border-t md:pl-8 md:pt-6 md:backdrop-blur-md"
                    >
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Positioning
                            </p>
                            <p className="text-base leading-7 text-gray-300">
                                MedAI is being built as a serious technical partner for labs, departments,
                                and foundations that need secure infrastructure, research tooling, MLOps,
                                and engineering support around medical AI work.
                            </p>
                            <p className="text-sm leading-7 text-white/62">
                                Early collaborators are especially welcome in retinal imaging, hearing and
                                tinnitus research, rare disease work, and ophthalmology-adjacent projects.
                            </p>
                        </div>

                        <Link href="/medai" className="self-start">
                            <motion.span
                                whileHover={{ x: 3, boxShadow: "0 16px 36px rgba(0,0,0,0.26)" }}
                                className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/92"
                            >
                                Explore MedAI
                                <FaArrowRight className="text-xs" />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
