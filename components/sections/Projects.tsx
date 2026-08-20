"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

import { coreVentures, Venture } from "@/data/ventures";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function VentureCard({ venture }: { venture: Venture }) {
  const isFeatured = venture.id === "medai";
  const wrapperClassName = `block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black ${
    isFeatured ? "md:col-span-2" : ""
  }`;

  const content = (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={`group flex h-full min-h-[15rem] flex-col border border-white/15 bg-[#0d0d0f] p-6 transition-colors duration-200 hover:border-white/30 hover:bg-[#121214] md:p-7 ${
        isFeatured ? "lg:min-h-[17rem] lg:p-8" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
          {venture.stage}
        </p>
        {venture.isExternal ? (
          <HiExternalLink
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-white/45 transition-colors group-hover:text-white"
          />
        ) : (
          <span aria-hidden="true" className="text-base leading-none text-white/45 transition-colors group-hover:text-white">
            →
          </span>
        )}
      </div>

      <h3 className={`mt-8 font-semibold leading-none tracking-[-0.045em] text-white ${
        isFeatured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
      }`}>
        {venture.name}
      </h3>
      <p className="mt-3 text-sm font-medium leading-6 text-white/68">
        {venture.category}
      </p>

      <p className={`mt-6 leading-7 text-white/52 ${isFeatured ? "max-w-3xl text-base" : "text-sm"}`}>
        {venture.description}
      </p>
      <p className="mt-4 text-sm leading-6 text-white/38">
        {venture.audience}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-y-2 pt-8 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/52">
        {venture.tags.map((tag, index) => (
          <span key={tag} className="inline-flex items-center">
            {index > 0 ? <span className="mx-3 text-white/20">/</span> : null}
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 border-t border-white/12 pt-5 text-sm font-semibold text-white/78 transition-colors group-hover:text-white">
        {venture.linkLabel}
      </span>
    </motion.article>
  );

  if (venture.isExternal) {
    return (
      <a
        href={venture.href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={venture.href} className={wrapperClassName}>
      {content}
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="ventures" className="relative bg-black px-6 py-28 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:gap-20 xl:gap-28">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
            className="lg:sticky lg:top-28 lg:flex lg:min-h-[32rem] lg:flex-col lg:justify-between lg:self-start"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Our ventures
              </p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white md:text-7xl">
                Research, made useful.
              </h2>
              <p className="mt-7 max-w-md text-base leading-7 text-white/58 md:text-lg md:leading-8">
                Kaelux turns focused research into open-source work, products, divisions, and ventures built for real environments.
              </p>
            </div>

            <p className="mt-12 max-w-sm border-t border-white/15 pt-5 text-sm leading-6 text-white/40 lg:mt-20">
              Focused research becomes working software, then earns its path into a product, division, or venture.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.12 }}
            variants={staggerContainer}
            className="grid gap-3 md:grid-cols-2"
          >
            {coreVentures.map((venture) => (
              <VentureCard key={venture.id} venture={venture} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
