"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { submitContactForm } from "@/lib/contact-form";
import { SiGmail, SiGithub, SiInstagram } from "react-icons/si";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { HiOutlineBolt } from "react-icons/hi2";

const contactChannels = [
  {
    name: "Email",
    icon: SiGmail,
    label: "business@kaelux.dev",
    href: "mailto:business@kaelux.dev",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    label: "Kaelux",
    href: "https://www.linkedin.com/company/kaelux-dev/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    label: "Ker102",
    href: "https://github.com/ker102",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    label: "@kaelux.dev",
    href: "https://instagram.com/kaelux.dev",
  },
];

const contactTopics = [
  "Investor or strategic partner",
  "Venture partnership",
  "Build something similar",
  "Business automation",
  "MedAI collaboration",
  "General inquiry",
] as const;

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "General inquiry",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fieldClassName =
    "w-full border border-white/15 bg-[#080809] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 hover:border-white/25 focus:border-white/50 focus:ring-1 focus:ring-white/20";
  const revealTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitContactForm({
        source: "Homepage Contact",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        plan: formData.topic,
        details: formData.details,
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        topic: "General inquiry",
        details: "",
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black px-6 py-28 md:py-36">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20 xl:gap-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={revealTransition}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="max-w-lg text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white md:text-7xl">
              Get in touch.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/60 md:text-lg md:leading-8">
              For investors, partners, collaborators, or businesses inspired by a Kaelux venture, send the context. Founder-led conversations start here.
            </p>

            <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-1">
              {contactChannels.map((channel, index) => (
                <motion.a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.45,
                          delay: index * 0.055,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  whileTap={reduceMotion ? undefined : { x: 1 }}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-white/15 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-4 sm:odd:border-r lg:px-0 lg:odd:border-r-0"
                >
                  <channel.icon
                    aria-hidden="true"
                    className="h-4 w-4 text-white/50 transition-colors group-hover:text-white"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {channel.name}
                    </span>
                    <span className="mt-1 block text-xs text-white/45">
                      {channel.label}
                    </span>
                  </span>
                  <FaArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-white/35 transition-colors group-hover:text-white"
                  />
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex max-w-md items-start gap-3 text-sm leading-6 text-white/50">
              <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                {!reduceMotion ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                ) : null}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span>
                Open to investors, strategic partners, and selective build collaborations
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { ...revealTransition, delay: 0.12 }
            }
            className="border border-white/15 bg-[#0d0d0f] p-6 md:p-8 lg:p-10"
          >
            <div className="border-b border-white/15 pb-8">
              <HiOutlineBolt
                aria-hidden="true"
                className="h-5 w-5 text-white/55"
              />
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                Start a conversation.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                Reach out to discuss investment, a venture partnership, MedAI collaboration, business automation, or a serious build.
              </p>
            </div>

            {isSubmitted ? (
              <div
                className="mt-8 border border-white/15 bg-black/30 px-6 py-8"
                aria-live="polite"
              >
                <h4 className="text-xl font-semibold text-white">Message sent</h4>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Your message has been sent to business@kaelux.dev. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="homepage-contact-name"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
                    >
                      Name <span className="text-white/90">*</span>
                    </label>
                    <input
                      id="homepage-contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={fieldClassName}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="homepage-contact-email"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
                    >
                      Email <span className="text-white/90">*</span>
                    </label>
                    <input
                      id="homepage-contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={fieldClassName}
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_220px]">
                  <div className="space-y-2">
                    <label
                      htmlFor="homepage-contact-company"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
                    >
                      Company / Team
                    </label>
                    <input
                      id="homepage-contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company, lab, team, or organization"
                      className={fieldClassName}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="homepage-contact-topic"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
                    >
                      Topic
                    </label>
                    <select
                      id="homepage-contact-topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className={fieldClassName}
                    >
                      {contactTopics.map((topic) => (
                        <option
                          key={topic}
                          value={topic}
                          className="bg-[#0d0d0f] text-white"
                        >
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="homepage-contact-details"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
                  >
                    Message <span className="text-white/90">*</span>
                  </label>
                  <textarea
                    id="homepage-contact-details"
                    name="details"
                    required
                    rows={5}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us what you need, what you want to build, or what kind of collaboration you have in mind."
                    className={`${fieldClassName} min-h-32 resize-y`}
                  />
                </div>

                {errorMessage ? (
                  <p className="border-l-2 border-red-400 pl-4 text-sm leading-6 text-red-300" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="submit"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { y: 0 }}
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                  </motion.button>

                  <Link
                    href="/pricing"
                    className="whitespace-nowrap border border-white/20 px-6 py-4 text-center text-base font-medium text-white/65 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    Engagements
                  </Link>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        <motion.footer
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { delay: 0.2, duration: 0.45 }
          }
          className="mt-24 border-t border-white/15 pt-8 text-center"
        >
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Kaelux. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
