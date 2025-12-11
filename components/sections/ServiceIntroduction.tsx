"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import { FaArrowRight } from "react-icons/fa";

// Smoother custom animation variants
const smoothTransition = {
    type: "spring" as const,
    damping: 40,
    stiffness: 100,
    mass: 1,
};

const slideUpFade = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ...smoothTransition,
            duration: 1.0
        }
    },
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const imageReveal = {
    initial: { opacity: 0, scale: 0.9, filter: "blur(20px)" },
    animate: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1] as const
        }
    },
};

export default function ServiceIntroduction() {
    return (
        <section className="relative min-h-screen py-24 md:py-32 px-6 bg-[#050505] overflow-hidden flex flex-col justify-center">

            {/* Top Gradient Fade for Smooth Entry */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

            {/* Iridescent Ambient Glows - Metallic Chromatic Theme */}
            {/* Deep Purple/Blue Base */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-transparent blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            {/* Cyan/Silver Highlight */}
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-t from-cyan-900/10 via-slate-800/10 to-transparent blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 container mx-auto max-w-7xl">

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={stagger}
                    className="flex flex-col w-full"
                >
                    {/* Top Header Section */}
                    <motion.div variants={slideUpFade} className="mb-12 lg:mb-20 w-full text-center lg:text-left">
                        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-lg">
                            Beyond Chatbots: <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 animate-gradient-x bg-[length:200%_auto]">
                                Intelligent Infrastructure
                            </span>{" "}
                            <span className="text-gray-400">for Business</span>
                        </h2>
                    </motion.div>

                    {/* Split Content Section: Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Column: Description & CTA */}
                        <motion.div variants={slideUpFade} className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
                                Generic AI models don&apos;t understand your business. We build and tune custom solutions that do. By combining our tailored AI software with hands-on engineering services, we connect LLMs directly to your existing systems—automating complex tasks and workflows.
                            </p>

                            <div className="flex flex-col items-center lg:items-start space-y-6">
                                <MagneticButton
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    className="group relative bg-gradient-to-b from-gray-100 to-gray-300 text-black px-12 py-5 text-lg font-bold tracking-wide flex items-center space-x-3 rounded-full hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
                                >
                                    {/* Chrome sheen effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <span>Start Building</span>
                                    <FaArrowRight className="text-black group-hover:translate-x-1 transition-transform duration-300" />
                                </MagneticButton>

                                <p className="text-sm text-gray-500 font-medium tracking-widest uppercase opacity-60">
                                    Tailored for your business
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Visual Graphic - FULL SIZE / NO CONSTRAINTS */}
                        <motion.div
                            variants={imageReveal}
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

            {/* Bottom Gradient Fade for Smooth Exit */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
}
