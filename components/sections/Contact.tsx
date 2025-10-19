"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SiGmail, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const contactInfo = [
  {
    name: "Gmail",
    icon: SiGmail,
    value: "your.email@gmail.com",
    href: "mailto:your.email@gmail.com",
    color: "#EA4335",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    color: "#181717",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    value: "@yourusername",
    href: "https://instagram.com/yourusername",
    color: "#E4405F",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 flex items-center"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects and opportunities.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative glass dark:glass-dark rounded-2xl p-8 overflow-hidden transition-all hover:shadow-2xl"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 via-[#06b6d4]/5 to-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: contact.color }}
                    />
                    <div className="relative w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <contact.icon
                        className="w-8 h-8 dark:text-white transition-colors"
                        style={{ color: contact.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors break-all">
                      {contact.value}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative element */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Available for freelance opportunities
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Currently available
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-gray-300 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Your Name. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
