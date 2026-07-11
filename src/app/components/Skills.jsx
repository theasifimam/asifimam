import React from "react";
import { Layers, Cpu, Globe, Codepen, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills({ isDark }) {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: <Layers size={20} />,
      desc: "Engineering highly-responsive, performance-tuned web interfaces and scalable client-side logic.",
      focus: "Lighthouse Performance & Fluid Interactions",
      skills: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Redux Toolkit"],
      cornerStyle: "rounded-tl-[0.75rem]"
    },
    {
      title: "Backend Infrastructure",
      icon: <Cpu size={20} />,
      desc: "Designing robust API frameworks, secure authentication gates, and optimized relational/non-relational schemas.",
      focus: "Latency reduction & high throughput microservices",
      skills: ["Node.js", "Express API", "MySQL DB", "MongoDB Cluster", "JWT Security"],
      cornerStyle: "rounded-tr-[0.75rem]"
    },
    {
      title: "DevOps & Cloud Ops",
      icon: <Globe size={20} />,
      desc: "Orchestrating automated deployment processes, cloud hosting, container operations, and version versioning.",
      focus: "Continuous integration & zero-downtime rollouts",
      skills: ["Docker Container", "Vercel Cloud", "GitHub Actions", "Git VSC", "AWS Deploy"],
      cornerStyle: "rounded-bl-[0.75rem]"
    },
    {
      title: "Core Programming",
      icon: <Codepen size={20} />,
      desc: "Solid grasp of computer science principles, typed code patterns, and modern JavaScript environments.",
      focus: "Type safety, algorithms & algorithmic efficiency",
      skills: ["TypeScript", "JavaScript (ES6)", "HTML5 Semantic", "CSS3 Grid"],
      cornerStyle: "rounded-br-[0.75rem]"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-accent/10 border border-lime-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="text-[10px] font-mono text-lime-accent font-black uppercase tracking-widest">
              Section_02 // Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase leading-tight text-left">
            Technical <span className="text-lime-accent">Arsenal.</span>
          </h2>
        </motion.div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col justify-between text-left border-t border-zinc-200 dark:border-zinc-800/80 pt-8 transition-[border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-lime-accent group/skill"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-black dark:text-lime-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/skill:-translate-y-1">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">
                    Module // 0{i + 1}
                  </span>
                </div>

                {/* Title and Desc */}
                <h3 className="text-lg sm:text-xl font-sans font-black text-black dark:text-white uppercase tracking-tight mb-2 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/skill:text-lime-accent">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              {/* Skills Tags Area & Core Metric */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-mono font-bold uppercase bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-lime-accent/50 hover:bg-lime-accent/5 hover:text-lime-accent transition-[color,background-color,border-color] duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Focus Line */}
                <div className="border-t border-zinc-100 dark:border-zinc-900/65 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    Target
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-bold text-black dark:text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent shrink-0" />
                    {cat.focus}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
