"use client";

import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { Geist } from "next/font/google";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { NeedHelpLink } from "@/components/ui/NeedHelpLink";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";
import { staggerContainer, fadeInUp, textStagger, textReveal } from "@/lib/animations";

const geist = Geist({
    subsets: ["latin"],
    weight: ["500", "600"],
});

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
            className="relative min-h-screen overflow-hidden bg-transparent px-6 pb-64 pt-32 md:pb-72 md:pt-40 lg:pb-[26rem] lg:pt-48 xl:pb-[30rem]"
        >
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
                        <h2 className={`${geist.className} flex flex-col gap-2 text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-[5.25rem]`}>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                Beyond Chatbots:
                            </motion.span>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                Intelligent Infrastructure
                            </motion.span>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                for Business
                            </motion.span>
                        </h2>
                    </motion.div>

                    {/* Split Content Section: Text Left, Image Right */}
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-start lg:gap-24">

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

                                <p className="text-sm font-medium uppercase tracking-widest text-white/62">
                                    Tailored for your business
                                </p>

                                <NeedHelpLink className="text-white/72 decoration-white/45 hover:text-white hover:decoration-white" />
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Visual Graphic - FULL SIZE / NO CONSTRAINTS */}
                        <motion.div
                            variants={fadeInUp}
                            className="order-1 flex w-full items-center justify-center lg:order-2 lg:-translate-y-24 lg:self-start lg:justify-end xl:-translate-y-28"
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
        </section>
    );
}
