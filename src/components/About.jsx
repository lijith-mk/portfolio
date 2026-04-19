import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiAward } from "react-icons/fi";
import { personalInfo, education } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// get to know me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-border glow-hover">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={personalInfo.photo}
                  alt="Lijith MK"
                  className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-purple-500/40"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Lijith MK</h3>
                  <p className="text-purple-400 font-mono text-sm">MCA Graduate · Full Stack Developer</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                I specialize in building end-to-end web applications with the MERN stack.
                From crafting pixel-perfect UIs with React and Tailwind to designing
                robust backend APIs with Node.js and MongoDB — I enjoy every layer of the stack.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <FiMail />, label: "Email", value: personalInfo.email },
                  { icon: <FiPhone />, label: "Phone", value: personalInfo.phone },
                  { icon: <FiMapPin />, label: "Location", value: personalInfo.location },
                  { icon: <FiAward />, label: "Degree", value: "MCA" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-purple-400">{item.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-sm text-slate-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Education */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">🎓</span> Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.15 + 0.3}
                    className="glass rounded-xl p-5 border border-border hover:border-purple-500/40 transition-all glow-hover"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="text-white font-semibold">{edu.degree}</h4>
                        <p className="text-slate-400 text-sm">{edu.institution}</p>
                      </div>
                      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        {edu.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "2+", label: "Years Exp" },
                { value: "15+", label: "Technologies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 border border-border text-center glow-hover"
                >
                  <p className="text-3xl font-black gradient-text">{stat.value}</p>
                  <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
