import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Particle({ x, y, color, angle, distance }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full pointer-events-none"
      style={{ background: color, left: "50%", top: "50%" }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    />
  );
}

function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ["#6C63FF", "#F50057", "#00D4FF", "#FFD700", "#00FF88"][i % 5],
    delay: Math.random() * 0.4,
    duration: 0.8 + Math.random() * 0.8,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-sm"
          style={{ background: p.color, left: `${p.x}%`, top: "-10px" }}
          initial={{ y: -10, opacity: 1, rotate: 0 }}
          animate={{ y: 400, opacity: 0, rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}

export default function SuccessAnimation({ show, onDone }) {
  const [phase, setPhase] = useState("idle"); // idle | burst | confetti | message | done

  useEffect(() => {
    if (!show) { setPhase("idle"); return; }
    setPhase("burst");
    const t1 = setTimeout(() => setPhase("confetti"), 300);
    const t2 = setTimeout(() => setPhase("message"), 600);
    const t3 = setTimeout(() => { setPhase("done"); onDone && onDone(); }, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [show, onDone]);

  const colors = ["#6C63FF", "#F50057", "#00D4FF", "#FFD700", "#00FF88"];
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    angle: (i / 16) * Math.PI * 2,
    color: colors[i % colors.length],
    distance: 60 + Math.random() * 40,
  }));

  return (
    <AnimatePresence>
      {phase !== "idle" && phase !== "done" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center rounded-2xl overflow-hidden z-10"
          style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(8px)" }}
        >
          {/* Confetti rain */}
          {phase === "confetti" || phase === "message" ? <Confetti /> : null}

          {/* Particle burst */}
          {phase === "burst" && (
            <div className="relative flex items-center justify-center">
              {particles.map((p) => (
                <Particle key={p.id} {...p} />
              ))}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.4 }}
                className="text-5xl"
              >
                🚀
              </motion.div>
            </div>
          )}

          {/* Rocket launch */}
          {phase === "confetti" && (
            <motion.div
              initial={{ y: 0, scale: 1 }}
              animate={{ y: -200, scale: 0.3 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              className="text-5xl"
            >
              🚀
            </motion.div>
          )}

          {/* Success message */}
          {phase === "message" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-4 text-center px-6"
            >
              {/* Animated checkmark ring */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #6C63FF, #00FF88)",
                    boxShadow: "0 0 40px rgba(108,99,255,0.6)",
                  }}
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-3xl"
                  >
                    ✓
                  </motion.span>
                </motion.div>
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-400"
                  animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-black text-white"
              >
                Message Sent! 🎉
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-sm"
              >
                Thanks for reaching out. I'll get back to you soon!
              </motion.p>

              {/* Animated dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-2 mt-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-purple-400"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
