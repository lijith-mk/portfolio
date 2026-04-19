import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { experience } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// where I've worked</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary border-2 border-dark glow flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="glass rounded-2xl p-6 border border-border hover:border-purple-500/40 transition-all glow-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FiBriefcase className="text-purple-400" size={14} />
                      <span className="text-purple-400 font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full border border-border">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-3 text-slate-400 text-sm">
                      <FiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Open to work card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="relative pl-16"
          >
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full border-2 border-dashed border-purple-400/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse" />
            </div>
            <div className="glass rounded-2xl p-6 border border-dashed border-purple-500/30">
              <p className="text-purple-400 font-mono text-sm">// next chapter</p>
              <h3 className="text-white font-bold text-lg mt-1">Open to New Opportunities</h3>
              <p className="text-slate-400 text-sm mt-2">
                Looking for a full-time role as a Full Stack / MERN Developer where I can contribute and grow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
