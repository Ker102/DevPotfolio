"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import GlassSurface from "@/components/GlassSurface";
import FloatingDecor from "@/components/FloatingDecor";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useState, useRef, MouseEvent } from "react";

// 3D Tilt Component for Project Preview
function TiltCard({ children, project }: { children: React.ReactNode; project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredProject(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredProject(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
          animate={{
            boxShadow: hoveredProject
              ? "0 25px 50px -12px rgba(255, 255, 255, 0.3), 0 0 60px rgba(184, 184, 184, 0.2), 0 0 100px rgba(140, 140, 140, 0.1)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
          }}
        transition={{ duration: 0.3 }}
        className="relative rounded-xl"
      >
        {children}
        
        {/* Glow effect overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoveredProject ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl flex items-center justify-center gap-4 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(184,184,184,0.12) 50%, rgba(140,140,140,0.15) 100%)',
            transform: "translateZ(75px)",
          }}
        >
          <motion.div
            className="flex gap-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: hoveredProject ? 1 : 0.8,
              opacity: hoveredProject ? 1 : 0,
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto hover:scale-110 transition-transform shadow-2xl"
              >
                <GlassSurface
                  width={64}
                  height={64}
                  borderRadius={9999}
                  className="flex items-center justify-center"
                >
                  <HiExternalLink className="w-8 h-8" />
                </GlassSurface>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto hover:scale-110 transition-transform shadow-2xl"
              >
                <GlassSurface
                  width={64}
                  height={64}
                  borderRadius={9999}
                  className="flex items-center justify-center"
                >
                  <FaGithub className="w-8 h-8" />
                </GlassSurface>
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6 bg-black dark:bg-white overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <FloatingDecor
        src="/images/decorative/liquid-1.png"
        alt="Decorative element 1"
        size={260}
        xOffset={-4}
        yOffset={10}
        delay={3}
        duration={56}
        opacity={0.95}
      />
      <FloatingDecor
        src="/images/decorative/liquid-3.png"
        alt="Decorative element 3"
        size={200}
        xOffset={85}
        yOffset={60}
        delay={1}
        duration={54}
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and side projects. Each project is
            crafted with attention to detail and modern best practices.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Project Preview */}
              <div className="w-full lg:w-1/2" style={{ perspective: "1000px" }}>
                <TiltCard project={project}>
                  <div className="flex h-[260px] items-center justify-center rounded-[32px] border border-white/15 bg-white/5 p-8 uppercase tracking-[0.35em] text-white/80 backdrop-blur">
                    Coming soon
                  </div>
                </TiltCard>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <GlassSurface
                      key={techIndex}
                      width="auto"
                      height="auto"
                      borderRadius={9999}
                      className="px-4 py-2"
                    >
                      <span className="text-sm font-medium text-white">{tech}</span>
                    </GlassSurface>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #e8e8e8 25%, #b8b8b8 50%, #8c8c8c 75%, #b8b8b8 100%)',
                        filter: 'saturate(1.3) brightness(1.1)'
                      }}
                    >
                      <HiExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <GlassSurface
                        width="auto"
                        height="auto"
                        borderRadius={9999}
                        className="flex items-center gap-2 px-6 py-3"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="font-semibold">View Code</span>
                      </GlassSurface>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


