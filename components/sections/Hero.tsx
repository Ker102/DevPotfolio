"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";
import GlassSurface from "@/components/GlassSurface";
import FloatingDecor from "@/components/FloatingDecor";
import { HiArrowDown } from "react-icons/hi";

const MotionImage = motion(Image);

// Original star animation - unchanged
const starAnimation = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
        filter: [
            "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
            "drop-shadow(0 0 45px rgba(255,255,255,1))",
            "drop-shadow(0 0 15px rgba(255,255,255,0.8))"
        ],
        transition: {
            duration: 3,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
};

// Glow animation for liquid flows
const glowAnimation = {
    initial: { filter: "drop-shadow(0 0 15px rgba(168,85,247,0.3))" },
    animate: {
        filter: [
            "drop-shadow(0 0 15px rgba(168,85,247,0.3))",
            "drop-shadow(0 0 40px rgba(168,85,247,0.6))",
            "drop-shadow(0 0 20px rgba(192,132,252,0.4))",
            "drop-shadow(0 0 15px rgba(168,85,247,0.3))"
        ],
        transition: {
            duration: 5,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
};

const MOBILE_TEXT_ROTATION_MS = 5500;

const SubtitleRotator = ({
    phrases,
    activeIndex,
}: {
    phrases: string[];
    activeIndex: number;
}) => {
    const prefersReducedMotion = useReducedMotion();
    const activePhrase = phrases[activeIndex];

    return (
        <div className="w-full px-2">
            <div className="mx-auto max-w-md md:max-w-[31rem] lg:max-w-[36rem]">
                <div className="relative min-h-[4.75rem] md:min-h-[5.85rem] lg:min-h-[6.4rem] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={
                                prefersReducedMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: 16, scale: 0.985 }
                            }
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={
                                prefersReducedMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, y: -14, scale: 0.985 }
                            }
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 flex items-center justify-center text-center"
                        >
                            <p className="max-w-[18rem] text-[1.02rem] font-medium leading-snug text-gray-200 md:max-w-[29rem] md:text-[1.28rem] md:leading-[1.42] lg:max-w-[34rem] lg:text-[1.52rem] lg:leading-[1.35]">
                                {activePhrase.split(" ").map((word, wordIndex) => (
                                    <motion.span
                                        key={`${activeIndex}-${word}-${wordIndex}`}
                                        initial={
                                            prefersReducedMotion
                                                ? false
                                                : { opacity: 0, y: 10 }
                                        }
                                        animate={
                                            prefersReducedMotion
                                                ? { opacity: 1 }
                                                : { opacity: 1, y: 0 }
                                        }
                                        transition={{
                                            duration: 0.32,
                                            delay: prefersReducedMotion ? 0 : 0.08 + wordIndex * 0.035,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="mr-[0.32em] inline-block last:mr-0"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mx-auto mt-3 max-w-[18rem] md:max-w-[26rem] lg:max-w-[30rem]">
                    <div className="relative h-px overflow-hidden bg-white/12">
                        <motion.div
                            key={`progress-${activeIndex}`}
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: (MOBILE_TEXT_ROTATION_MS - 350) / 1000,
                                ease: "linear",
                            }}
                            className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-transparent via-white to-white/20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    // Refs for GSAP entrance animations
    const sectionRef = useRef<HTMLElement>(null);
    const starContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const liquidFlow1Ref = useRef<HTMLDivElement>(null);
    const liquidFlow2Ref = useRef<HTMLDivElement>(null);
    const liquidFlow3Ref = useRef<HTMLDivElement>(null);

    const mobileTexts = [
        "Tailored LLM infrastructure, AI engineering, and full-stack web services.",
        "We build and host the complete technology backbone for your business.",
        "Kaelux MedAI supports retina, hearing, and medical imaging research teams with secure AI infrastructure and tooling."
    ];
    const [mobileTextIndex, setMobileTextIndex] = useState(0);

    // Generate star properties once and keep them stable across re-renders
    const stars = useMemo(() => {
        return [...Array(100)].map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
    }, []);

    // Only render stars on client side to avoid hydration mismatch
    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setMobileTextIndex((prev) => (prev + 1) % mobileTexts.length);
        }, MOBILE_TEXT_ROTATION_MS);
        return () => clearInterval(interval);
    }, []);

    // GSAP Entrance Animations
    useEffect(() => {
        if (!isMounted) return;

        const ctx = gsap.context(() => {
            // Create main timeline for smooth staggered entrance
            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                }
            });

            // Star container entrance - smooth fade in
            tl.fromTo(starContainerRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1.2 },
                0.3
            );

            // Title entrance - smooth slide up
            tl.fromTo(titleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.4 },
                0.6
            );

            // Subtitle entrance
            tl.fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.2 },
                1.0
            );

            // Buttons entrance - staggered
            if (buttonsRef.current) {
                tl.fromTo(buttonsRef.current.children,
                    { opacity: 0, y: 20, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.12,
                        ease: "back.out(1.4)"
                    },
                    1.3
                );
            }

            // Scroll indicator entrance
            tl.fromTo(scrollIndicatorRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                1.8
            );

            // Scroll indicator continuous bounce
            gsap.to(scrollIndicatorRef.current, {
                y: 10,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2.5
            });

            // Liquid flows - slide in using xPercent (additive to CSS transforms)
            // Top Right Flow - slides in from right
            gsap.fromTo(liquidFlow1Ref.current,
                { opacity: 0, xPercent: 30 },
                { opacity: 1, xPercent: 0, duration: 1.6, delay: 0.2, ease: "power2.out" }
            );

            // Left Flow - slides in from left
            gsap.fromTo(liquidFlow2Ref.current,
                { opacity: 0, xPercent: -30 },
                { opacity: 1, xPercent: 0, duration: 1.6, delay: 0.4, ease: "power2.out" }
            );

            // Bottom Right Flow - slides in from right
            gsap.fromTo(liquidFlow3Ref.current,
                { opacity: 0, xPercent: 20 },
                { opacity: 1, xPercent: 0, duration: 1.6, delay: 0.6, ease: "power2.out" }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, [isMounted]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Animated Stars - Only render on client to avoid hydration mismatch */}
            {isMounted && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {stars.map((star) => (
                        <motion.div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                left: `${star.left}%`,
                                top: `${star.top}%`,
                                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: star.duration,
                                repeat: Infinity,
                                delay: star.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Liquid Flows - ORIGINAL POSITIONS PRESERVED */}
            {isMounted && (
                <>
                    {/* Top Right Flow - ORIGINAL POSITION: translate-x-[20%] -translate-y-[10%] */}
                    <div
                        ref={liquidFlow1Ref}
                        className="absolute top-0 right-0 z-1 pointer-events-none select-none translate-x-[20%] -translate-y-[10%] opacity-0"
                    >
                        <MotionImage
                            src="/images/decorative/liquid-flow-1.png"
                            alt="Liquid Flow Top Right"
                            width={800}
                            height={800}
                            priority
                            className="w-[250px] md:w-[400px] lg:w-[500px] object-contain"
                            initial="initial"
                            animate="animate"
                            variants={glowAnimation}
                        />
                    </div>

                    {/* Left Side Flow - ORIGINAL POSITION: -translate-x-[20%] */}
                    <div
                        ref={liquidFlow2Ref}
                        className="absolute top-0 left-0 z-1 pointer-events-none select-none -translate-x-[20%] opacity-0"
                    >
                        <MotionImage
                            src="/images/decorative/liquid-flow-left-hq.png"
                            alt="Liquid Flow Left"
                            width={1000}
                            height={1000}
                            priority
                            className="w-[150px] md:w-[600px] lg:w-[800px] object-contain"
                            initial="initial"
                            animate="animate"
                            variants={glowAnimation}
                        />
                    </div>

                    {/* Bottom Right Flow - ORIGINAL POSITION: translate-x-[5%] translate-y-[5%] */}
                    <div
                        ref={liquidFlow3Ref}
                        className="absolute bottom-0 right-0 z-1 pointer-events-none select-none translate-x-[5%] translate-y-[5%] opacity-0 overflow-visible p-12"
                        style={{
                            margin: '-48px'
                        }}
                    >
                        <MotionImage
                            src="/images/decorative/liquid-flow-3.png"
                            alt="Liquid Flow Bottom"
                            width={900}
                            height={600}
                            className="w-[400px] md:w-[700px] lg:w-[900px] object-contain"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)'
                            }}
                            initial="initial"
                            animate="animate"
                            variants={glowAnimation}
                        />
                    </div>
                </>
            )}

            {/* Bottom Fade Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent z-5 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                {/* Shining Star - ORIGINAL ANIMATION PRESERVED */}
                {/* Star Container with Glow */}
                <div ref={starContainerRef} className="relative w-16 h-16 md:w-32 md:h-32 mb-2 flex items-center justify-center opacity-0">
                    {/* Underglow Image - ORIGINAL SIZE: w-[180%] h-[180%] */}
                    <MotionImage
                        src="/images/decorative/star-glow.png"
                        alt="Star Glow"
                        width={300}
                        height={300}
                        className="absolute w-[180%] h-[180%] object-contain -z-10 opacity-50"
                        animate={{
                            scale: [0.8, 1.1, 0.8],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Star Asset - ORIGINAL ANIMATION */}
                    <MotionImage
                        src="/images/decorative/shiny-star-v2.png"
                        alt="Shining Star"
                        width={200}
                        height={200}
                        priority
                        className="w-full h-full object-contain relative z-10"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div ref={contentRef}>
                    {/* SEO: Visually hidden H1 for search engines and screen readers */}
                    <h1 className="sr-only">
                        AI That Works for You - Kaelux AI Engineering Agency
                    </h1>

                    {/* Main Title - Image */}
                    <div
                        ref={titleRef}
                        className="flex items-center justify-center opacity-0"
                    >
                        <Image
                            src="/hero-title.png"
                            alt="AI That Works for You"
                            width={900}
                            height={120}
                            priority
                            className="w-auto h-auto max-w-[80vw] md:max-w-[70vw] lg:max-w-[800px] select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                            style={{
                                filter: 'brightness(1.05) contrast(1.02)',
                            }}
                        />
                    </div>

                    <div ref={subtitleRef} className="opacity-0 w-full z-20">
                        <SubtitleRotator
                            phrases={mobileTexts}
                            activeIndex={mobileTextIndex}
                        />
                    </div>

                    <div
                        ref={buttonsRef}
                        className="flex flex-wrap gap-4 justify-center mt-8"
                    >
                        {/* Primary White Button with Modern Hover */}
                        <motion.button
                            onClick={() => scrollToSection("services")}
                            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden opacity-0"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 35px rgba(255,255,255,0.5), 0 10px 40px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {/* Shine sweep effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                            <span className="relative z-10">Our Services</span>
                        </motion.button>

                        {/* Secondary Glass Button with Modern Hover */}
                        <motion.button
                            onClick={() => router.push("/medai")}
                            className="group relative px-8 py-4 rounded-full overflow-hidden opacity-0
                                bg-white/10 backdrop-blur-xl border border-white/20
                                text-white font-semibold"
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 0 30px rgba(255,255,255,0.2), 0 15px 35px rgba(0,0,0,0.4)"
                            }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {/* Inner highlight */}
                            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                            {/* Glow effect on hover */}
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/10 to-transparent" />
                            <span className="relative z-10">For Labs &amp; Researchers</span>
                        </motion.button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    ref={scrollIndicatorRef}
                    className="mt-16 flex justify-center cursor-pointer opacity-0"
                    onClick={() => scrollToSection("services")}
                >
                    <HiArrowDown className="w-10 h-10 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' }} />
                </div>
            </div>
        </section>
    );
}
