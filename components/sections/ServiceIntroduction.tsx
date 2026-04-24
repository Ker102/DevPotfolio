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
            id="services"
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
                                Beyond Chatbots:
                            </motion.span>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                Intelligent Infrastructure
                            </motion.span>
                            <motion.span variants={textReveal} className="inline-block text-white">
                                for Business
                            </motion.span>
                        </h2>

                        <div className="relative hidden min-h-[18.5rem] lg:block xl:min-h-[20.5rem]">
                            <h2 className={`${geist.className} relative z-10 flex flex-col gap-2 text-[5.25rem] font-medium leading-[1.05] tracking-[-0.04em] text-white xl:text-[5.65rem]`}>
                                <motion.span variants={textReveal} className="inline-block text-white">
                                    Beyond Chatbots:
                                </motion.span>
                                <motion.span variants={textReveal} className="inline-block text-white">
                                    Intelligent
                                </motion.span>
                                <motion.span variants={textReveal} className="inline-block text-white">
                                    for Business
                                </motion.span>
                            </h2>

                            <motion.div
                                variants={textReveal}
                                aria-hidden="true"
                                className="pointer-events-none absolute left-[19.4rem] top-[4.55rem] z-30 h-[26rem] w-[45rem] select-none xl:left-[21rem] xl:top-[4.75rem] xl:h-[30rem] xl:w-[52rem]"
                            >
                                <span
                                    className={`${geist.className} absolute left-0 top-[1.35rem] z-20 origin-left rotate-[5deg] text-[4.35rem] font-semibold italic leading-none tracking-[-0.05em] text-white drop-shadow-[0_5px_14px_rgba(0,0,0,0.6)] xl:top-[1.65rem] xl:text-[5rem]`}
                                >
                                    Infrastructure
                                </span>

                                <div className="absolute right-0 top-[-5.8rem] z-30 h-[33rem] w-[30rem] overflow-hidden xl:top-[-6.8rem] xl:h-[38rem] xl:w-[35rem]">
                                    <Image
                                        src="/Now_remove_all_202604241650-Picsart-BackgroundRemover.png"
                                        alt=""
                                        width={2752}
                                        height={1536}
                                        sizes="(min-width: 1280px) 35rem, 30rem"
                                        className="absolute right-0 top-0 h-full w-auto max-w-none object-contain drop-shadow-[0_26px_76px_rgba(168,85,247,0.3)]"
                                        priority={false}
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

                            <motion.div variants={textReveal} style={{ y: ctaY }} className="flex flex-col items-center lg:items-start space-y-6 will-change-transform">
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

                    </div>

                </motion.div>
            </div>
        </section>
    );
}
