"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DeviceMockupProps {
  device: "laptop" | "phone";
  imageSrc: string;
  alt: string;
}

export default function DeviceMockup({
  device,
  imageSrc,
  alt,
}: DeviceMockupProps) {
  if (device === "laptop") {
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Container with aspect ratio for the laptop */}
        <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
          {/* 3D Laptop Frame Image - with transparent background */}
          <Image
            src="/images/laptop-mockup.png"
            alt="Laptop frame"
            fill
            className="object-contain z-10 pointer-events-none"
            priority
            style={{ objectFit: 'contain' }}
          />
          
          {/* Project Screenshot - positioned to appear inside the laptop screen */}
          <div className="absolute inset-0 flex items-start justify-center pt-[8%] px-[17%]">
            <div className="relative w-full" style={{ paddingBottom: "62%" }}>
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Phone mockup - keeping the original for now
  return (
    <motion.div
      className="relative w-full max-w-xs mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Phone frame */}
      <div className="relative bg-gray-800 rounded-3xl p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-[9/19]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl z-10 flex items-center justify-center">
            <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
          </div>
          {/* Screen content */}
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Home button indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
    </motion.div>
  );
}



