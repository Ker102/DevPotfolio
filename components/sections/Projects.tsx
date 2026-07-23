"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

import { coreVentures, Venture } from "@/data/ventures";
import GlassSurface from "@/components/GlassSurface";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function VentureCard({ venture, index }: { venture: Venture; index: number }) {
  const content = (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.24)] backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
              {venture.stage}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              {venture.name}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/58">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/62">
          {venture.category}
        </p>
        <p className="text-base leading-7 text-gray-300">{venture.description}</p>
        <p className="mt-5 text-sm leading-6 text-white/56">{venture.audience}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {venture.tags.map((tag) => (
            <GlassSurface
              key={tag}
              width="auto"
              height="auto"
              borderRadius={9999}
              className="px-3 py-1.5"
            >
              <span className="text-xs font-medium text-white/82">{tag}</span>
            </GlassSurface>
          ))}
        </div>

        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3">
          {venture.linkLabel}
          <HiExternalLink className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
        </span>
      </div>
    </motion.article>
  );

  if (venture.isExternal) {
    return (
      <a href={venture.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return (
    <Link href={venture.href} className="block h-full">
      {content}
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="ventures" className="relative overflow-hidden bg-black px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-white/[0.04] blur-[150px]" />
        <div className="absolute right-[12%] top-[36rem] h-80 w-80 rounded-full bg-violet-300/[0.08] blur-[170px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="mb-16 max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-white/45">
            Our ventures
          </p>
          <h2 className="text-5xl font-semibold tracking-[-0.055em] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 md:text-7xl">
            Kaelux builds open-source projects, ventures, and productized systems.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            Kaelux uses research to make working software:{" "}
            <ScrollUnderline underlineClassName="via-white/80">
              MedAI
            </ScrollUnderline>
            , ViperMesh, Harneloop, PromptTriage, and Nullstate span medical infrastructure,
            spatial reasoning, agent harnesses, prompt systems, and security. Some remain open-source
            experiments; others grow into products, divisions, or ventures.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {coreVentures.map((venture, index) => (
            <VentureCard key={venture.id} venture={venture} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
