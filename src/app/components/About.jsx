import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Heart,
  Zap,
  History,
  Target,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Optional: npm install framer-motion

export default function EnhancedAboutSlider({ isDark = true }) {
  const [active, setActive] = useState(0);

  const colors = {
    bg: isDark ? "bg-[#09090b]" : "bg-white",
    textMain: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/10" : "border-black/5",
    accent: "text-emerald-500",
    card: isDark ? "bg-zinc-900/50" : "bg-zinc-50",
  };

  const aboutData = [
    {
      label: "Philosophy",
      icon: <Zap size={14} />,
      title: "Efficiency by Design",
      content:
        "I engineering digital systems where speed is the primary feature. Every line of code is audited for performance, ensuring sub-100ms response times.",
    },
    {
      label: "History",
      icon: <History size={14} />,
      title: "Architecture & Scale",
      content:
        "Transitioned from building interfaces to architecting scalable backend systems, specializing in modular React and distributed Node.js.",
    },
    {
      label: "Education",
      icon: <GraduationCap size={14} />,
      title: "Academic Foundation",
      content:
        "B.Tech. in Computer Science from Ganga Institute of Technology and Management. Specialized in Distributed Systems and UI/UX Design Principles with a 6.9 GPA.",
    },
    {
      label: "Hobbies",
      icon: <Heart size={14} />,
      title: "Beyond the Code",
      content:
        "When I'm not at the terminal, you'll find me capturing street photography, exploring bouldering gyms, or experimenting with modular synthesizers.",
    },
  ];

  const nextSlide = () => setActive((prev) => (prev + 1) % aboutData.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + aboutData.length) % aboutData.length);

  return (
    <section
      id="about"
      className={`py-12 px-6 ${colors.bg} transition-colors duration-700`}
    >
      <div className="max-w-7xl mx-auto">
        {/* NAVIGATION HEADER */}
        <div
          className={`flex items-center justify-between mb-16 border-b ${colors.border} pb-6`}
        >
          <div className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative pb-6 flex flex-col items-start whitespace-nowrap"
              >
                <span
                  className={`flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2 ${
                    active === i ? colors.accent : colors.textMuted
                  }`}
                >
                  {item.icon} 0{i + 1}
                </span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest transition-all ${
                    active === i
                      ? colors.textMain
                      : "opacity-30 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 z-10"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={prevSlide}
              className={`${colors.textMuted} hover:text-emerald-500 transition-colors border ${colors.border} p-2 rounded-full`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`${colors.textMuted} hover:text-emerald-500 transition-colors border ${colors.border} p-2 rounded-full`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* TEXT CONTENT */}
          <div className="lg:col-span-8 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3
                  className={`text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 ${colors.textMain}`}
                >
                  {aboutData[active].title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-emerald-500 italic block md:inline">
                    {aboutData[active].title.split(" ").pop()}
                  </span>
                </h3>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <span
                    className={`text-4xl ${colors.accent} font-serif italic`}
                  >
                    &ldquo;
                  </span>
                  <p
                    className={`text-xl md:text-3xl font-medium leading-relaxed ${colors.textMuted} max-w-2xl`}
                  >
                    {aboutData[active].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* MOBILE NAVIGATION DOTS */}
            <div className="flex gap-3 mt-12 md:hidden">
              {aboutData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    active === i ? "w-12 bg-emerald-500" : "w-4 bg-zinc-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* IMAGE DISK/FRAME */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-zinc-800">
              <img
                src="/asifimam.jpg" // Replace with your image path
                alt="Portrait"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 border-12 rounded-4xl border-emerald-500/10 pointer-events-none" />
            </div>
            {/* Decorative Element */}
            <div
              className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-4xl border-r-2 border-b-2 ${colors.border} -z-10`}
            />

            {/* show name on image */}
            <div className="absolute bottom-2 left-20 w-full pointer-events-none">
              <span
                className={`text-2xl md:text-4xl text-white font-extrabold uppercase tracking-widest`}
              >
                <span className={colors.accent}>Asif</span> Imam
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
