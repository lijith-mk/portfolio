import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-mono mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 h-10">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Expert",
                2000,
                "React Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-400"
            />
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-primary text-white font-semibold glow hover:glow-hover transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl glass border border-purple-500/40 text-slate-200 font-semibold hover:border-purple-400 transition-all flex items-center gap-2"
            >
              <FiDownload /> Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { icon: <FiGithub size={20} />, href: personalInfo.github, label: "GitHub" },
              { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl glass border border-border flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative float-animation">
            {/* Outer ring */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-purple-500/30 flex items-center justify-center relative">
              {/* Rotating dashed ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/20"
                style={{ animation: "spin 20s linear infinite" }}
              />
              {/* Inner card */}
              <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-purple-500/40 glow">
                <img
                  src={personalInfo.photo}
                  alt="Lijith MK"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badges — hidden on small screens */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="hidden sm:block absolute -top-4 -right-4 glass border border-border px-3 py-2 rounded-xl text-xs font-mono text-green-400"
            >
              ⚡ React.js
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              className="hidden sm:block absolute -bottom-4 -left-4 glass border border-border px-3 py-2 rounded-xl text-xs font-mono text-blue-400"
            >
              🍃 MongoDB
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              className="hidden sm:block absolute top-1/2 -right-12 glass border border-border px-3 py-2 rounded-xl text-xs font-mono text-yellow-400"
            >
              🟢 Node.js
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
              className="hidden sm:block absolute top-0 -left-12 glass border border-border px-3 py-2 rounded-xl text-xs font-mono text-cyan-400"
            >
              🐦 Flutter
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.8 }}
              className="hidden sm:block absolute -bottom-4 -right-4 glass border border-border px-3 py-2 rounded-xl text-xs font-mono text-pink-400"
            >
              📱 React Native
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
