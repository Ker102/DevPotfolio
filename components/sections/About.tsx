"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import GlassSurface from "@/components/GlassSurface";
import FloatingDecor from "@/components/FloatingDecor";
import LogoLoop from "@/components/LogoLoop";
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

// Brand colors for each technology
const iconColors: { [key: string]: string } = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Vue.js": "#4FC08D",
  "Node.js": "#339933",
  Express: "#000000",
  Python: "#FFD43B",
  Django: "#092E20",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  GraphQL: "#E10098",
  Git: "#F05032",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Vercel: "#000000",
  Figma: "#A259FF",
  Jest: "#C21325",
  Linux: "#000000",
  "REST API": "#7c3aed",
  "CI/CD": "#7c3aed",
};

// Logo configurations for LogoLoop
const frontendLogos = [
  { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React", title: "React" },
  { src: "https://cdn.simpleicons.org/nextdotjs/ffffff", alt: "Next.js", title: "Next.js" },
  { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript", title: "TypeScript" },
  { src: "https://cdn.simpleicons.org/javascript/F7DF1E", alt: "JavaScript", title: "JavaScript" },
  { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind CSS", title: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/html5/E34F26", alt: "HTML5", title: "HTML5" },
  { src: "https://cdn.simpleicons.org/css3/1572B6", alt: "CSS3", title: "CSS3" },
  { src: "https://cdn.simpleicons.org/vuedotjs/4FC08D", alt: "Vue.js", title: "Vue.js" },
];

const backendLogos = [
  { src: "https://cdn.simpleicons.org/nodedotjs/339933", alt: "Node.js", title: "Node.js" },
  { src: "https://cdn.simpleicons.org/express/ffffff", alt: "Express", title: "Express" },
  { src: "https://cdn.simpleicons.org/python/FFD43B", alt: "Python", title: "Python" },
  { src: "https://cdn.simpleicons.org/django/092E20", alt: "Django", title: "Django" },
  { src: "https://cdn.simpleicons.org/postgresql/4169E1", alt: "PostgreSQL", title: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/mongodb/47A248", alt: "MongoDB", title: "MongoDB" },
  { src: "https://cdn.simpleicons.org/graphql/E10098", alt: "GraphQL", title: "GraphQL" },
];

const toolsLogos = [
  { src: "https://cdn.simpleicons.org/git/F05032", alt: "Git", title: "Git" },
  { src: "https://cdn.simpleicons.org/docker/2496ED", alt: "Docker", title: "Docker" },
  { src: "https://cdn.simpleicons.org/amazonaws/FF9900", alt: "AWS", title: "AWS" },
  { src: "https://cdn.simpleicons.org/vercel/ffffff", alt: "Vercel", title: "Vercel" },
  { src: "https://cdn.simpleicons.org/figma/A259FF", alt: "Figma", title: "Figma" },
  { src: "https://cdn.simpleicons.org/jest/C21325", alt: "Jest", title: "Jest" },
  { src: "https://cdn.simpleicons.org/linux/FCC624", alt: "Linux", title: "Linux" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-6 bg-black dark:bg-gray-50 overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <FloatingDecor
        src="/images/decorative/liquid-5.png"
        alt="Decorative element 5"
        size={220}
        xOffset={88}
        yOffset={20}
        delay={1}
        duration={58}
        opacity={0.95}
      />
      <FloatingDecor
        src="/images/decorative/liquid-6.png"
        alt="Decorative element 6"
        size={180}
        xOffset={-2}
        yOffset={50}
        delay={2}
        duration={53}
        opacity={0.98}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate developer who loves building exceptional digital
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
          className="space-y-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            <span className="gradient-text">Skills & Technologies</span>
          </motion.h3>

          {/* Frontend Technologies */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h4 className="text-2xl font-semibold text-center text-white">
              <span className="gradient-text">Frontend</span>
            </h4>
            <LogoLoop
              logos={frontendLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={true}
              ariaLabel="Frontend technologies"
            />
          </motion.div>

          {/* Backend Technologies */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h4 className="text-2xl font-semibold text-center text-white">
              <span className="gradient-text">Backend</span>
            </h4>
            <LogoLoop
              logos={backendLogos}
              speed={55}
              direction="right"
              logoHeight={48}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={true}
              ariaLabel="Backend technologies"
            />
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h4 className="text-2xl font-semibold text-center text-white">
              <span className="gradient-text">Tools & DevOps</span>
            </h4>
            <LogoLoop
              logos={toolsLogos}
              speed={50}
              direction="left"
              logoHeight={48}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={true}
              ariaLabel="Tools and DevOps technologies"
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
      </div>
    </section>
  );
}
