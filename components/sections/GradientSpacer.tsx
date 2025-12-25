"use client";

interface GradientSpacerProps {
    direction: "toWhite" | "toBlack";
    height?: string;
}

/**
 * Ultra-smooth gradient transition matching the inspiration image.
 * Uses a tall blending area with exponential gradient stops to avoid banding.
 */
export default function GradientSpacer({ direction, height = "h-[600px]" }: GradientSpacerProps) {
    // Top Spacer: Black Section -> White Section
    // Transition: Pure Black -> Deep Indigo/Purple -> Soft Violet -> White
    const gradientToWhite = `linear-gradient(
        to bottom,
        #000000 0%,
        #020103 10%,
        #080410 20%,
        #110825 30%,
        #1d0d3d 40%,
        #2e1065 50%,        /* Deep Violet */
        #4c1d95 60%,
        #7c3aed 70%,        /* Bright Purple */
        #a78bfa 80%,
        #ddd6fe 90%,
        #ffffff 100%
    )`;

    // Bottom Spacer: White Section -> Black Section
    // Transition: White -> Soft Violet -> Bright Purple -> Deep Indigo -> Black
    const gradientToBlack = `linear-gradient(
        to bottom,
        #ffffff 0%,
        #ddd6fe 10%,
        #a78bfa 20%,
        #7c3aed 30%,
        #4c1d95 40%,
        #2e1065 50%,
        #1d0d3d 60%,
        #110825 70%,
        #080410 80%,
        #020103 90%,
        #000000 100%
    )`;

    return (
        <div
            className={`relative ${height} w-full`}
            style={{
                background: direction === "toWhite" ? gradientToWhite : gradientToBlack,
                // Negative margin to pull sections closer if needed, but for now just smooth transition
            }}
        >
            {/* 
               Overlay Gradient to smooth out banding: 
               Adds a secondary layer of noise/dither or just a soft fade 
            */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                <div
                    className="w-full h-full"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.4), transparent 70%)"
                    }}
                />
            </div>

            {/* Large glow orb to match top-right inspiration source */}
            <div
                className="absolute left-1/2 -translate-x-1/2 w-[800px] h-full opacity-40 pointer-events-none"
                style={{
                    background: direction === "toWhite"
                        ? "radial-gradient(ellipse at top, rgba(124, 58, 237, 0.4), transparent 70%)"
                        : "radial-gradient(ellipse at bottom, rgba(124, 58, 237, 0.4), transparent 70%)",
                    filter: "blur(80px)",
                }}
            />
        </div>
    );
}
