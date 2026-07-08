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
  { name: "Ventures", href: "#ventures" },
  { name: "MedAI", href: "/medai", isExternal: true },
  { name: "Automations", href: "/openclaw", isExternal: true },
  { name: "Engagements", href: "/pricing", isExternal: true },
  { name: "About", href: "/about", isExternal: true },
  { name: "Wiki", href: "/wiki", isExternal: true },
  { name: "Contact", href: "#contact" },
];

const navCards = [
  {
    label: "Explore",
    links: [
      { label: "How We Build", href: "#approach" },
      { label: "Ventures", href: "#ventures" },
      { label: "Automations", href: "/openclaw", isExternal: true },
      { label: "Engagements", href: "/pricing", isExternal: true },
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "Get In Touch", href: "#contact" },
      { label: "MedAI", href: "/medai", isExternal: true },
      { label: "Investor Conversation", href: "/pricing", isExternal: true },
    ],
  },
  {
    label: "Wiki",
    links: [
      { label: "Agentic AI", href: "/wiki/agentic-ai-workflows", isExternal: true },
      { label: "RAG Security", href: "/wiki/rag-security-compliance", isExternal: true },
      { label: "SLMs vs LLMs", href: "/wiki/small-language-models", isExternal: true },
      { label: "Hallucinations", href: "/wiki/ai-hallucination-prevention", isExternal: true },
      { label: "Structured Output", href: "/wiki/structured-generation", isExternal: true },
    ],
  },
  {
    label: "Additional",
    links: [
      { label: "Meet the Founder", href: "#about" },
      { label: "About Kaelux", href: "/about", isExternal: true },
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
  const pathname = usePathname();

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

  const scrollToSection = (
    e: React.MouseEvent<HTMLElement>,
    href: string,
    options?: { localOnly?: boolean }
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Check if we're on the homepage
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";

    if (!options?.localOnly && !isHomePage) {
      // Navigate to homepage with the hash anchor
      window.location.href = "/" + href;
      return;
    }

    // On homepage - scroll to the section after a brief delay for menu to close
    setTimeout(() => {
      const padding = 100;

      if (href === "#" || href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.querySelector(href);
      if (!element) return;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - padding;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 100);
  };

  // Dimensions
  const CLOSED_HEIGHT = 40;
  const CLOSED_WIDTH = 140;
  const CLOSED_RADIUS = 20;
  const isMedAIPage = pathname === "/medai";
  const contactAnchor = isMedAIPage ? "#medai-contact" : "#contact";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      {/* Mobile-only Brand Logo - Top Left */}
      <Link
        href="/"
        className="md:hidden fixed top-6 left-4 z-50 pointer-events-auto"
      >
        <Image
          src="/kaelux-icon-v3.png"
          alt="Kaelux Icon"
          width={1536}
          height={1565}
          priority
          style={{ width: "auto", height: "40px" }}
          className="rounded-[12px] object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.22)]"
        />
      </Link>

      <motion.button
        onClick={(e) => scrollToSection(e, contactAnchor, { localOnly: isMedAIPage })}
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{
          y: -2,
          scale: 1.035,
          backgroundColor: "rgba(62,62,68,0.72)",
          borderColor: "rgba(255,255,255,0.2)",
          boxShadow: "0 18px 44px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.14)",
        }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{
          opacity: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          y: { type: "spring", stiffness: 420, damping: 24 },
          scale: { type: "spring", stiffness: 420, damping: 24 },
          backgroundColor: { duration: 0.22 },
          borderColor: { duration: 0.22 },
          boxShadow: { duration: 0.22 },
        }}
        className="group pointer-events-auto fixed right-3 top-[1.72rem] z-50 cursor-pointer overflow-hidden rounded-full border border-white/12 bg-[rgba(40,40,45,0.58)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-[16px] saturate-[180%] transition-colors hover:text-white md:right-6 md:top-6 md:px-4 md:py-2 md:text-xs md:tracking-[0.22em]"
      >
        <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-80" />
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
        <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-[40%] rotate-[14deg] bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 blur-md transition-all duration-500 group-hover:left-[110%] group-hover:opacity-100" />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[-38%] w-[34%] rotate-[14deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
          animate={{ left: ["-38%", "118%"] }}
          transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
        />
        <span className="relative z-10">Contact</span>
      </motion.button>

      <motion.div
        ref={containerRef}
        className="pointer-events-auto relative overflow-hidden will-change-transform"
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
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
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
          {/* Animated Toggle Button - Mobile stays centered */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.96 }}
            >
              <div className="relative flex h-5 w-5 items-center justify-center">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    rotate: isOpen ? 90 : 0,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <HiMenu className="h-5 w-5 text-white" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    rotate: isOpen ? 0 : -90,
                    scale: isOpen ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <HiX className="h-5 w-5 text-white" />
                </motion.div>
              </div>
            </motion.button>
          </div>

          {/* Animated Toggle Button - Desktop slides left when expanded */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute z-20 hidden h-10 w-10 items-center justify-center rounded-full transition-colors will-change-transform hover:bg-white/10 md:flex"
            initial={false}
            animate={{
              left: isOpen ? "4px" : "50%",
              x: isOpen ? "0%" : "-50%"
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
                  {navLinks.map((link) =>
                    'isExternal' in link && link.isExternal ? (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-1.5 text-sm text-gray-200 hover:text-white transition-colors font-medium rounded-full hover:bg-white/5"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        key={link.name}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="px-4 py-1.5 text-sm text-gray-200 hover:text-white transition-colors font-medium rounded-full hover:bg-white/5"
                      >
                        {link.name}
                      </button>
                    )
                  )}
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
                className="p-6 grid grid-cols-4 gap-6 min-w-[700px]"
              >
                {navCards.map((card) => (
                  <div key={card.label} className="flex flex-col gap-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">
                      {card.label}
                    </span>
                    <div className="flex flex-col gap-1">
                      {card.links.map((link) =>
                        'isExternal' in link && link.isExternal ? (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                          >
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                              {link.label}
                            </span>
                            <GoArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                          </Link>
                        ) : (
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
                        )
                      )}
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
                {navLinks.map((link) =>
                  'isExternal' in link && link.isExternal ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left p-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="w-full text-left p-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
                    >
                      {link.name}
                    </button>
                  )
                )}
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
