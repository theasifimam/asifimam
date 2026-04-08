import React from "react";
import { motion } from "framer-motion";

/**
 * Editorial Experience Section
 * Stripped-down layout letting high-contrast typography speak for itself.
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
    border: isDark ? "border-white/10" : "border-black/10",
    accent: "text-emerald-500",
  };

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-20 md:mb-32"
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

      {/* Editorial Timeline */}
      <div className={`flex flex-col border-t ${colors.border}`}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group py-12 md:py-16 border-b ${colors.border} flex flex-col md:flex-row gap-8 hover:px-4 transition-all duration-500`}
          >
            {/* Period Column */}
            <div className="md:w-1/3">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${colors.accent}`}>
                {exp.period}
              </span>
            </div>

            {/* Content Column */}
            <div className="md:w-2/3 flex flex-col">
              <h3 className={`text-4xl font-black tracking-tight ${colors.textPrimary} mb-2`}>
                {exp.company}
              </h3>
              <p className={`text-sm font-bold uppercase tracking-widest font-mono ${colors.textSecondary} mb-8 group-hover:text-emerald-500 transition-colors`}>
                {exp.role}
              </p>

              <p className={`text-xl leading-relaxed ${colors.textSecondary} mb-8 max-w-2xl`}>
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-6">
                {exp.achievements.map((ach, idx) => (
                  <span key={idx} className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${colors.textSecondary}`}>
                    • {ach}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

