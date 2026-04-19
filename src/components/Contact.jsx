import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import axios from "axios";
import { personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await axios.post(`${API_URL}/api/contact`, form);
      if (!res.data.success) throw new Error("Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setErrorMsg(err.response?.data?.error || err.message || "Something went wrong.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// let's connect</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-8 border border-border">
              <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: <FiMail />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <FiMapPin />, label: "Location", value: personalInfo.location, href: "#" },
                  { icon: <FiGithub />, label: "GitHub", value: "github.com/lijithmk", href: personalInfo.github },
                  { icon: <FiLinkedin />, label: "LinkedIn", value: "linkedin.com/in/lijithmk", href: personalInfo.linkedin },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-slate-300 text-sm group-hover:text-purple-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <p className="text-green-400 font-semibold">Available for Work</p>
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Currently open to full-time positions and freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-border"
            >
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-800/50 border border-border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/60 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-800/50 border border-border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/60 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-800/50 border border-border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/60 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <p className="text-green-400 text-sm text-center bg-green-500/10 border border-green-500/20 rounded-xl py-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2">
                    ❌ {errorMsg}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className="w-full py-3 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 glow hover:glow-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
