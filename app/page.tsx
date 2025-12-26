"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ServiceIntroduction from "@/components/sections/ServiceIntroduction";
import GradientSpacer from "@/components/sections/GradientSpacer";
import PlatformServices from "@/components/sections/PlatformServices";
import DiagnoserCTA from "@/components/sections/DiagnoserCTA";
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
        <div className="relative flex items-center gap-3">
          {/* Icon */}
          <Image
            src="/kaelux-icon-v3.png"
            alt="Kaelux Icon"
            width={80}
            height={80}
            priority
            className="relative h-20 w-20 select-none object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] rounded-[18px]"
          />

          {/* Text Brand */}
          <Image
            src="/kaelux-text-new.png"
            alt="Kaelux"
            width={133}
            height={40}
            priority
            className="relative h-10 w-auto select-none object-contain drop-shadow-md"
          />
        </div>
      </motion.div>


      <Hero />
      <ServiceIntroduction />

      {/* Image-based Gradient transition: black → white */}
      <GradientSpacer direction="toWhite" className="-my-16 relative z-0" />

      <div className="relative z-10">
        <PlatformServices />
        <DiagnoserCTA />
      </div>

      {/* Image-based Gradient transition: white → black */}
      <GradientSpacer direction="toBlack" className="-my-16 relative z-0" />

      <div className="relative z-10">
        <Projects />
      </div>
      <AboutKaelux />
      <AboutMe />
      <Team />
      <Contact />
    </motion.main>
  );
}
