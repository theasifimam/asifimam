import React from "react";
import { motion } from "framer-motion";

export default function Experience({ isDark, theme }) {
  const experiences = [
    {
      company: "Volans Infomatics",
      role: "Senior MERN Stack Engineer",
      period: "Dec 2022 — Nov 2025",
      description:
        "Leading the development of a microservices-based SaaS platform. Orchestrating data flow between Node.js services and MongoDB clusters.",
      achievements: ["99.9% Uptime", "Optimized DB Queries by 40%"],
    },
    {
      company: "Softminds Infotech",
      role: "Frontend Developer Intern",
      period: "Oct 2022 — Dec 2022",
      description:
        "Developed responsive and user-friendly web applications using React.js. Implemented data fetching and state management using Redux Toolkit.",
      achievements: [
        "Zero-bug deployments",
        "Built 15+ reusable UI components",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <span
          className={`${theme.accent} font-mono text-xs uppercase tracking-[0.3em]`}
        >
          // CAREER_LOG
        </span>
        <h2
          className={`text-4xl md:text-6xl font-black mt-4 italic tracking-tighter uppercase ${
            isDark ? "text-white" : "text-zinc-900"
          }`}
        >
          Experience
        </h2>
      </motion.div>

      <div className="relative">
        {/* Animated Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] md:w-0.5 ${
            isDark ? "bg-zinc-800" : "bg-zinc-200"
          } hidden md:block transform md:-translate-x-1/2`}
        />

        <div className="space-y-12 md:space-y-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot with Pulse Effect */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5 + i * 0.1,
                  }}
                  className={`w-4 h-4 rounded-full ${theme.accentBg} border-4 ${
                    isDark ? "border-[#09090b]" : "border-white"
                  }`}
                />
                {/* Outer Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.5, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full ${theme.accentBg} -z-10`}
                />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full md:w-[45%]"
              >
                <div
                  className={`${theme.card} border p-6 md:p-10 rounded-3xl md:rounded-[3rem] group relative overflow-hidden transition-colors duration-500 hover:border-emerald-500/30`}
                >
                  {/* Subtle Gradient Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                      <div>
                        <h3
                          className={`text-2xl md:text-3xl font-black italic tracking-tight leading-none mb-2 ${
                            isDark ? "text-white" : "text-zinc-900"
                          }`}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className={`${theme.accent} font-mono text-xs font-bold uppercase tracking-wider`}
                        >
                          {exp.role}
                        </p>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-3 py-1 border rounded-full ${theme.pill} opacity-70 whitespace-nowrap`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p
                      className={`${theme.textMuted} text-sm md:text-base mb-8 leading-relaxed font-medium`}
                    >
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {exp.achievements.map((ach, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 5 }}
                          className={`text-[10px] font-mono font-bold uppercase tracking-tighter flex items-center gap-2 ${
                            isDark ? "text-zinc-400" : "text-zinc-600"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${theme.accentBg}`}
                          />
                          {ach}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Empty Spacer for desktop alignment */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
