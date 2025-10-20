'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FloatingDecorProps {
  src: string;
  alt: string;
  size?: number;
  delay?: number;
  duration?: number;
  xOffset?: number;
  yOffset?: number;
  rotate?: boolean;
  opacity?: number;
  className?: string;
}

export default function FloatingDecor({
  src,
  alt,
  size = 200,
  delay = 0,
  duration = 20,
  xOffset = 0,
  yOffset = 0,
  rotate = true,
  opacity = 0.3,
  className = '',
}: FloatingDecorProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${xOffset}%`,
        top: `${yOffset}%`,
        zIndex: 5,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [opacity * 0.9, opacity, opacity * 0.9],
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.05, 1],
        rotate: rotate ? [0, 360] : 0,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain"
        style={{
          filter: 'none',
          mixBlendMode: 'normal',
        }}
        priority={false}
      />
    </motion.div>
  );
}


