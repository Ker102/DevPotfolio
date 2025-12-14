"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

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
            duration: 1.0,
        },
    },
};

export default function AboutMe() {
    return (
        <section id="about" className="relative py-20 px-6 bg-black overflow-hidden flex flex-col justify-center border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-900/5 via-indigo-900/5 to-transparent blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-10%" }}
                    className="order-2 md:order-1"
                >
                    <motion.div variants={slideUpFade} className="flex flex-col gap-6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-lg">
                            About Me
                        </h2>

                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-wider border border-white/10">Founder</span>
                            <a href="https://github.com/Ker102" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <FaGithub className="w-5 h-5" />
                                <span className="text-sm font-medium">@Ker102</span>
                            </a>
                        </div>

                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                            Full-Stack Developer & AI Engineer based in Estonia, building
                            intelligent tools that bridge the gap between automation, AI, and
                            creative workflows.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                            I specialize in crafting LLM-powered applications, workflow
                            automation systems, and AI-integrated tools using modern
                            frameworks. My projects blend cutting-edge AI capabilities with
                            practical, production-ready solutions.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Optional Visual/Stats or just layout balance - keeping it simple for now or adding a subtle visual if needed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent z-10 pointer-events-none" />
                        <Image
                            src="/about-visual.jpg"
                            alt="Kaelux AI Visualization"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
