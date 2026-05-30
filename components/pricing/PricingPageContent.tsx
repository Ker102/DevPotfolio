"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import { engagementTracks } from "@/data/engagements";
import { NeedHelpLink } from "@/components/ui/NeedHelpLink";

export default function PricingPageContent() {
    return (
        <section className="min-h-screen px-6 pb-24 pt-32">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18 }}
                    className="mx-auto mb-20 max-w-4xl text-center"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
                        Engagements
                    </p>
                    <h1 className="mb-6 text-5xl font-semibold tracking-[-0.055em] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 md:text-7xl">
                        Partner with the Kaelux venture group.
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
                        Kaelux is not selling a generic menu of AI packages. This page routes the right
                        people to the right conversation: investors, venture partners, selective business
                        builds, and personal AI agent setup.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {engagementTracks.map((track, index) => (
                        <motion.article
                            key={track.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.18 }}
                            transition={{ type: "spring", stiffness: 60, damping: 18, delay: index * 0.05 }}
                            className={`relative overflow-hidden rounded-[30px] border p-7 shadow-[0_24px_86px_rgba(0,0,0,0.28)] backdrop-blur ${
                                track.highlighted
                                    ? "border-white/22 bg-white/[0.065]"
                                    : "border-white/10 bg-white/[0.03]"
                            }`}
                        >
                            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_32%)]" />

                            <div className="relative z-10 flex h-full flex-col">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
                                    {track.eyebrow}
                                </p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                                    {track.title}
                                </h2>
                                <p className="mt-5 text-base leading-7 text-gray-300">
                                    {track.description}
                                </p>

                                <div className="mt-6 rounded-2xl border border-white/10 bg-black/18 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                                        Best for
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-white/68">{track.bestFor}</p>
                                </div>

                                <ul className="mt-6 flex-1 space-y-3">
                                    {track.outcomes.map((outcome) => (
                                        <li key={outcome} className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                                            <FaCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-white/62" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={track.href} className="mt-8">
                                    <motion.span
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                                            track.highlighted
                                                ? "bg-white text-black hover:bg-gray-100"
                                                : "border border-white/14 bg-white/8 text-white hover:border-white/25 hover:bg-white/12"
                                        }`}
                                    >
                                        {track.cta}
                                        <FaArrowRight className="text-xs" />
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="mx-auto mt-16 max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.03] p-7 text-center"
                >
                    <h2 className="text-2xl font-semibold text-white">No package pricing by default.</h2>
                    <p className="mt-4 text-base leading-7 text-gray-400">
                        Kaelux work is evaluated by fit, seriousness, and leverage. If the request is not a
                        match for the venture group, the answer should be a clear no rather than a generic
                        services proposal.
                    </p>
                    <div className="mt-5">
                        <NeedHelpLink label="Start with the contact form" href="/#contact" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
