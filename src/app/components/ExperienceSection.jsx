import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

/**
 * Minimal Experience Section
 * Features a refined, typography-focused timeline of career achievements.
 */
export default function Experience({ isDark }) {
  const experiences = [
    {
      company: "Volans Infomatics",
      role: "Senior MERN Stack Engineer",
      period: "Dec 2022 — Nov 2025",
      description: "Leading the development of a microservices-based SaaS platform. Orchestrating data flow between Node.js services and MongoDB clusters.",
      achievements: ["99.9% Uptime", "Optimized DB Queries by 40%"],
    },
    {
      company: "Softminds Infotech",
      role: "Frontend Developer Intern",
      period: "Oct 2022 — Dec 2022",
      description: "Developed responsive and user-friendly web applications using React.js. Implemented data fetching and state management using Redux Toolkit.",
      achievements: ["Zero-bug deployments", "Built 15+ reusable components"],
    },
  ];

  const colors = {
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-500",
    border: isDark ? "border-white/5" : "border-black/5",
    accent: "text-emerald-500",
  };

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
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
            Section_03
          </span>
          <div className="h-px w-8 bg-emerald-500/50" />
        </div>
        <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${colors.textPrimary}`}>
          Career <span className="italic text-emerald-500">Journey.</span>
        </h2>
      </motion.div>

      {/* Simplified Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-16"
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            {/* Period Column */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={14} className={colors.accent} />
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${colors.textSecondary}`}>
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className={`md:col-span-9 pb-16 border-b ${colors.border} group-last:border-0 group-last:pb-0 transition-colors duration-500 group-hover:border-emerald-500/30`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className={`text-3xl font-black tracking-tight ${colors.textPrimary} mb-1 transition-colors duration-300 group-hover:text-emerald-500`}>
                    {exp.company}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] font-mono ${colors.accent}`}>
                    {exp.role}
                  </p>
                </div>
                <Briefcase size={20} className={`${colors.textSecondary} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              <p className={`text-lg leading-relaxed ${colors.textSecondary} mb-8 max-w-2xl`}>
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-6">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-1 w-1 rounded-full bg-emerald-500" />
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${colors.textSecondary}`}>
                      {ach}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

