"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import MagneticButton from "@/components/MagneticButton";
import GlassSurface from "@/components/GlassSurface";
import { HiArrowDown } from "react-icons/hi";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isMounted, setIsMounted] = useState(false);

  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Creative Coder",
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

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      const updatedText = isDeleting
        ? currentTitle.substring(0, text.length - 1)
        : currentTitle.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

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

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(184,184,184,0.08) 50%, rgba(140,140,140,0.02) 100%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(184,184,184,0.15) 0%, rgba(140,140,140,0.08) 50%, rgba(100,100,100,0.02) 100%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(232,232,232,0.15) 0%, rgba(184,184,184,0.08) 50%, rgba(140,140,140,0.02) 100%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-6"
        >
          <motion.h1
            variants={slideInFromLeft}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Your Name</span>
          </motion.h1>

          <motion.div
            variants={slideInFromRight}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold h-20 flex items-center justify-center"
          >
            <span className="gradient-text">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Crafting beautiful, functional, and user-centric digital experiences
            with modern web technologies.
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <HiArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



