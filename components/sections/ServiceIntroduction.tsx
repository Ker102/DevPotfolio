"use client";

import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { NeedHelpLink } from "@/components/ui/NeedHelpLink";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";
import { staggerContainer, fadeInUp, textStagger, textReveal } from "@/lib/animations";

// Removed local implementations of stagger, slideUpFade, imageReveal since we use the optimized ones from lib/animations

export default function ServiceIntroduction() {
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
        [0, 0.45, 1],
        [prefersReducedMotion ? 10 : 28, 0, prefersReducedMotion ? -4 : -14]
    );
    const copyY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 8 : 22, 0, prefersReducedMotion ? -4 : -12]
    );

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative min-h-screen pt-12 md:pt-24 pb-24 px-6 bg-black overflow-hidden flex flex-col justify-start"
        >

            {/* Top Gradient Fade for Smooth Entry - Extended height for smoother blend */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/40 to-transparent z-20 pointer-events-none" />

            {/* Iridescent Ambient Glows - Metallic Chromatic Theme */}
            {/* Reduced opacity to ensure the black background remains deep */}
            {/* Deep Purple/Blue Base */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-transparent blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            {/* Cyan/Silver Highlight */}
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-cyan-900/5 via-slate-800/5 to-transparent blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 container mx-auto max-w-7xl">

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={staggerContainer}
                    className="flex flex-col w-full"
                >
                    {/* Top Header Section */}
                    <motion.div
                        variants={textStagger}
                        style={{ y: headerY }}
                        className="mb-12 lg:mb-20 w-full text-center lg:text-left will-change-transform"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-[1.1] flex flex-col gap-2">
                            <motion.span variants={textReveal} className="text-transparent bg-clip-text bg-gradient-to-b from-gray-800 via-white to-white drop-shadow-lg inline-block">
                                Beyond Chatbots:
                            </motion.span>
                            <motion.span variants={textReveal} className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 animate-gradient-x bg-[length:200%_auto] inline-block">
                                Intelligent Infrastructure
                            </motion.span>
                            <motion.span variants={textReveal} className="text-gray-400 inline-block">
                                for Business
                            </motion.span>
                        </h2>
                    </motion.div>

                    {/* Split Content Section: Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Column: Description & CTA */}
                        <motion.div
                            variants={textStagger}
                            style={{ y: copyY }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 will-change-transform"
                        >
                            <motion.p variants={textReveal} className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed mb-6 max-w-2xl">
                                Generic AI models don&apos;t understand your{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    business
                                </ScrollUnderline>
                                . We build and tune{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    custom solutions
                                </ScrollUnderline>{" "}
                                that do.
                            </motion.p>
                            <motion.p variants={textReveal} className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed mb-10 max-w-2xl">
                                By combining our tailored AI software with{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    hands-on engineering services
                                </ScrollUnderline>
                                , we connect LLMs directly to your existing systems, automating{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    complex tasks and workflows
                                </ScrollUnderline>
                                .
                            </motion.p>

                            <motion.div variants={textReveal} className="flex flex-col items-center lg:items-start space-y-6">
                                <Link href="/solutions" passHref>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        className="group relative px-10 py-5 bg-gradient-to-b from-gray-100 to-gray-300 text-black text-lg font-bold tracking-wide flex items-center gap-3 rounded-full overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300"
                                    >
                                        {/* Metallic Sheen Sweep */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                                        <span className="relative z-10">Explore Solutions</span>
                                        <FaArrowRight className="relative z-10 text-black group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                </Link>

                                <p className="text-sm text-gray-500 font-medium tracking-widest uppercase opacity-60">
                                    Tailored for your business
                                </p>

                                <NeedHelpLink />
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Visual Graphic - FULL SIZE / NO CONSTRAINTS */}
                        <motion.div
                            variants={fadeInUp}
                            className="order-1 lg:order-2 w-full flex items-center justify-center lg:justify-end"
                        >
                            {/* Removed max-w constraints to allow original size */}
                            <div className="relative w-full group">

                                {/* Iridescent Glow behind image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-cyan-500/20 to-white/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

                                {/* Image Container - flexible aspect ratio based on natural image size */}
                                {/* Since user wants "original size", we set a generous aspect ratio or just let it flow. 
                       Using Next/Image 'fill' requires a parent height. 
                       Alternatively, we can use width/height if we knew them, but 'fill' + aspect ratio wrapper is safer for responsiveness.
                       Let's assume the image is roughly 4:3 or 16:9, but allowing it to be large. 
                   */}
                                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3]">
                                    <Image
                                        src="/architecture-diagram.jpg"
                                        alt="AI Architecture Diagram"
                                        fill
                                        className="object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </motion.div>
            </div>

            {/* Bottom Gradient Fade for Smooth Exit - Extended height */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
