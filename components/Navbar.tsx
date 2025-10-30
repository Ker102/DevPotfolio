"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useLayoutEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import LogoImage from "../Red White Simple Company Technology Logo.png";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Navigation cards for expanded menu
const navCards = [
  {
    label: "Explore",
    links: [
      { label: "About Me", href: "#about" },
      { label: "My Work", href: "#projects" },
    ]
  },
  {
    label: "Connect",
    links: [
      { label: "Get In Touch", href: "#contact" },
      { label: "View Resume", href: "#" },
    ]
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#projects" },
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    
    // Close expanded menu when clicking a link
    if (isExpanded && tlRef.current) {
      tlRef.current.reverse();
      setIsExpanded(false);
    }
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      return 400; // Mobile expanded height
    }
    return 280; // Desktop expanded height
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Important: Set initial state
    const collapsedHeight = 60; // Match the minHeight of your GlassSurface
    gsap.set(navEl, { height: collapsedHeight, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // Expand height with back.out(1.7) ease
    tl.to(navEl, {
      height: calculateHeight(),
      duration: 0.6,
      ease: 'back.out(1.7)'
    });

    // Animate cards in with stagger
    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.5, 
      ease: 'back.out(1.7)', 
      stagger: 0.08 
    }, '-=0.2');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleExpandedMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsExpanded(true);
      tl.play();
    } else {
      setIsExpanded(false);
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-3">
        <div ref={navRef} className="relative" style={{ borderRadius: '32px', overflow: 'hidden' }}>
          <div 
            className="w-full glass-navbar"
            style={{ 
              minHeight: '60px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '32px',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="flex items-center justify-between w-full px-6 py-3 relative z-10">
              {/* Hamburger Menu Button - Desktop */}
              <button
                onClick={toggleExpandedMenu}
                className="hidden md:block cursor-pointer p-2 -ml-2 hover:opacity-80 transition-opacity relative z-20"
                aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                type="button"
              >
                <div className="flex flex-col gap-2 w-7 h-6 justify-center">
                  <motion.div
                    className="h-0.5 w-full rounded-full"
                    style={{ 
                      backgroundColor: '#ffffff',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    }}
                    animate={{
                      rotate: isExpanded ? 45 : 0,
                      y: isExpanded ? 7 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="h-0.5 w-full rounded-full"
                    style={{ 
                      backgroundColor: '#ffffff',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    }}
                    animate={{
                      rotate: isExpanded ? -45 : 0,
                      y: isExpanded ? -7 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </div>
              </button>

              {/* Empty space for logo (moved outside) */}
              <div className="hidden md:block w-10"></div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 relative z-20">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="font-semibold transition-all duration-300 relative group text-base"
                    style={{
                      color: '#ffffff',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {link.name}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #ffffff 0%, #b8b8b8 50%, #8c8c8c 100%)',
                        filter: 'saturate(1.3)',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
                      }}
                    ></span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex w-full items-center justify-between gap-3 relative z-20">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2"
                  style={{ 
                    color: '#ffffff',
                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                  }}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <HiX className="w-7 h-7" />
                  ) : (
                    <HiMenu className="w-7 h-7" />
                  )}
                </button>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-white/30 to-transparent blur-lg opacity-80" />
                  <Image
                    src={LogoImage}
                    alt="Kaelux logo"
                    width={44}
                    height={44}
                    className="relative h-11 w-11 select-none object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.75)]"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* Expanded Navigation Cards - Desktop Only - Always rendered for GSAP */}
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 pb-6 pt-4 relative z-10">
              {navCards.map((card, idx) => (
                <div
                  key={card.label}
                  ref={setCardRef(idx)}
                  className="opacity-0"
                  style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}
                >
                  <div
                    className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <h4 className="text-lg font-bold mb-4 gradient-text">
                      {card.label}
                    </h4>
                    <div className="space-y-3">
                      {card.links?.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                          className="flex items-center gap-2 transition-colors group"
                          style={{ color: '#d1d5db' }}
                        >
                          <GoArrowUpRight 
                            className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                            style={{ color: '#d1d5db' }}
                          />
                          <span 
                            className="text-sm font-medium group-hover:text-white transition-colors"
                          >
                            {link.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
              <div
                key={link.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
                }}
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 font-semibold transition-all"
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
