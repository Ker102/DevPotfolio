"use client";

import Image from "next/image";

interface GradientSpacerProps {
    direction: "toWhite" | "toBlack";
    height?: string;
    className?: string;
}

/**
 * Image-based smooth gradient transition.
 * Uses custom-designed liquid chrome waves to ensure perfect transition
 * without CSS banding or cutoff artifacts.
 */
export default function GradientSpacer({ direction, height = "h-[500px]", className = "" }: GradientSpacerProps) {
    const isToWhite = direction === "toWhite";
    const imageSrc = isToWhite
        ? "/transitions/transition-to-white.jpg"
        : "/transitions/transition-to-black.jpg";

    // Background gradient ensures strict color matching at the edges
    // even if the image is masked out.
    return (
        <div
            className={`relative ${height} w-full overflow-hidden z-0 ${className}`}
        >
            {/* 
               Background Generator
               Strictly enforces the transition colors (Solid Black -> Solid White).
               This ensures that if the image is masked out, the background matches the adjacent sections perfectly.
            */}
            <div
                className={`absolute inset-0 w-full h-full ${direction === "toWhite"
                    ? "bg-gradient-to-b from-black to-white"
                    : "bg-gradient-to-b from-white to-black"
                    }`}
            />

            {/* 
               Masked Image Layer
               The image is faded out at the top (10%) and bottom (10%) using a CSS mask.
               This allows the "Background Generator" (above) to show through at the edges,
               guaranteeing a 100% color match with the sections above and below.
            */}
            <div className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]">
                <Image
                    src={imageSrc}
                    alt={direction === "toWhite" ? "Transition to white" : "Transition to black"}
                    fill
                    className="object-fill select-none pointer-events-none"
                    priority
                    quality={100}
                    unoptimized
                    sizes="100vw"
                />
            </div>
        </div>
    );
}
