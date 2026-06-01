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
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { NeedHelpLink } from "@/components/ui/NeedHelpLink";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";
import { staggerContainer, textStagger, textReveal } from "@/lib/animations";

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
    const headerX = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? -4 : -24, 0, prefersReducedMotion ? 3 : 14]
    );
    const copyX = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 4 : 18, 0, prefersReducedMotion ? -3 : -12]
    );
    const ctaY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 4 : 16, 0, prefersReducedMotion ? -2 : -10]
    );

    return (
        <section
            ref={sectionRef}
            id="approach"
            className="relative min-h-screen overflow-hidden bg-transparent px-6 pb-36 pt-12 md:pb-72 md:pt-40 lg:pb-[26rem] lg:pt-48 xl:pb-[30rem]"
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
                        style={{ y: headerY, x: headerX }}
                        className="relative mb-12 w-full text-center will-change-transform lg:mb-20 lg:text-left"
                    >
                        <h2 className={`${geist.className} flex flex-col gap-2 text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:hidden`}>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                How Kaelux
                            </motion.span>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                builds AI
                            </motion.span>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                ventures
                            </motion.span>
                        </h2>

                        <div className="relative hidden min-h-[21rem] lg:block xl:min-h-[23rem]">
                            <h2 className={`${geist.className} relative z-10 flex flex-col gap-2 text-[5.25rem] font-medium leading-[1.05] tracking-[-0.04em] text-white xl:text-[5.65rem]`}>
                                <motion.span variants={textReveal} className="inline-block text-white">
                                    How Kaelux
                                </motion.span>
                                <motion.span variants={textReveal} className="inline-block text-white">
                                    builds AI
                                </motion.span>
                                <motion.span variants={textReveal} className="inline-block origin-left -rotate-[2deg] pl-[1.35em] text-[0.72em] font-semibold italic leading-[0.85] tracking-[-0.05em] text-white drop-shadow-[0_18px_42px_rgba(0,0,0,0.5)] xl:pl-[1.45em]">
                                    ventures
                                </motion.span>
                            </h2>

                            <motion.div
                                variants={textReveal}
                                aria-hidden="true"
                                className="pointer-events-none absolute left-[24.5rem] top-[2.35rem] z-30 h-[25rem] w-[28rem] select-none xl:left-[28rem] xl:top-[2.45rem] xl:h-[28rem] xl:w-[31rem]"
                            >
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src="/Now_remove_all_202604241650-Picsart-BackgroundRemover.png"
                                        alt=""
                                        width={2752}
                                        height={1536}
                                        sizes="(min-width: 1280px) 31rem, 28rem"
                                        className="absolute right-0 top-0 h-full w-auto max-w-none object-contain drop-shadow-[0_26px_76px_rgba(168,85,247,0.3)]"
                                        priority={false}
                                        unoptimized
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Split Content Section: Text Left, Image Right */}
                    <div className="grid grid-cols-1 items-center gap-12">

                        {/* Left Column: Description & CTA */}
                        <motion.div
                            variants={textStagger}
                            style={{ y: copyY, x: copyX }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left will-change-transform"
                        >
                            <motion.p variants={textReveal} className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed mb-6 max-w-2xl">
                                Kaelux exists to build and organize{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    serious AI ventures
                                </ScrollUnderline>
                                . The focus is not generic services; it is turning focused technical theses into{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    durable companies and divisions
                                </ScrollUnderline>{" "}
                                with clear markets.
                            </motion.p>
                            <motion.p variants={textReveal} className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed mb-10 max-w-2xl">
                                The operating style is editor-in-chief discipline plus hands-on{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    production engineering
                                </ScrollUnderline>
                                : choose the sharp problem, ship the working artifact, test the market, and keep only the ventures that earn{" "}
                                <ScrollUnderline underlineClassName="via-white/85">
                                    real traction
                                </ScrollUnderline>
                                .
                            </motion.p>

                            <motion.div variants={textReveal} style={{ y: ctaY }} className="flex flex-col items-center lg:items-start space-y-6 will-change-transform">
                                <Link href="#ventures" passHref>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        className="group relative px-10 py-5 bg-gradient-to-b from-gray-100 to-gray-300 text-black text-lg font-bold tracking-wide flex items-center gap-3 rounded-full overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300"
                                    >
                                        {/* Metallic Sheen Sweep */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                                        <span className="relative z-10">Explore Ventures</span>
                                        <FaArrowRight className="relative z-10 text-black group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                </Link>

                                <p className="text-sm font-medium uppercase tracking-widest text-white/62">
                                    Founder-led studio discipline
                                </p>

                                <NeedHelpLink
                                    label="For investors and partners"
                                    href="/pricing"
                                    className="text-white/72 decoration-white/45 hover:text-white hover:decoration-white"
                                />
                            </motion.div>
                        </motion.div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}
