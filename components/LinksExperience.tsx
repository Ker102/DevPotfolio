"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

type LinkCard = {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
};

const IconBadge = ({ children, gradient }: { children: ReactNode; gradient: string }) => (
  <span
    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_10px_25px_rgba(15,23,42,0.4)]"
    style={{ background: gradient }}
  >
    {children}
  </span>
);

const WebsiteIcon = (
  <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
    <path
      d="M16 5a11 11 0 1 0 11 11A11 11 0 0 0 16 5Zm0 20.2A9.2 9.2 0 1 1 25.2 16 9.2 9.2 0 0 1 16 25.2Zm0-15.8a6.6 6.6 0 1 0 6.6 6.6A6.6 6.6 0 0 0 16 9.4Z"
      fill="currentColor"
    />
    <path d="M16 9.4v13.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9.4 16h13.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const GithubIcon = (
  <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
    <path
      d="M16 4.5c-6.4 0-11.5 5.2-11.5 11.5 0 5.1 3.3 9.4 7.8 10.9a1 1 0 0 0 1.1-0.3l0.3-0.5c0.2-0.3 0.2-0.5 0.2-0.8 0-0.6 0-2.2 0-2.2-1.3 0.2-2.3-0.3-2.9-1-0.6-0.9-1.4-1.2-1.4-1.2-0.9-0.6 0.1-0.6 0.1-0.6 1 0.1 1.5 1.1 1.5 1.1 0.9 1.5 2.5 1 3.1 0.7 0.1-0.7 0.4-1 0.7-1.3-2.8-0.3-5.6-1.4-5.6-6.2 0-1.3 0.5-2.4 1.2-3.3-0.1-0.3-0.5-1.5 0.1-3 0 0 1-0.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2 0.6 1.5 0.2 2.7 0.1 3 0.8 0.9 1.2 2 1.2 3.3 0 4.8-2.9 5.9-5.6 6.2 0.4 0.3 0.7 0.8 0.7 1.6 0 1.1 0 2.5 0 2.8 0 0.3 0.1 0.6 0.2 0.8l0.3 0.5a1 1 0 0 0 1.1 0.3c4.6-1.5 7.8-5.8 7.8-10.9 0-6.3-5.1-11.5-11.5-11.5Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
    <path d="M12 13h3v11h-3zM13.5 9.5A1.5 1.5 0 1 1 12 8a1.5 1.5 0 0 1 1.5 1.5Z" fill="currentColor" />
    <path
      d="M17 13h2.8l0.2 1.3a3.4 3.4 0 0 1 2.8-1.4c2.1 0 3.2 1.3 3.2 3.8V24h-3v-7c0-1.2-0.4-1.9-1.5-1.9-1.2 0-1.8 0.9-1.8 2.1V24h-3Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = (
  <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
    <rect x="8" y="8" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="22" cy="10" r="1" fill="currentColor" />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
    <rect x="7" y="9" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M7 12.5 16 18l9-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const primaryLinks: LinkCard[] = [
  {
    label: "Website",
    href: "https://kaelux.dev",
    description: "Main studio hub, releases, and documentation.",
    icon: <IconBadge gradient="linear-gradient(135deg,#0ea5e9,#7c3aed)">{WebsiteIcon}</IconBadge>,
    gradient: "linear-gradient(120deg,#0ea5e9,#7c3aed)",
  },
  {
    label: "GitHub",
    href: "https://github.com/Ker102",
    description: "Open-source experiments, agent stacks, and infra.",
    icon: <IconBadge gradient="linear-gradient(135deg,#111827,#4b5563)">{GithubIcon}</IconBadge>,
    gradient: "linear-gradient(120deg,#1f2937,#4b5563)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kaelux/",
    description: "Client-facing resume and case studies.",
    icon: <IconBadge gradient="linear-gradient(135deg,#38bdf8,#2563eb)">{LinkedInIcon}</IconBadge>,
    gradient: "linear-gradient(120deg,#38bdf8,#2563eb)",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kaelux.dev/",
    description: "Fast drops, motion previews, and AI desk shots.",
    icon: <IconBadge gradient="linear-gradient(135deg,#f472b6,#facc15)">{InstagramIcon}</IconBadge>,
    gradient: "linear-gradient(125deg,#f472b6,#facc15)",
  },
  {
    label: "Newsletter",
    href: "mailto:hello@kaelux.dev?subject=Kaelux%20Pulse",
    description: "Request monthly build notes + beta invites.",
    icon: <IconBadge gradient="linear-gradient(135deg,#22d3ee,#34d399)">{MailIcon}</IconBadge>,
    gradient: "linear-gradient(125deg,#22d3ee,#34d399)",
  },
];

const labTiles = [
  { title: "Mission Control", detail: "Realtime 3D CTA playground powering hero sections." },
  { title: "AI Workflow Deck", detail: "Composable agent pipelines + custom copilots." },
  { title: "Neon Atlas", detail: "Spatial link-bio concept for creators & founders." },
];

export default function LinksExperience() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#01030b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(circle,_rgba(244,114,182,0.18),_transparent_70%)] blur-[180px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <div className="relative w-full max-w-md">
          <motion.div
            aria-hidden
            className="absolute -inset-1 rounded-[40px] opacity-60 blur-2xl"
            style={{ background: "linear-gradient(130deg,#0ea5e9,#7c3aed,#ec4899)" }}
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[36px] border border-white/10 bg-[#05060f]/95 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
          >
            <div className="space-y-4 text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.5em] text-slate-300">
                Pulse Links
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-white">
                One tap access to <span className="text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text">Kaelux</span> grid.
              </h1>
              <p className="text-sm text-slate-300">
                Curated entry points for collaborators, brands, and labs—designed like a neon console.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {primaryLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 p-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
                  style={{ boxShadow: "0 15px 45px rgba(5,6,15,0.5)" }}
                >
                  {link.icon}
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-base font-semibold text-white">
                      {link.label}
                      <FiArrowUpRight className="text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-400">{link.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Signals</p>
              <div className="mt-3 flex flex-col gap-3">
                {labTiles.map((tile, i) => (
                  <motion.div
                    key={tile.title}
                    className="rounded-xl border border-white/5 bg-white/5 p-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                  >
                    <p className="text-white">{tile.title}</p>
                    <p className="text-xs text-slate-400">{tile.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-300">
              <p className="text-center">
                Need something bespoke?{" "}
                <Link href="mailto:hello@kaelux.dev" className="text-cyan-300">
                  hello@kaelux.dev
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
