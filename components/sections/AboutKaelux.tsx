"use client";

import { motion } from "framer-motion";

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

export default function AboutKaelux() {
    return (
        <section id="about-kaelux" className="relative py-20 px-6 bg-black overflow-hidden flex flex-col justify-center border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bm from-cyan-900/5 via-slate-800/5 to-transparent blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 container mx-auto max-w-4xl text-center">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-10%" }}
                    className="flex flex-col items-center gap-8"
                >
                    <motion.h2
                        variants={slideUpFade}
                        className="text-4xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-lg"
                    >
                        About Kaelux
                    </motion.h2>

                    <motion.p
                        variants={slideUpFade}
                        className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl"
                    >
                        Kaelux is a premier AI engineering agency dedicated to bridging the
                        gap between cutting-edge artificial intelligence and practical
                        business applications. We don &apos;t just build software; we engineer
                        intelligent ecosystems. From custom LLM retrieval pipelines to
                        automated workflow agents, our mission is to empower creators and
                        enterprises with infrastructure that thinks, adapts, and scales.
                        We combine robust full-stack engineering with state-of-the-art AI
                        research to deliver solutions that are not only powerful but also
                        reliable and production-ready.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
