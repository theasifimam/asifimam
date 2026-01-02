import React, { useState } from "react";
import {
  GraduationCap,
  Heart,
  Zap,
  History,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Camera,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutRedesign({ isDark = true }) {
  const [active, setActive] = useState(0);

  const colors = {
    bg: isDark ? "bg-[#050505]" : "bg-zinc-50",
    card: isDark ? "bg-zinc-900/50" : "bg-white",
    textMain: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/10" : "border-black/5",
    accent: "text-emerald-500",
  };

  const aboutData = [
    {
      label: "Philosophy",
      icon: <Zap size={18} />,
      title: "Core System",
      highlight: "Philosophy",
      image: "/asifimam.jpg", // Replace with your image paths
      content:
        "Engineering digital systems where speed is the primary feature. Every line of code is audited for performance, ensuring sub-100ms response times.",
    },
    {
      label: "History",
      icon: <History size={18} />,
      title: "Architecture",
      highlight: "Scale",
      image: "/asifimam3.jpg",
      content:
        "Transitioned from building interfaces to architecting scalable backend systems, specializing in modular React and distributed Node.js.",
    },
    {
      label: "Education",
      icon: <GraduationCap size={18} />,
      title: "Academic",
      highlight: "Foundation",
      image: "/asifimam2.jpg",
      content:
        "B.Tech. in Computer Science from GITAM. Specialized in Web, App development and UI/UX Design Principles.",
    },
    {
      label: "Lifestyle",
      icon: <Heart size={18} />,
      title: "Human",
      highlight: "Element",
      image: "/asifimam.jpg",
      content:
        "When I am not coding, I am usually solving problems in other ways. I love bouldering because it’s like a physical puzzle. I enjoy street photography because it helps me see the world clearly. I also build modular synthesizers, which lets me explore how sound and logic work together.",
    },
  ];

  const next = () => setActive((prev) => (prev + 1) % aboutData.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + aboutData.length) % aboutData.length);

  return (
    <section
      className={`relative min-h-screen flex items-center py-20 overflow-hidden ${colors.bg}`}
    >
      {/* Dynamic Background Watermark */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.03, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
          <h2 className="text-[10vw] font-black leading-none uppercase">
            {aboutData[active].label}
          </h2>
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span
                className={`text-xs font-mono font-bold tracking-[0.4em] ${colors.accent}`}
              >
                SECTION_0{active + 1}
              </span>
              <div className="flex gap-1">
                {aboutData.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      active === i ? "w-8 bg-emerald-500" : "w-2 bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <h3
                  className={`text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] ${colors.textMain}`}
                >
                  {aboutData[active].title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700 italic">
                    {aboutData[active].highlight}.
                  </span>
                </h3>

                <p
                  className={`text-lg sm:text-2xl leading-relaxed font-medium ${colors.textMuted} max-w-xl border-l-4 border-emerald-500/20 pl-6`}
                >
                  {aboutData[active].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* TAB NAVIGATION */}
            <div className="mt-16 flex flex-wrap gap-3">
              {aboutData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 ${
                    active === i
                      ? "border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                      : "border-white/5 bg-white/5 hover:bg-white/10 text-zinc-500"
                  }`}
                >
                  <span
                    className={
                      active === i ? "text-emerald-500" : "text-inherit"
                    }
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-widest ${
                      active === i ? "text-white" : "text-inherit"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: THE DYNAMIC IMAGE FRAME */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-emerald-500/20 rounded-tr-[40px] pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-emerald-500/20 rounded-bl-[40px] pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative aspect-[4/5] rounded-[32px] overflow-hidden border ${colors.border} shadow-2xl bg-zinc-900`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{
                      opacity: 0,
                      scale: 1.1,
                      filter: "grayscale(1) brightness(0.5)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: "grayscale(0.5) brightness(1)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      filter: "grayscale(1) brightness(0)",
                    }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={aboutData[active].image}
                      alt={aboutData[active].label}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for better text legibility on image labels */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Image Metadata */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={`label-${active}`}
                        className="flex items-center gap-2"
                      >
                        <Camera size={12} className="text-emerald-500" />
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em]">
                          captured_moment
                        </span>
                      </motion.div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                        Asif Imam
                      </h4>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={prev}
                        className="p-3 rounded-full bg-white/10 hover:bg-emerald-500 transition-colors backdrop-blur-md"
                      >
                        <ArrowLeft size={16} className="text-white" />
                      </button>
                      <button
                        onClick={next}
                        className="p-3 rounded-full bg-white/10 hover:bg-emerald-500 transition-colors backdrop-blur-md"
                      >
                        <ArrowRight size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
