"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import MagneticButton from "@/components/MagneticButton";
import GlassSurface from "@/components/GlassSurface";
import FloatingDecor from "@/components/FloatingDecor";
import DecryptedText from "@/components/ui/DecryptedText";
import ShinyText from "@/components/ui/ShinyText";
import { HiArrowDown } from "react-icons/hi";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function Hero() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const sentences = [
    "Building AI-Powered Automation Workflows",
    "Crafting Intelligent Agent Systems",
    "Engineering LLM-Integrated Applications",
    "Designing Context-Aware AI Experiences",
  ];

  // Generate star properties once and keep them stable across re-renders
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
  }, []);

  // Only render stars on client side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Stars - Only render on client to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Decorative Elements - Only render on client */}
      {isMounted && (
        <>
          <FloatingDecor
            src="/images/decorative/liquid-1.png"
            alt="Decorative element 1"
            size={300}
            xOffset={-3}
            yOffset={15}
            delay={0}
            duration={50}
            opacity={1}
            className="hidden md:block"
          />
          <FloatingDecor
            src="/images/decorative/liquid-2.png"
            alt="Decorative element 2"
            size={250}
            xOffset={82}
            yOffset={10}
            delay={5}
            duration={55}
            opacity={0.95}
            className="hidden md:block"
          />
          <FloatingDecor
            src="/images/decorative/liquid-5.png"
            alt="Decorative element 5"
            size={200}
            xOffset={5}
            yOffset={70}
            delay={2.5}
            duration={60}
            opacity={0.95}
            className="hidden md:block"
          />
          <FloatingDecor
            src="/images/decorative/liquid-4.png"
            alt="Decorative element 4"
            size={280}
            xOffset={87}
            yOffset={65}
            delay={3}
            duration={52}
            opacity={0.98}
            className="hidden md:block"
          />
        </>
      )}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-6"
        >
          <motion.h1
            variants={slideInFromLeft}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <ShinyText
              text="Kaelux Projects"
              speed={3}
            />
          </motion.h1>

          <motion.div
            variants={slideInFromRight}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold h-20 flex items-center justify-center"
          >
            {isMounted && (
              <DecryptedText
                key={key}
                text={sentences[currentSentenceIndex]}
                className="gradient-text"
                speed={50}
                maxIterations={20}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                onDecryptComplete={() => {
                  setTimeout(() => {
                    setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
                    setKey((prev) => prev + 1);
                  }, 2000);
                }}
              />
            )}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Crafting innovative solutions and cutting-edge web applications
            with the latest technologies.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 text-black font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e8e8e8 25%, #b8b8b8 50%, #8c8c8c 75%, #b8b8b8 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite',
                filter: 'saturate(1.3) brightness(1.1)'
              }}
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className="shadow-lg hover:shadow-2xl transition-shadow"
            >
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={9999}
                className="px-8 py-4"
              >
                <span className="font-semibold">Get In Touch</span>
              </GlassSurface>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <HiArrowDown className="w-10 h-10 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

