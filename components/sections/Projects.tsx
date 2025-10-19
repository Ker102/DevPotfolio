"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import DeviceMockup from "@/components/DeviceMockup";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-800"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              <div className="w-full lg:w-1/2">
                <motion.div
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative"
                >
                  <DeviceMockup
                    device={index % 3 === 0 ? "phone" : "laptop"}
                    imageSrc={project.image}
                    alt={project.name}
                  />
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#0eaceb]/90 via-[#57c785]/90 to-[#eddd53]/90 rounded-lg flex items-center justify-center gap-4 pointer-events-none"
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto p-4 bg-white rounded-full hover:scale-110 transition-transform"
                      >
                        <HiExternalLink className="w-8 h-8 text-gray-900" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto p-4 bg-white rounded-full hover:scale-110 transition-transform"
                      >
                        <FaGithub className="w-8 h-8 text-gray-900" />
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 glass dark:glass-dark rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
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
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0eaceb] to-[#57c785] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
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
                      className="flex items-center gap-2 px-6 py-3 glass dark:glass-dark font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <FaGithub className="w-5 h-5" />
                      View Code
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



