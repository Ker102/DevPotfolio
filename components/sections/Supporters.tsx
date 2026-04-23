"use client";

import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import { FaMicrosoft } from "react-icons/fa";
import {
    SiDocker,
    SiGooglecloud,
    SiKubernetes,
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
            { label: "Kubernetes", Icon: SiKubernetes },
            { label: "Docker", Icon: SiDocker },
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

export default function Supporters() {
    return (
        <section className={`relative overflow-hidden px-6 pb-3 pt-16 md:pb-2 md:pt-20 ${geist.className}`}>
            <div className="relative z-10 container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <div className="space-y-8">
                        {groups.map((group, groupIndex) => (
                            <div key={group.title} className="space-y-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/95 md:text-[15px]">
                                    {group.title}
                                </p>

                                <div className="mx-auto grid max-w-[17rem] grid-cols-2 items-start justify-items-center gap-x-2 gap-y-4 md:max-w-none md:flex md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-5">
                                    {group.items.map(({ label, Icon }, itemIndex) => (
                                        <motion.div
                                            key={label}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 0.82, y: 0 }}
                                            whileHover={{ opacity: 1, y: -1 }}
                                            viewport={{ once: true, amount: 0.6 }}
                                            transition={{
                                                duration: 0.35,
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
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
