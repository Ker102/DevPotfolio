"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ServiceIntroduction from "@/components/sections/ServiceIntroduction";
import PlatformServices from "@/components/sections/PlatformServices";
import Projects from "@/components/sections/Projects";
import AboutKaelux from "@/components/sections/AboutKaelux";
import AboutMe from "@/components/sections/AboutMe";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

import LogoImage from "../Red White Simple Company Technology Logo.png";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="hidden md:flex fixed top-4 left-6 z-[60]"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-white/30 to-transparent blur-xl opacity-80 md:blur-2xl" />
          <Image
            src={LogoImage}
            alt="Site logo"
            width={64}
            height={64}
            priority
            className="relative h-16 w-16 select-none object-contain drop-shadow-[0_0_22px_rgba(255,255,255,0.85)]"
          />
        </div>
      </motion.div>


      <Hero />
      <ServiceIntroduction />
      <PlatformServices />
      <Projects />
      <AboutKaelux />
      <AboutMe />
      <Team />
      <Contact />
    </motion.main>
  );
}
