"use client";

import Image from "next/image";

interface GradientSpacerProps {
    direction: "toWhite" | "toBlack";
    height?: string;
    className?: string;
    imageSrc?: string;
}

/**
 * Image-based smooth gradient transition.
 * Uses custom-designed liquid chrome waves to ensure perfect transition
 * without CSS banding or cutoff artifacts.
 */
export default function GradientSpacer({ direction, height = "h-[500px]", className = "", imageSrc }: GradientSpacerProps) {
    const isToWhite = direction === "toWhite";

    // If no custom image provided, use defaults
    const finalImageSrc = imageSrc || (isToWhite
        ? "/transitions/transition-to-white.jpg"
        : "/transitions/transition-to-black.jpg");

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
               The image is faded out at the top (15%) and bottom (15%) using a CSS mask.
            */}
            <div className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)]">
                <Image
                    src={finalImageSrc}
                    alt={direction === "toWhite" ? "Transition to white" : "Transition to black"}
                    fill
                    className="object-fill select-none pointer-events-none"
                    priority
                    quality={100}
                    unoptimized
                    sizes="100vw"
                />
            </div>

            {/* 
               HARD EDGE BLENDING OVERLAYS (The "Blur" Fix)
               These sit ON TOP of the image and force the edges to be 100% the target color.
               This covers any "cutoff" lines from the image file itself.
            */}
            {direction === "toWhite" ? (
                <>
                    {/* Top: Black -> Transparent */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
                    {/* Bottom: White -> Transparent */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
                </>
            ) : (
                <>
                    {/* Top: White -> Transparent */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
                    {/* Bottom: Black -> Transparent */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                </>
            )}
        </div>
    );
}
