"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#a855f7] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}



