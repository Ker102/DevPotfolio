"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiFigma,
  SiJest,
  SiLinux,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const iconMap: { [key: string]: any } = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  GraphQL: SiGraphql,
  Git: SiGit,
  Docker: SiDocker,
  AWS: SiAmazon,
  Vercel: SiVercel,
  Figma: SiFigma,
  Jest: SiJest,
  Linux: SiLinux,
  "REST API": FaCode,
  "CI/CD": FaCode,
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves building exceptional digital
            experiences. With expertise in modern web technologies, I turn ideas
            into reality through clean code and creative solutions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="gradient-text">Skills & Technologies</span>
          </motion.h3>

          {skillCategories.map((category) => (
            <motion.div key={category} variants={fadeInUp}>
              <h4 className="text-2xl font-semibold mb-6 text-center gradient-text">
                {category}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    const Icon = iconMap[skill.name] || FaCode;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={cardHover}
                        initial="rest"
                        whileHover="hover"
                        className="glass dark:glass-dark rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all"
                      >
                        <Icon className="w-12 h-12 text-[#0eaceb]" />
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass dark:glass-dark rounded-xl p-6 text-center"
            >
              <h4 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

