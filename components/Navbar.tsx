"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX, HiLightningBolt } from "react-icons/hi";
import GlassSurface from "./GlassSurface";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-3">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={32}
          borderWidth={0.07}
          brightness={50}
          opacity={0.93}
          blur={11}
          displace={0}
          backgroundOpacity={0}
          saturation={1}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          xChannel="R"
          yChannel="G"
          mixBlendMode="difference"
          className="w-full"
          style={{ minHeight: '48px' }}
        >
          <div className="flex items-center justify-between w-full px-6 py-2">
            {/* AI Logo Icon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="relative">
                <HiLightningBolt 
                  className="w-8 h-8" 
                  style={{ 
                    fill: 'url(#icon-gradient)',
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
                  }} 
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#b8b8b8" />
                      <stop offset="74%" stopColor="#7f8c8d" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white font-medium transition-all duration-300 relative group hover-gradient-text"
                  style={{
                    '--hover-gradient': 'linear-gradient(90deg, #ffffff 0%, #e8e8e8 30%, #b8b8b8 50%, #8c8c8c 70%, #b8b8b8 100%)'
                  } as React.CSSProperties}
                >
                  {link.name}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background: 'linear-gradient(90deg, #ffffff 0%, #b8b8b8 50%, #8c8c8c 100%)',
                      filter: 'saturate(1.3)'
                    }}
                  ></span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </GlassSurface>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-4"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <GlassSurface
                key={link.name}
                width="100%"
                height="auto"
                borderRadius={20}
                borderWidth={0.07}
                brightness={50}
                opacity={0.93}
                blur={11}
                displace={0}
                backgroundOpacity={0}
                saturation={1}
                distortionScale={-180}
                redOffset={0}
                greenOffset={10}
                blueOffset={20}
                xChannel="R"
                yChannel="G"
                mixBlendMode="difference"
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-white font-medium transition-all"
                >
                  {link.name}
                </button>
              </GlassSurface>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
