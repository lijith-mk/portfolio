import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function SkillBar({ name, level, index }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-purple-400 text-sm font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #6C63FF, #F50057)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// what I work with</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={gi * 0.15}
              className="glass rounded-2xl p-6 border border-border hover:border-purple-500/40 transition-all glow-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-white">{group.category}</h3>
              </div>
              {group.items.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={si} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-6 font-mono">// also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["TypeScript", "Python", "Docker", "AWS", "Firebase", "GraphQL", "Next.js", "Figma", "Nginx"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass border border-border rounded-full text-sm text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
