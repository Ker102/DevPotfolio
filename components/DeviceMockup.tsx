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
      <motion.div
        className="relative w-full max-w-4xl mx-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Laptop frame */}
        <div className="relative bg-gray-800 rounded-t-lg p-3 shadow-2xl">
          {/* Screen bezel */}
          <div className="relative bg-gray-900 rounded-t-md overflow-hidden aspect-video">
            {/* Camera notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>
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
        {/* Laptop base */}
        <div className="w-full h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg">
          <div className="w-1/3 h-1 mx-auto mt-1.5 bg-gray-600 rounded"></div>
        </div>
      </motion.div>
    );
  }

  // Phone mockup
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



