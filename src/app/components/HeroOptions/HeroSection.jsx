import React from "react";
import { motion } from "framer-motion";

/**
 * Minimal Hero Section
 * Features a clean typography-focused design with staggered animations.
 */
export default function HeroSection({ isDark = true }) {
  const name = "Asif Imam";
  const firstDescription = "Full Stack Developer";
  const secondDescription = "Architecting fast, efficient, and scalable digital systems with a focus on performance and minimalist design.";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a premium feel
      },
    },
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const colors = {
    bg: isDark ? "bg-[#050505]" : "bg-zinc-50",
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-400",
    accent: "text-emerald-500",
    glow: isDark ? "bg-emerald-500/10" : "bg-emerald-500/5",
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-700 ${colors.bg}`}
    >
      {/* Premium Background Ambiance */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          className={`w-[80%] h-[80%] rounded-full blur-[120px] ${colors.glow}`}
        />
        <div className={`absolute inset-0 opacity-[0.2] ${isDark ? "bg-[radial-gradient(#ffffff10_1px,transparent_1px)]" : "bg-[radial-gradient(#00000008_1px,transparent_1px)]"} [background-size:40px_40px]`} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center text-center"
      >
        {/* Subtle Label */}
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
          <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
            {firstDescription}
          </span>
          <div className="h-px w-8 bg-emerald-500/50" />
        </motion.div>

        {/* Hero Name / Title */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <h1 className={`text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.85] ${colors.textPrimary}`}>
            {name.split(" ").map((word, i) => (
              <span key={i} className="inline-block mx-2 first:ml-0 last:mr-0">
                {word}
                {i === 0 && <span className="text-emerald-500">.</span>}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Minimal Description */}
        <motion.p
          variants={itemVariants}
          className={`max-w-lg md:max-w-2xl text-sm md:text-xl font-medium leading-relaxed tracking-tight ${colors.textSecondary}`}
        >
          {secondDescription}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className={`px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
              isDark 
                ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_25px_-10px_rgba(16,185,129,0.4)]" 
                : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.2)]"
            } active:scale-95`}
          >
            Hire Me
          </a>
          <a
            href="#contact"
            className={`px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 ${
              isDark 
                ? "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white" 
                : "border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
            } active:scale-95`}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator / Accent */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-[1px] h-20 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
          />
          <span className={`text-[9px] font-mono uppercase tracking-[0.3em] ${colors.textSecondary} opacity-50`}>
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

