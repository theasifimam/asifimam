import React from "react";
import { Layers, Globe, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills({ isDark }) {
  const categories = [
    {
      title: "Frontend Architecture",
      desc: "Immersive UI/UX & State",
      icon: <Layers size={40} />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Redux"],
    },
    {
      title: "Backend Systems",
      desc: "Scalable Infrastructure",
      icon: <Cpu size={40} />,
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "Auth"],
    },
    {
      title: "Core Stack",
      desc: "Languages & Frameworks",
      icon: <Code2 size={40} />,
      skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "DevOps",
      desc: "Cloud & CI/CD",
      icon: <Globe size={40} />,
      skills: ["Docker", "Vercel", "Github Actions", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">Stack</span>
        </div>
        <h2 className={`text-4xl md:text-6xl font-black tracking-tight ${isDark ? "text-white" : "text-zinc-900"} mb-16`}>
          Digital <span className="text-emerald-500">Arsenal.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-8 md:p-10 rounded-[2rem] overflow-hidden ${isDark ? "bg-zinc-900/40 border-white/5" : "bg-white border-black/5 shadow-xl"} border`}
          >
             {/* Neon Top Border Reveal */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Large Watermark Icon */}
             <div className={`absolute right-4 bottom-4 md:right-8 md:bottom-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700 ${isDark ? "text-white" : "text-black"}`}>
               {cat.icon}
             </div>
             
             <div className="relative z-10">
                <span className="text-[10px] font-mono text-emerald-500 tracking-[0.2em] uppercase font-bold mb-3 block">{cat.desc}</span>
                <h3 className={`text-2xl md:text-3xl font-black mb-8 ${isDark ? "text-white" : "text-zinc-900"}`}>{cat.title}</h3>

                <div className="flex flex-wrap gap-2 md:gap-3">
                   {cat.skills.map((skill, idx) => (
                     <span 
                       key={idx} 
                       className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                         isDark 
                          ? "bg-white/5 border-white/10 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50" 
                          : "bg-black/5 border-black/10 text-zinc-600 hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/30"
                       }`}
                     >
                       {skill}
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

