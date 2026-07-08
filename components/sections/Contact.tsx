"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedNumericText } from "@/components/ui/AnimatedNumberText";
import { submitContactForm } from "@/lib/contact-form";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SiGmail, SiGithub, SiInstagram } from "react-icons/si";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { HiOutlineBolt } from "react-icons/hi2";

const contactChannels = [
  {
    name: "Email",
    icon: SiGmail,
    label: "business@kaelux.dev",
    href: "mailto:business@kaelux.dev",
    color: "#EA4335",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    label: "Kaelux",
    href: "https://www.linkedin.com/company/kaelux-dev/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    label: "Ker102",
    href: "https://github.com/ker102",
    color: "#ffffff",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    label: "@kaelux.dev",
    href: "https://instagram.com/kaelux.dev",
    color: "#E4405F",
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >


      <div className="relative z-10 container mx-auto max-w-5xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              <AnimatedNumericText
                text="For investors, partners, collaborators, or businesses inspired by a Kaelux venture, send the context. Founder-led conversations start here."
                numberClassName="font-semibold text-white"
              />
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {contactChannels.map((channel) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-150"
                    style={{ backgroundColor: channel.color }}
                  />
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <channel.icon
                      className="w-7 h-7 text-white/70 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white mb-1">
                  {channel.name}
                </h3>
                <p className="text-xs text-gray-500">{channel.label}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div variants={fadeInUp}>
            <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <HiOutlineBolt className="w-5 h-5 text-white/70" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Start a Conversation
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                      Reach out if you want to discuss investment, a venture partnership, MedAI collaboration,
                      business automation, or a serious business build inspired by the Kaelux ventures.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="rounded-3xl border border-white/10 bg-black/25 px-6 py-8 text-center">
                      <h4 className="text-xl font-semibold text-white">Message sent</h4>
                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        Your message has been sent to business@kaelux.dev. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="homepage-contact-name" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                            Name <span className="text-white/85">*</span>
                          </label>
                          <input
                            id="homepage-contact-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="homepage-contact-email" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                            Email <span className="text-white/85">*</span>
                          </label>
                          <input
                            id="homepage-contact-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-white/30"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
                        <div className="space-y-2">
                          <label htmlFor="homepage-contact-company" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                            Company / Team
                          </label>
                          <input
                            id="homepage-contact-company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company, lab, team, or organization"
                            className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="homepage-contact-topic" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                            Topic
                          </label>
                          <select
                            id="homepage-contact-topic"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                          >
                            {contactTopics.map((topic) => (
                              <option key={topic} value={topic}>
                                {topic}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="homepage-contact-details" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                          Message <span className="text-white/85">*</span>
                        </label>
                        <textarea
                          id="homepage-contact-details"
                          name="details"
                          required
                          rows={5}
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="Tell us what you need, what you want to build, or what kind of collaboration you have in mind."
                          className="w-full rounded-3xl border border-white/12 bg-black/25 px-4 py-4 text-white placeholder:text-white/28 focus:outline-none focus:ring-1 focus:ring-white/30"
                        />
                      </div>

                      {errorMessage ? (
                        <p className="text-sm text-red-400">{errorMessage}</p>
                      ) : null}

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>

                        <Link
                          href="/pricing"
                          className="text-gray-400 hover:text-white font-medium text-base border border-white/10 rounded-full px-6 py-4 hover:border-white/20 transition-all duration-300 text-center whitespace-nowrap"
                        >
                          Engagements
                        </Link>
                      </div>
                    </form>
                  )}
              </div>
            </div>
          </motion.div>

          {/* Status */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-gray-500 font-medium">
              Open to investors, strategic partners, and selective build collaborations
            </span>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kaelux. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
