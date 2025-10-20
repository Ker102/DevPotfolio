"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import { HiLightningBolt } from "react-icons/hi";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Lightning Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="fixed top-6 left-6 z-[60]"
      >
        <div className="relative">
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#b8b8b8" />
                <stop offset="74%" stopColor="#7f8c8d" />
              </linearGradient>
            </defs>
          </svg>
          <HiLightningBolt 
            className="w-12 h-12" 
            style={{ 
              fill: 'url(#logo-gradient)',
              filter: 'drop-shadow(0 0 16px rgba(255,255,255,0.8))',
              color: '#ffffff'
            }} 
          />
        </div>
      </motion.div>

      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </motion.main>
  );
}



