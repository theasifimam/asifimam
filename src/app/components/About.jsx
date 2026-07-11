import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, GraduationCap, Heart, ArrowUpRight } from "lucide-react";

export default function About({ isDark }) {
  const infoBlocks = [
    {
      title: "Core Philosophy",
      icon: <Zap size={18} />,
      content: "Engineering digital systems where speed is the primary feature. Every line of code is audited for performance and latency optimization.",
      cols: "md:col-span-2",
      highlight: false
    },
    {
      title: "Architecture",
      icon: <Cpu size={18} />,
      content: "Specializing in modular React architectures and scalable distributed Node.js services.",
      cols: "md:col-span-1",
      highlight: false
    },
    {
      title: "Education",
      icon: <GraduationCap size={18} />,
      content: "B.Tech in Computer Science from GITAM. Focused on foundational algorithms, data structures, and human-computer interaction.",
      cols: "md:col-span-1",
      highlight: true
    },
    {
      title: "Human Element",
      icon: <Heart size={18} />,
      content: "When not in front of a monitor, I'm scaling climbing walls or experimenting with visual concepts through camera lenses.",
      cols: "md:col-span-2",
      highlight: false
    },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-accent/10 border border-lime-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="text-[10px] font-mono text-lime-accent font-black uppercase tracking-widest">
              Section_01 // Profile
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase leading-tight">
            Thinking in <span className="text-lime-accent">Systems.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Visual Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 rounded-3xl md:rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-3 flex flex-col group overflow-hidden relative"
          >
            <div className="w-full h-[300px] sm:h-[380px] rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-zinc-100 dark:bg-zinc-950">
              <img
                src="/asifimam2.jpg"
                alt="Asif Imam"
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-mono font-black text-lime-accent uppercase tracking-widest block mb-1">
                  Senior Engineer
                </span>
                <span className="text-white text-xl sm:text-2xl font-sans font-black tracking-tight uppercase">
                  Asif Imam
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text & Feature Bento Columns */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Core Philosophy Paragraph (Highlight Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-lime-accent text-black relative overflow-hidden group">
                <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
                  <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>
                    <ArrowUpRight size={22} className="text-black" />
                  </a>
                </div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-sans font-extrabold leading-normal tracking-tight max-w-2xl text-left">
                  "I believe that software should be invisible yet powerful. My engineering approach combines rigorous computational science with high-frequency speed and hyper-polished aesthetics."
                </h3>
              </div>
            </motion.div>

            {/* Sub Info Blocks (Decluttered & Minimal Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
              {infoBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-left flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-black dark:text-lime-accent shrink-0 h-10 w-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                    {block.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-black uppercase tracking-wider text-black dark:text-white mb-1">
                      {block.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-sans font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {block.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
