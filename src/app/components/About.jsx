import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Heart,
  Zap,
  History,
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function EnhancedAboutSlider({ isDark = true }) {
  const [active, setActive] = useState(0);

  const colors = {
    bg: isDark ? "bg-[#09090b]" : "bg-white",
    textMain: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/10" : "border-black/5",
    accent: "text-emerald-500",
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
        "B.Tech. in Computer Science from Ganga Institute of Technology and Management. Specialized in Distributed Systems and UI/UX Design Principles.",
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

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(5px)" },
  };

  return (
    <section
      id="about"
      className={`py-12 lg:py-24 px-4 sm:px-6 ${colors.bg} transition-colors duration-700 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        {/* NAVIGATION HEADER */}
        <div
          className={`flex items-center justify-between mb-8 lg:mb-16 border-b ${colors.border} relative`}
        >
          <LayoutGroup>
            <div className="flex gap-6 md:gap-12 overflow-x-auto pb-4 lg:pb-6 no-scrollbar snap-x touch-pan-x">
              {aboutData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative flex flex-col items-start whitespace-nowrap snap-start group"
                >
                  <motion.span
                    animate={{ color: active === i ? "#10b981" : "#71717a" }}
                    className="flex items-center gap-2 text-[9px] md:text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-2"
                  >
                    {item.icon} 0{i + 1}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: active === i ? 1 : 0.3 }}
                    className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${colors.textMain}`}
                  >
                    {item.label}
                  </motion.span>
                  {active === i && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-[1px] left-0 w-full h-0.5 bg-emerald-500 z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </LayoutGroup>

          <div className="hidden md:flex gap-4 pb-6">
            {[
              { icon: <ChevronLeft />, action: prevSlide },
              { icon: <ChevronRight />, action: nextSlide },
            ].map((btn, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1, borderColor: "#10b981" }}
                whileTap={{ scale: 0.9 }}
                onClick={btn.action}
                className={`${colors.textMuted} transition-colors border ${colors.border} p-2 rounded-full hover:text-emerald-500`}
              >
                {React.cloneElement(btn.icon, { size: 20 })}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* TEXT CONTENT */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  staggerChildren: 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.h3
                  variants={textVariants}
                  className={`text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 ${colors.textMain}`}
                >
                  {aboutData[active].title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-emerald-500 italic block">
                    {aboutData[active].title.split(" ").pop()}
                  </span>
                </motion.h3>

                <motion.div
                  variants={textVariants}
                  className="flex gap-4 md:gap-8 items-start"
                >
                  <span
                    className={`text-2xl md:text-4xl ${colors.accent} font-serif italic`}
                  >
                    &ldquo;
                  </span>
                  <p
                    className={`text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed ${colors.textMuted} max-w-2xl`}
                  >
                    {aboutData[active].content}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* MOBILE NAVIGATION DOTS */}
            <div className="flex gap-2 mt-10 md:hidden">
              {aboutData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative h-4 flex items-center"
                >
                  <div className={`h-1 rounded-full bg-zinc-800 w-4`} />
                  {active === i && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 h-1 bg-emerald-500 rounded-full w-8"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* IMAGE FRAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 order-1 lg:order-2 relative group w-full max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:rounded-4xl bg-zinc-800 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  initial={{
                    opacity: 0,
                    filter: "grayscale(100%) contrast(1.2)",
                  }}
                  animate={{
                    opacity: 1,
                    filter: "grayscale(100%) contrast(1)",
                  }}
                  exit={{
                    opacity: 0,
                    filter: "grayscale(100%) brightness(0.5)",
                  }}
                  transition={{ duration: 0.7 }}
                  src="/asifimam.jpg"
                  alt="Portrait"
                  className="object-cover w-full h-full"
                />
              </AnimatePresence>

              <div className="absolute inset-0 border-[8px] lg:border-[12px] rounded-3xl lg:rounded-4xl border-emerald-500/10 pointer-events-none" />

              <div className="absolute bottom-4 left-6 right-6 pointer-events-none overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                  className="text-xl md:text-3xl text-white font-black uppercase tracking-widest block drop-shadow-lg"
                >
                  <span className={colors.accent}>Asif</span> Imam
                </motion.span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: active * 90 }}
              className={`hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 rounded-3xl border-r-2 border-b-2 ${colors.border} -z-10`}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
