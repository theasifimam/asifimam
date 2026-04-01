import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  History, 
  GraduationCap, 
  Heart,
  ArrowUpRight 
} from "lucide-react";

/**
 * Refined About Section
 * Aligned with the minimalist and premium design language of the HeroSection.
 */
export default function About({ isDark = true }) {
  const colors = {
    bg: isDark ? "bg-[#050505]" : "bg-white",
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-500",
    cardBg: isDark ? "bg-zinc-900/40" : "bg-zinc-50",
    border: isDark ? "border-white/5" : "border-black/5",
    accent: "text-emerald-500",
  };

  const infoBlocks = [
    {
      title: "Philosophy",
      icon: <Zap size={18} />,
      content: "Engineering digital systems where speed is the primary feature. Every line of code is audited for performance.",
    },
    {
      title: "Architecture",
      icon: <History size={18} />,
      content: "Specializing in modular React architectures and scalable distributed Node.js backend systems.",
    },
    {
      title: "Education",
      icon: <GraduationCap size={18} />,
      content: "B.Tech in CS from GITAM. Focused on Computer Science fundamentals and user experience design.",
    },
    {
      title: "Human Element",
      icon: <Heart size={18} />,
      content: "Boulderer, photographer, and modular synth enthusiast. Exploring the intersection of logic and creativity.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      id="about" 
      className={`relative py-32 overflow-hidden transition-colors duration-700 ${colors.bg}`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          {/* Left Side: Large Header & Intro */}
          <div className="lg:col-span-12 mb-12">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
                Section_01
              </span>
              <div className="h-px w-8 bg-emerald-500/50" />
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] ${colors.textPrimary} mb-8`}
            >
              Building with <span className="italic text-emerald-500">Intention.</span> <br />
              Thinking in <span className="opacity-40">Systems.</span>
            </motion.h2>
          </div>

          {/* Column 1: Image Frame */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className={`absolute -inset-4 border ${colors.border} rounded-[4rem] pointer-events-none group-hover:border-emerald-500/30 transition-colors duration-500`} />
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-zinc-900 shadow-2xl">
                <img 
                  src="/asifimam.jpg" 
                  alt="Asif Imam" 
                  className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-mono text-[10px] tracking-[0.2em] uppercase opacity-60 mb-1">Position</p>
                  <p className="text-white font-bold text-lg">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Content Breakdown */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.p 
              variants={itemVariants}
              className={`text-lg md:text-2xl font-medium leading-relaxed ${colors.textSecondary} max-w-2xl`}
            >
              I believe that software should be invisible yet powerful. My approach combines rigorous engineering principles with a deep appreciation for minimalist aesthetics—ensuring every project is as <span className={`${colors.textPrimary}`}>performant</span> as it is <span className={`${colors.textPrimary}`}>beautiful</span>.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {infoBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`p-8 rounded-[2.5rem] border ${colors.border} ${colors.cardBg} group hover:border-emerald-500/50 transition-all duration-500`}
                >
                  <div className={`mb-6 p-3 rounded-2xl bg-emerald-500/10 w-fit ${colors.accent}`}>
                    {block.icon}
                  </div>
                  <h4 className={`text-xl font-bold mb-3 ${colors.textPrimary} flex items-center gap-2`}>
                    {block.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className={`text-sm leading-relaxed ${colors.textSecondary}`}>
                    {block.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
               <a 
                href="#projects" 
                className={`inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] ${colors.textPrimary} group`}
               >
                 View recent projects
                 <span className={`w-8 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} group-hover:w-12 group-hover:bg-emerald-500 transition-all`} />
               </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

