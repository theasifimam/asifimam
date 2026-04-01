import React from "react";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * Minimal Skills / Stack Section
 * Features a refined bento grid with subtle mesh gradients and premium typography.
 */
export default function Skills({ isDark }) {
  const categories = [
    {
      title: "Frontend Architecture",
      desc: "Immersive UI/UX & State",
      icon: <Layers size={22} />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "React Query", "Redux"],
      size: "md:col-span-2",
      gradient: "from-emerald-500/10 to-blue-500/10",
    },
    {
      title: "DevOps",
      desc: "Cloud & CI/CD",
      icon: <Globe size={22} />,
      skills: ["Docker", "Vercel", "Github Actions", "Git"],
      size: "md:col-span-1",
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      title: "Core Stack",
      desc: "Languages & Frameworks",
      icon: <Code2 size={22} />,
      skills: ["TypeScript", "JavaScript", "Node.js", "Next.js"],
      size: "md:col-span-1",
      gradient: "from-cyan-500/10 to-emerald-500/10",
    },
    {
      title: "Backend Systems",
      desc: "Scalable Infrastructure",
      icon: <Cpu size={22} />,
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "Auth"],
      size: "md:col-span-2",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
  ];

  const colors = {
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/5" : "border-black/5",
    cardBg: isDark ? "bg-zinc-900/40" : "bg-zinc-50",
    accent: "text-emerald-500",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Refined Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6 bg-emerald-500/50" />
          <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
            Section_02
          </span>
          <div className="h-px w-6 bg-emerald-500/50" />
        </div>
        <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${colors.textPrimary}`}>
          Technological <span className="text-emerald-500 italic">Stack.</span>
        </h2>
      </motion.div>

      {/* Reimagined Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-[3rem] border transition-all duration-700 p-10 flex flex-col justify-between h-full ${cat.size} ${colors.border} ${colors.cardBg} hover:border-emerald-500/40`}
          >
            {/* Subtle Gradient Backdrop */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br ${cat.gradient} blur-3xl`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-2xl ${isDark ? "bg-white/5" : "bg-black/5"} group-hover:scale-110 transition-transform duration-500 ${colors.accent}`}>
                  {cat.icon}
                </div>
                <ArrowUpRight size={20} className="text-zinc-700/30 group-hover:text-emerald-500 transition-colors" />
              </div>

              <div>
                <p className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-2 ${colors.accent}`}>
                  {cat.desc}
                </p>
                <h3 className={`text-3xl font-black tracking-tight mb-8 ${colors.textPrimary}`}>
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-bold px-4 py-2 rounded-full border transition-all duration-300 ${
                        isDark 
                          ? "bg-white/5 border-white/5 text-zinc-400 group-hover:border-emerald-500/30 group-hover:text-white" 
                          : "bg-black/5 border-black/5 text-zinc-500 group-hover:border-emerald-500/30 group-hover:text-black"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

