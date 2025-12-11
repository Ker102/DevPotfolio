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
        <section className="relative min-h-screen py-24 md:py-32 px-6 bg-black overflow-hidden flex flex-col justify-center">

            {/* Top Gradient Fade for Smooth Entry */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-cyan-900/5 via-purple-900/5 to-pink-900/5 blur-[150px] rounded-full pointer-events-none" />

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
                        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1]">
                            Beyond Chatbots: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 opacity-90">
                                Intelligent Infrastructure
                            </span>{" "}
                            for Business
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
                                    className="group relative bg-white text-black px-12 py-5 text-lg font-medium tracking-wide flex items-center space-x-3 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <span>Start Building</span>
                                    <FaArrowRight className="text-gray-900 group-hover:translate-x-1 transition-transform duration-300" />
                                </MagneticButton>

                                <p className="text-sm text-gray-500 font-medium tracking-widest uppercase opacity-60">
                                    Tailored for your business
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Visual Graphic */}
                        <motion.div
                            variants={imageReveal}
                            className="order-1 lg:order-2 w-full flex items-center justify-center lg:justify-end"
                        >
                            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] group">
                                {/* Dynamic Glow that reacts to hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />

                                <div className="relative w-full h-full">
                                    <Image
                                        src="/architecture-diagram.jpg"
                                        alt="AI Architecture Diagram"
                                        fill
                                        className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </motion.div>
            </div>

            {/* Bottom Gradient Fade for Smooth Exit */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
}
