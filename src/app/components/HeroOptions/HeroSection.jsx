import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Video, ArrowUpRight, Check } from "lucide-react";

export default function HeroSection({ isDark }) {
  const name = "Asif Imam";
  const username = "@theasifimam";
  const role = "Senior MERN Stack Engineer 🚀";
  const bio = "Architecting fast, efficient, and scalable digital systems with a focus on performance, robust database schemas, and clean UI aesthetics.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const profileImage = "/asifimam.jpg";

  const handleContactClick = (e, id) => {
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
      id="home"
      className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 xl:px-24 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
      >
        {/* LEFT COLUMN: Text Info & CTA buttons & Status Update (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Section Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-accent/10 border border-lime-accent/20">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span className="text-[10px] font-mono text-lime-accent font-black uppercase tracking-widest">
                Section_00 // Profile
              </span>
            </div>
          </motion.div>

          {/* Name & Handle */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-sans font-black tracking-tight text-black dark:text-white uppercase mb-2">
              {name}
            </h1>
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 block mb-6 font-bold tracking-wider">
              {username}
            </span>
          </motion.div>

          {/* Bio Role & Details */}
          <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
            <span className="text-black dark:text-white font-sans font-black text-lg sm:text-2xl block mb-3">
              {role}
            </span>
            <p className="text-base sm:text-xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 tracking-tight">
              {bio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10"
          >
            <a
              href="#contact"
              onClick={(e) => handleContactClick(e, "contact")}
              className="px-8 py-4 bg-lime-accent hover:bg-lime-accent-hover text-black font-extrabold text-[11px] uppercase tracking-[0.2em] rounded-full shadow-[0_8px_20px_-6px_rgba(210,255,58,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>+ Hire Me</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleContactClick(e, "contact")}
              className="w-12 h-12 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center border border-black/5 dark:border-white/5 transition-all hover:scale-105"
              title="Message"
            >
              <MessageSquare size={16} />
            </a>
            <a
              href="https://wa.me/919911471995"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center border border-black/5 dark:border-white/5 transition-all hover:scale-105"
              title="WhatsApp Call"
            >
              <Phone size={16} />
            </a>
            <a
              href="mailto:asifimam999@gmail.com"
              className="w-12 h-12 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center border border-black/5 dark:border-white/5 transition-all hover:scale-105"
              title="Video Consultation"
            >
              <Video size={16} />
            </a>
          </motion.div>

          {/* Status Update Card (Dashed Box) */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-6 flex items-center gap-4 bg-zinc-50/50 dark:bg-zinc-900/10 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-all duration-300 text-left"
          >
            <div className="w-14 h-14 rounded-[1.25rem] bg-zinc-200 dark:bg-zinc-900 flex flex-col items-center justify-center border border-black/5 dark:border-white/10 shrink-0">
              <span className="text-xl font-sans font-black tracking-tighter text-black dark:text-white">
                4Log
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold tracking-wider text-black dark:text-white">
                  Core Status
                </span>
                <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400">
                  active now
                </span>
              </div>
              <p className="text-sm font-sans font-medium text-zinc-600 dark:text-zinc-400 leading-normal">
                Available for full-time senior engineering roles or custom technical consulting contracts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Profile Photo & Bento Metrics Stats (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center gap-8 order-1 lg:order-2 w-full">
          {/* Squircle Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 xl:w-64 xl:h-64 rounded-[3rem] overflow-hidden border-[6px] border-zinc-100 dark:border-zinc-900 shadow-2xl relative bg-zinc-200 dark:bg-zinc-800">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
            {/* Status Dot */}
            <div className="absolute bottom-2 right-2 flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75 border-2 border-white dark:border-black"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-lime-accent border-4 border-white dark:border-black"></span>
            </div>
          </motion.div>

          {/* Stats Metrics Bento Card Grid */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-4 text-left"
          >
            {/* Green Projects Metric Card */}
            <div className="sm:col-span-2 rounded-[2.5rem] bg-lime-accent text-black p-8 flex flex-col justify-between min-h-[160px] shadow-lg shadow-lime-accent/10 relative overflow-hidden group">
              <div className="absolute right-0 top-0 opacity-10 translate-x-8 -translate-y-8 group-hover:scale-110 group-hover:translate-x-4 transition-all duration-700 pointer-events-none">
                <Check className="w-48 h-48" />
              </div>
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] opacity-60">
                Deliverables
              </span>
              <div className="my-4">
                <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight block leading-none">
                  20+
                </span>
                <span className="block text-[10px] font-sans font-black uppercase tracking-[0.15em] mt-1 opacity-90 leading-tight">
                  Case Studies & Core Projects
                </span>
              </div>
              <a
                href="#projects"
                onClick={(e) => handleContactClick(e, "projects")}
                className="text-[9px] font-sans font-black uppercase tracking-[0.2em] flex items-center gap-1 opacity-75 hover:opacity-100 transition-opacity self-start"
              >
                Explore work <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Experience Card */}
            <div className="rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-6 flex flex-col justify-center min-h-[110px] hover:border-black/10 dark:hover:border-white/10 transition-colors">
              <span className="text-3xl font-sans font-black tracking-tight text-black dark:text-white">
                5+ YRS
              </span>
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 mt-1 leading-tight">
                PROFESSIONAL EXPERIENCE
              </span>
            </div>

            {/* Uptime Card */}
            <div className="rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-6 flex flex-col justify-center min-h-[110px] hover:border-black/10 dark:hover:border-white/10 transition-colors">
              <span className="text-3xl font-sans font-black tracking-tight text-lime-accent">
                99.9%
              </span>
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 mt-1 leading-tight">
                SYSTEM UPTIME MAINTAINED
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
