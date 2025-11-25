"use client";

import { motion } from "framer-motion";
import FloatingDecor from "@/components/FloatingDecor";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SiGmail, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const contactInfo = [
  {
    name: "Gmail",
    icon: SiGmail,
    value: "Kristoferjussmann@gmail.com",
    href: "mailto:Kristoferjussmann@gmail.com",
    color: "#EA4335",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    value: "linkedin.com/in/kristofer-jussmann-b8a398382",
    href: "https://linkedin.com/in/kristofer-jussmann-b8a398382",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    value: "github.com/ker102",
    href: "https://github.com/ker102",
    color: "#181717",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    value: "instagram.com/kaelux.dev",
    href: "https://instagram.com/kaelux.dev",
    color: "#E4405F",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 bg-black dark:bg-gray-50 flex items-center overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <FloatingDecor
        src="/images/decorative/liquid-2.png"
        alt="Decorative element 2"
        size={240}
        xOffset={86}
        yOffset={30}
        delay={2.5}
        duration={57}
        opacity={0.95}
      />
      <FloatingDecor
        src="/images/decorative/liquid-4.png"
        alt="Decorative element 4"
        size={190}
        xOffset={-3}
        yOffset={60}
        delay={1.5}
        duration={51}
        opacity={0.98}
      />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out through any of these channels. I&apos;m always
              open to discussing new projects and opportunities.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-16"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group flex flex-col items-center text-center space-y-2"
              >
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

                <h3 className="text-lg font-semibold text-white transition-colors">
                  {contact.name}
                </h3>
              </motion.a>
            ))}
          </motion.div>

          {/* Collaboration Note */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary-purple/10 via-primary-cyan/10 to-primary-lavender/10 border border-primary-cyan/20">
              <p className="text-lg md:text-xl text-white font-semibold mb-2">
                🤝 Open to Collaboration
              </p>
              <p className="text-sm md:text-base text-gray-300">
                I'm actively seeking opportunities to partner, build innovative projects, and collaborate with like-minded creators. Let's bring ideas to life together!
              </p>
            </div>

            <p className="text-sm text-gray-400">
              Available for freelance opportunities
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">
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
          <p className="text-gray-400">
            © 2025 Kaelux. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
