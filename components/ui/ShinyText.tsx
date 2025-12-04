"use client";

import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
    text,
    disabled = false,
    speed = 5,
    className = ''
}) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`inline-block relative ${className}`}
        >
            {/* Base text layer - always visible */}
            <span
                className="bg-clip-text"
                style={{
                    backgroundImage: 'linear-gradient(315deg, #d3d3d3 0%, #7f8c8d 74%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'saturate(1.5) brightness(1.2)',
                }}
            >
                {text}
            </span>
            {/* Shine overlay - only on non-disabled */}
            {!disabled && (
                <span
                    className="absolute inset-0 bg-clip-text animate-shine"
                    style={{
                        backgroundImage:
                            'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animationDuration: animationDuration,
                        pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                >
                    {text}
                </span>
            )}
        </div>
    );
};

export default ShinyText;
