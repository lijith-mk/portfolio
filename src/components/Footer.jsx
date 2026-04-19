import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-mono">
          &lt;Lijith MK /&gt; © {new Date().getFullYear()}
        </p>

        <p className="text-slate-500 text-sm flex items-center gap-1">
          Built with <FiHeart className="text-red-400 mx-1" /> using React & Tailwind
        </p>

        <div className="flex gap-4">
          {[
            { icon: <FiGithub size={18} />, href: personalInfo.github, label: "GitHub" },
            { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: <FiMail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-slate-500 hover:text-purple-400 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
