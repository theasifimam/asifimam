import React from "react";
import { Layers, Cpu, Globe, Codepen, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills({ isDark }) {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: <Layers size={22} />,
      desc: "Engineering highly-responsive, performance-tuned web interfaces and scalable client-side logic.",
      focus: "Lighthouse Performance & Fluid Interactions",
      skills: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Redux Toolkit"],
      cornerStyle: "rounded-tl-[0.75rem]" // Asymmetric inspiration from the screenshots
    },
    {
      title: "Backend Infrastructure",
      icon: <Cpu size={22} />,
      desc: "Designing robust API frameworks, secure authentication gates, and optimized relational/non-relational schemas.",
      focus: "Latency reduction & high throughput microservices",
      skills: ["Node.js", "Express API", "MySQL DB", "MongoDB Cluster", "JWT Security"],
      cornerStyle: "rounded-tr-[0.75rem]"
    },
    {
      title: "DevOps & Cloud Ops",
      icon: <Globe size={22} />,
      desc: "Orchestrating automated deployment processes, cloud hosting, container operations, and version versioning.",
      focus: "Continuous integration & zero-downtime rollouts",
      skills: ["Docker Container", "Vercel Cloud", "GitHub Actions", "Git VSC", "AWS Deploy"],
      cornerStyle: "rounded-bl-[0.75rem]"
    },
    {
      title: "Core Programming",
      icon: <Codepen size={22} />,
      desc: "Solid grasp of computer science principles, typed code patterns, and modern JavaScript environments.",
      focus: "Type safety, algorithms & algorithmic efficiency",
      skills: ["TypeScript", "JavaScript (ES6)", "HTML5 Semantic", "CSS3 Custom Grid"],
      cornerStyle: "rounded-br-[0.75rem]"
    }
  ];

  return (
    <section id="skills" className="py-28 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-accent/10 border border-lime-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="text-[10px] font-mono text-lime-accent font-black uppercase tracking-widest">
              Section_02 // Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase">
            Technical <span className="text-lime-accent">Arsenal.</span>
          </h2>
        </motion.div>

        {/* Premium Bento Grid with Asymmetric Corners (inspired by screenshot geometries) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 md:p-10 bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 hover:border-lime-accent/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[300px] shadow-sm shadow-black/5 dark:shadow-none ${cat.cornerStyle} rounded-[2.5rem]`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-[1.25rem] bg-zinc-200 dark:bg-zinc-800 text-black dark:text-lime-accent flex items-center justify-center border border-black/5 dark:border-white/5 shadow-sm">
                    {cat.icon}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                    MODULE_{i + 1}
                  </span>
                </div>

                {/* Title and Desc */}
                <h3 className="text-2xl font-sans font-black text-black dark:text-white uppercase tracking-tight mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm font-sans font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              {/* Skills Tags Area & Core Metric */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl text-[10px] font-sans font-black uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10 flex items-center gap-1 hover:border-lime-accent/30 hover:text-lime-accent dark:hover:text-lime-accent transition-all"
                    >
                      <CheckCircle2 size={10} className="text-lime-accent" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Focus Line - styled like status bar */}
                <div className="border-t border-black/5 dark:border-white/5 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-widest">
                    Performance Target
                  </span>
                  <span className="text-[10px] font-sans font-bold text-black dark:text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
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
