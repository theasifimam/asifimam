import React from "react";
import { motion } from "framer-motion";
import { Zap, History, GraduationCap, Heart, ArrowUpRight } from "lucide-react";

export default function About({ isDark = true }) {
  const infoBlocks = [
    {
      title: "Philosophy",
      icon: <Zap size={24} />,
      content: "Engineering digital systems where speed is the primary feature. Every line of code is audited for performance.",
      cols: "md:col-span-2",
    },
    {
      title: "Architecture",
      icon: <History size={24} />,
      content: "Specializing in modular React architectures and scalable backend distributed services.",
      cols: "md:col-span-1",
    },
    {
      title: "Education",
      icon: <GraduationCap size={24} />,
      content: "B.Tech in CS from GITAM. Focused on Computer Science fundamentals & UX.",
      cols: "md:col-span-1",
    },
    {
      title: "Human Element",
      icon: <Heart size={24} />,
      content: "Boulderer and photographer. Exploring the intersection of logic and creativity.",
      cols: "md:col-span-2",
    },
  ];

  return (
    <section id="about" className={`relative py-24 overflow-hidden transition-colors duration-700 ${isDark ? "bg-[#050505]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">About</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight ${isDark ? "text-white" : "text-zinc-900"} mb-16`}>
            Thinking in <span className="text-emerald-500">Systems.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`lg:col-span-4 rounded-[2rem] p-2 relative group overflow-hidden border ${isDark ? "bg-zinc-900/40 border-white/5" : "bg-white border-black/5 shadow-xl"}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity z-20">
               <ArrowUpRight size={32} className="text-white" />
            </div>
            <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden relative">
              <img 
                src="/asifimam.jpg" 
                alt="Asif Imam" 
                className="w-full h-full object-cover scale-100 group-hover:scale-105 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-emerald-400 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Software Engineer</p>
                 <p className="text-white font-bold text-xl leading-tight">Asif Imam</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <div className={`p-8 md:p-10 rounded-[2rem] w-full border ${isDark ? "bg-zinc-900/40 border-white/5" : "bg-white border-black/5 shadow-xl"}`}>
                  <h3 className={`text-xl md:text-2xl font-medium leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-600"}`}>
                    I believe that software should be invisible yet powerful. My approach combines rigorous engineering principles with a deep appreciation for minimalist aesthetics.
                  </h3>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
              {infoBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative p-8 rounded-[2rem] group overflow-hidden border ${isDark ? "bg-zinc-900/40 border-white/5" : "bg-white border-black/5 shadow-xl"} ${block.cols}`}
                >
                  <div className="absolute -inset-px bg-gradient-to-b from-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`mb-6 p-4 rounded-2xl inline-flex ${isDark ? "bg-white/5 text-emerald-500" : "bg-black/5 text-emerald-600"} group-hover:scale-110 transition-transform duration-500`}>
                    {block.icon}
                  </div>
                  
                  <h4 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-zinc-900"}`}>
                    {block.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                    {block.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

