"use client";

import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { Geist } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { FaMicrosoft } from "react-icons/fa";
import {
    SiGooglecloud,
    SiNotion,
    SiPosthog,
} from "react-icons/si";

const geist = Geist({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const groups = [
    {
        title: "Infrastructure & Cloud Partners",
        items: [
            { label: "Microsoft", Icon: FaMicrosoft },
            { label: "Google Cloud", Icon: SiGooglecloud },
        ],
    },
    {
        title: "Supported By",
        items: [
            { label: "PostHog", Icon: SiPosthog },
            { label: "Notion", Icon: SiNotion },
        ],
    },
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

export default function Supporters() {
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 170,
        damping: 28,
        mass: 0.24,
    });

    const sectionY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 6 : 22, 0, prefersReducedMotion ? -4 : -18]
    );
    const headingY = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion ? 4 : 14, 0, prefersReducedMotion ? -2 : -10]
    );
    const leftGroupX = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion || isMobile ? 0 : -18, 0, prefersReducedMotion || isMobile ? 0 : 14]
    );
    const rightGroupX = useTransform(
        progress,
        [0, 0.5, 1],
        [prefersReducedMotion || isMobile ? 0 : 18, 0, prefersReducedMotion || isMobile ? 0 : -14]
    );

    return (
        <section ref={sectionRef} className={`relative overflow-hidden px-6 pb-3 pt-16 md:pb-2 md:pt-20 ${geist.className}`}>
            <div className="relative z-10 container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.55 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: sectionY }}
                    className="text-center will-change-transform"
                >
                    <div className="space-y-8">
                        {groups.map((group, groupIndex) => (
                            <motion.div
                                key={group.title}
                                style={{
                                    x: groupIndex === 0 ? leftGroupX : rightGroupX,
                                    y: headingY,
                                }}
                                className="space-y-4 will-change-transform"
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/95 md:text-[15px]">
                                    {group.title}
                                </p>

                                <div className="mx-auto grid max-w-[17rem] grid-cols-2 items-start justify-items-center gap-x-2 gap-y-4 md:max-w-none md:flex md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-5">
                                    {group.items.map(({ label, Icon }, itemIndex) => (
                                        <motion.div
                                            key={label}
                                            initial={{
                                                opacity: 0,
                                                y: prefersReducedMotion ? 4 : 10,
                                                x: prefersReducedMotion || !isMobile
                                                    ? 0
                                                    : itemIndex % 2 === 0
                                                        ? -22
                                                        : 22,
                                            }}
                                            whileInView={{ opacity: 0.82, y: 0, x: 0 }}
                                            whileHover={{ opacity: 1, y: -1 }}
                                            viewport={{ once: false, amount: 0.6 }}
                                            transition={{
                                                duration: isMobile ? 0.5 : 0.35,
                                                delay: groupIndex * 0.08 + itemIndex * 0.05,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className={`grid w-[7.75rem] grid-cols-[1rem,5.9rem] items-center justify-center gap-2 text-left text-white/70 transition-colors duration-200 hover:text-white md:flex md:min-w-0 md:w-auto md:items-center md:justify-center md:gap-2.5 md:text-center ${
                                                itemIndex % 2 === 1 ? "md:translate-x-0 translate-x-3" : ""
                                            }`}
                                        >
                                            <Icon className="h-[0.95rem] w-[0.95rem] shrink-0 justify-self-center" />
                                            <span className="block w-full text-[0.95rem] font-semibold tracking-tight md:text-base">
                                                {label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
