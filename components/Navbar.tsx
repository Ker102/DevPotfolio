"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const navCards = [
  {
    label: "Explore",
    links: [
      { label: "Get Started", href: "#services" },
      { label: "Software", href: "#projects" },
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "Get In Touch", href: "#contact" },
      { label: "Collaborate", href: "#contact" },
    ],
  },
  {
    label: "Additional",
    links: [
      { label: "About me", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "About Kaelux", href: "#about-kaelux" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/links")) {
    return null;
  }
  return <CompactNavbar />;
}

function CompactNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Offset for fixed navbar (approx 100px)
    const padding = 100;

    const element = document.querySelector(href);
    if (!element) {
      // Fallback if element not found or hash is just "#"
      if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - padding;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  // 'Image 3' Aesthetic: Greyer, more glass-like
  const glassStyle = {
    background: "rgba(40, 40, 45, 0.6)",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  };

  // Dimensions
  const CLOSED_HEIGHT = 40;
  const CLOSED_WIDTH = 140;
  const CLOSED_RADIUS = 20;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.div
        ref={containerRef}
        layout
        className="pointer-events-auto relative overflow-hidden"
        initial={{
          width: CLOSED_WIDTH,
          height: CLOSED_HEIGHT,
          borderRadius: CLOSED_RADIUS,
        }}
        animate={{
          width: isOpen ? "min(1000px, calc(100vw - 32px))" : CLOSED_WIDTH,
          height: isOpen ? "auto" : CLOSED_HEIGHT,
          borderRadius: isOpen ? 24 : CLOSED_RADIUS,
        }}
        // "Black.out(1.7)"
        transition={{
          type: "spring",
          bounce: 0.15,
          duration: 0.6
        }}
        style={{
          background: "rgba(40, 40, 45, 0.6)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Header Row */}
        <div
          className="w-full flex items-center px-1 relative"
          style={{ height: CLOSED_HEIGHT }}
        >
          {/* Animated Toggle Button */}
          <motion.button
            layout
            onClick={() => setIsOpen(!isOpen)}
            className="absolute z-20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors w-10 h-10"
            initial={false}
            animate={{
              left: isOpen ? "4px" : "50%",
              x: isOpen ? "0%" : "-50%",
              rotate: isOpen ? 0 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  rotate: isOpen ? 90 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <HiMenu className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  rotate: isOpen ? 0 : -90,
                  scale: isOpen ? 1 : 0.5
                }}
                transition={{ duration: 0.2 }}
              >
                <HiX className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="flex-1 flex items-center justify-end overflow-hidden h-full pl-4">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="hidden md:flex items-center gap-2 pr-2"
                >
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="px-4 py-1.5 text-sm text-gray-200 hover:text-white transition-colors font-medium rounded-full hover:bg-white/5"
                    >
                      {link.name}
                    </button>
                  ))}
                  <div className="w-px h-4 bg-white/20 mx-2" />
                  <Link
                    href="/links"
                    className="px-4 py-1.5 text-xs font-bold bg-white text-black rounded-full hover:bg-gray-200 transition-colors uppercase tracking-wider"
                  >
                    Link Hub
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-px bg-white/10"
            />
          )}
        </AnimatePresence>

        {/* Expanded Content (Desktop Cards) */}
        <AnimatePresence>
          {isOpen && (
            <div className="hidden md:block overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="p-6 grid grid-cols-3 gap-8 min-w-[600px]"
              >
                {navCards.map((card) => (
                  <div key={card.label} className="flex flex-col gap-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">
                      {card.label}
                    </span>
                    <div className="flex flex-col gap-1">
                      {card.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.href)}
                          className="group flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                        >
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {link.label}
                          </span>
                          <GoArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Expanded Content (Mobile List) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2 min-w-[300px]">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="w-full text-left p-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <Link
                  href="/links"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center p-3 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-wide"
                >
                  Link Hub
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
