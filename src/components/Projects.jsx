import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const CATEGORIES = ["All", "MERN", "AI", "Blockchain"];

const categoryColors = {
  MERN: "text-green-400 bg-green-500/10 border-green-500/20",
  AI: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Blockchain: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      custom={index * 0.08}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass rounded-2xl border border-border hover:border-purple-500/40 transition-all overflow-hidden group glow-hover flex flex-col"
    >
      <div className="p-6 pb-4 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{project.image}</div>
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-purple-400 transition-colors" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={project.live} target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-purple-400 transition-colors" aria-label="Live Demo">
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {project.featured && (
            <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
              ⭐ Featured
            </span>
          )}
          <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>

        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span key={t}
              className="text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// things I've built</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeFilter === cat
                  ? "bg-primary text-white border-primary glow"
                  : "glass border-border text-slate-400 hover:border-purple-500/40 hover:text-purple-400"
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-60">
                ({cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
