"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Supporters from "@/components/sections/Supporters";
import ServiceIntroduction from "@/components/sections/ServiceIntroduction";
import MedAIIntro from "@/components/sections/MedAIIntro";
import GradientSpacer from "@/components/sections/GradientSpacer";
import PlatformServices from "@/components/sections/PlatformServices";
import DiagnoserCTA from "@/components/sections/DiagnoserCTA";
import OpenClawBanner from "@/components/sections/OpenClawBanner";
import Projects from "@/components/sections/Projects";
import AboutKaelux from "@/components/sections/AboutKaelux";
import AboutMe from "@/components/sections/AboutMe";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

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
            width={64}
            height={64}
            priority
            className="relative h-16 w-16 select-none object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] rounded-[15px]"
          />

          {/* Text Brand */}
          <Image
            src="/kaelux-text-new.png"
            alt="Kaelux"
            width={106}
            height={32}
            priority
            className="relative h-8 w-auto select-none object-contain drop-shadow-md"
          />
        </div>
      </motion.div>


      <Hero />
      <div className="relative overflow-visible bg-black">
        <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-56 md:-bottom-72 lg:-bottom-[22rem] xl:-bottom-[26rem]">
          <Image
            src="/Same_background_but_202604212151.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-top"
          />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/82 to-transparent md:h-36" />
        </div>
        <div className="relative z-10">
          <Supporters />
          <ServiceIntroduction />
        </div>
      </div>

      <MedAIIntro />

      {/* Image-based Gradient transition: black → white */}
      <GradientSpacer direction="toWhite" className="-mb-16 mt-0 md:mt-4 lg:mt-6 relative z-0" />

      <div className="relative z-10">
        <PlatformServices />
        <OpenClawBanner />
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
