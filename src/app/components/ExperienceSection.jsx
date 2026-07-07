import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, Briefcase, Award, CheckCircle2, ChevronDown } from "lucide-react";

export default function Experience({ isDark }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Volans Infomatics",
      companyInitials: "VI",
      role: "Senior MERN Stack Engineer",
      period: "Dec 2022 — Nov 2025",
      timeAgo: "active",
      description: "Led the development of a high-throughput microservices SaaS platform. Designed scalable schemas and streamlined communication between distributed Node.js services and clustered MongoDB databases.",
      achievements: [
        "Architected systems to maintain 99.9% high-availability uptime.",
        "Optimized MongoDB indexing and aggregation pipelines, reducing DB query latencies by 40%.",
        "Mentored a engineering team of 5 and introduced robust CI/CD deployment rules."
      ],
      techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Docker", "Redis"]
    },
    {
      company: "Softminds Infotech",
      companyInitials: "SI",
      role: "Frontend Developer Intern",
      period: "Oct 2022 — Dec 2022",
      timeAgo: "2.5y ago",
      description: "Contributed to user-facing dashboards and client projects. Focused on responsive layouts, client-side data queries, and complex local/global state stores.",
      achievements: [
        "Successfully delivered zero-bug releases across core modules.",
        "Engineered 15+ reusable, optimized UI library components.",
        "Integrated third-party REST APIs and verified web accessibility rules."
      ],
      techStack: ["React.js", "Redux Toolkit", "JavaScript", "CSS3", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-28 px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono font-black tracking-[0.5em] text-lime-accent uppercase">
            Section_03 // Career
          </span>
          <div className="h-px w-8 bg-lime-accent/50" />
        </div>
        <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase">
          Career <span className="text-lime-accent italic">Journey.</span>
        </h2>
      </motion.div>

      {/* Chats List Timeline (Screenshot 1 active chats style) */}
      <div className="rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-950 border border-black/5 dark:border-white/10 shadow-2xl p-4 md:p-6 space-y-3">
        
        {/* Chat List Header */}
        <div className="px-4 py-2 border-b border-black/5 dark:border-white/10 mb-4 flex items-center justify-between">
          <span className="text-[10px] font-mono font-black text-zinc-400 dark:text-zinc-500 tracking-[0.2em] uppercase">
            RECENT_CONVERSATIONS
          </span>
          <span className="text-[9px] font-sans font-black bg-lime-accent text-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            {experiences.length} Companies
          </span>
        </div>

        {experiences.map((exp, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={i}
              className={`rounded-[2rem] border overflow-hidden transition-all duration-300 ${
                isExpanded
                  ? "bg-zinc-100 dark:bg-zinc-900 border-black/10 dark:border-white/10 shadow-md"
                  : "bg-white dark:bg-black/40 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 cursor-pointer"
              }`}
              onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
            >
              {/* Chat Item Row Header */}
              <div className="p-5 flex items-center gap-4 select-none">
                {/* Company Squircle Avatar */}
                <div className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center font-sans font-black text-base shadow-sm shrink-0 transition-colors ${
                  isExpanded ? "bg-lime-accent text-black" : "bg-zinc-200 dark:bg-zinc-900 text-black dark:text-zinc-300"
                }`}>
                  {exp.companyInitials}
                </div>

                {/* Chat Middle Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-sans font-black text-base md:text-lg text-black dark:text-white truncate">
                      {exp.company}
                    </span>
                    {exp.timeAgo === "active" && (
                      <span className="w-2 h-2 rounded-full bg-lime-accent inline-block" />
                    )}
                  </div>
                  <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 font-bold truncate">
                    {exp.role}
                  </p>
                </div>

                {/* Chat Right Side (Time and Achievements Badge) */}
                <div className="flex flex-col items-end gap-1.5 shrink-0 text-right">
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase">
                    {exp.period.split(" — ")[0]}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Achievement notification badge */}
                    <div className="w-6 h-6 rounded-full bg-lime-accent text-black font-extrabold text-[10px] flex items-center justify-center shadow-sm" title={`${exp.achievements.length} achievements`}>
                      {exp.achievements.length}
                    </div>
                    <ChevronDown size={14} className={`text-zinc-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-lime-accent" : ""}`} />
                  </div>
                </div>
              </div>

              {/* Expandable Chat Details (Framer Motion Drawer) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-5 pb-6 pt-2 border-t border-black/5 dark:border-white/5 space-y-5 bg-zinc-50/50 dark:bg-black/20 text-left">
                      {/* Job Description */}
                      <div>
                        <span className="text-[9px] font-mono font-black text-zinc-400 dark:text-zinc-500 tracking-widest uppercase block mb-1">
                          Role Overview
                        </span>
                        <p className="text-sm font-sans leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements list */}
                      <div>
                        <span className="text-[9px] font-mono font-black text-zinc-400 dark:text-zinc-500 tracking-widest uppercase block mb-3">
                          Key Deliverables
                        </span>
                        <div className="space-y-2.5">
                          {exp.achievements.map((ach, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 size={15} className="text-lime-accent mt-0.5 shrink-0" />
                              <span className="text-xs font-sans font-medium text-zinc-800 dark:text-zinc-300">
                                {ach}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div>
                        <span className="text-[9px] font-mono font-black text-zinc-400 dark:text-zinc-500 tracking-widest uppercase block mb-2.5">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-lg text-[9px] font-sans font-black uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
