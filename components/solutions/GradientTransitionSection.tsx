"use client";

import { ReactNode } from "react";

interface GradientTransitionSectionProps {
    children: ReactNode;
    direction?: "toWhite" | "toBlack";
}

export default function GradientTransitionSection({ children, direction = "toWhite" }: GradientTransitionSectionProps) {
    const gradientToWhite = `linear-gradient(
        to bottom,
        #000000 0%,
        #0a0a0a 5%,
        #1a0a20 15%,
        #2d1040 30%,
        #5C24FF 45%,
        #8B5CF6 55%,
        #C4B5FD 68%,
        #E9D5FF 80%,
        #F5F3FF 90%,
        #FFFFFF 100%
    )`;

    const gradientToBlack = `linear-gradient(
        to bottom,
        #FFFFFF 0%,
        #F5F3FF 10%,
        #E9D5FF 20%,
        #C4B5FD 32%,
        #8B5CF6 45%,
        #5C24FF 55%,
        #2d1040 70%,
        #1a0a20 85%,
        #0a0a0a 95%,
        #000000 100%
    )`;

    return (
        <div
            className="relative"
            style={{
                background: direction === "toWhite" ? gradientToWhite : gradientToBlack
            }}
        >
            {/* Subtle noise texture for depth */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
