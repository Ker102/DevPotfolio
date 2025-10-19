"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import { HiArrowDown } from "react-icons/hi";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Creative Coder",
  ];

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
      className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0eaceb] rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#57c785] rounded-full blur-3xl opacity-20"
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
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#eddd53] rounded-full blur-3xl opacity-20"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
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
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
              className="px-8 py-4 bg-gradient-to-r from-[#0eaceb] via-[#57c785] to-[#eddd53] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 glass dark:glass-dark font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
            >
              Get In Touch
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
            <HiArrowDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



