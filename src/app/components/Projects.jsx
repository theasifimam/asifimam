"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

export default function Projects({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mazlis",
      category: "Full Stack / MERN",
      description: "A high-performance social platform with real-time synchronization and robust security architecture.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB"],
      link: "https://mazlis.com",
      images: ["/assets/mazlis.png", "/assets/mazlis2.png", "/assets/mazlis3.png"],
    },
    {
      title: "SabkiMandi",
      category: "Frontend Architecture",
      description: "Real-time data dashboard for supply chain management, featuring advanced visualization and bulk processing.",
      tech: ["React.js", "Chart.js", "Express", "SQL"],
      link: "https://sabkimandi.com/",
      images: ["/assets/skm.png", "/assets/skm2.png", "/assets/skm3.png"],
    },
    {
      title: "HRMS Platform",
      category: "Enterprise Solution",
      description: "Modular Human Resource Management System with custom API integrations and data-heavy workflows.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      link: "https://hrms.volansinfo.com/",
      images: ["/assets/hrms.png", "/assets/hrms2.png", "/assets/hrms3.png"],
    },
    {
      title: "Recordified",
      category: "Healthcare Architecture",
      description: "Healthcare management system focused on appointment scheduling and encrypted patient records.",
      tech: ["React", "Redux", "SQL", "Cloud"],
      link: "https://recordified.com/",
      images: ["/assets/recordified.png", "/assets/recordified2.png"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">Case Studies</span>
        </div>
        <h2 className={`text-4xl md:text-6xl font-black tracking-tight ${isDark ? "text-white" : "text-zinc-900"} mb-16`}>
          Selected <span className="text-emerald-500">Work.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className={`group relative rounded-[2rem] overflow-hidden ${isDark ? "bg-zinc-900/40 border border-white/5" : "bg-white border border-black/5 shadow-xl"} cursor-pointer hover:-translate-y-2 transition-all duration-500`}
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
               {/* Creative Image Reveal */}
               <div className="p-4 pb-0">
                 <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden relative">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 blur-[1px] group-hover:blur-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Floating Tech Pill */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                       {project.category}
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <ArrowUpRight size={20} />
                    </div>
                 </div>
               </div>

               {/* Content */}
               <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-black mb-3 ${isDark ? 'text-white' : 'text-black'} group-hover:text-emerald-500 transition-colors`}>{project.title}</h3>
                    <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'} line-clamp-2 mb-6`}>{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${isDark ? "bg-white/5 text-zinc-300 border border-white/5" : "bg-black/5 text-zinc-600 border border-black/5"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} />
    </section>
  );
}

