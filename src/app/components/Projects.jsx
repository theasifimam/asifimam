"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

/**
 * Minimal Projects Section
 * Clean bento grid featuring high-impact engineering work.
 */
export default function Projects({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mazlis",
      category: "Full Stack / MERN",
      description: "A high-performance social platform with real-time synchronization and robust security architecture.",
      metrics: ["User Auth", "Real-time Chat", "99.9% Uptime"],
      tech: ["Next.js", "Node.js", "Express", "MongoDB"],
      link: "https://mazlis.com",
      images: ["/assets/mazlis.png", "/assets/mazlis2.png", "/assets/mazlis3.png"],
      github: "https://github.com/theasifimam/next-mazlis",
    },
    {
      title: "SabkiMandi",
      category: "Frontend Architecture",
      description: "Real-time data dashboard for supply chain management, featuring advanced visualization and bulk processing.",
      metrics: ["Real-time Sync", "Bulk Processing", "Chart.js"],
      tech: ["React.js", "Chart.js", "Express", "SQL"],
      link: "https://sabkimandi.com/",
      images: ["/assets/skm.png", "/assets/skm2.png", "/assets/skm3.png"],
      github: "https://github.com/volansinfo/sabKiMandiAdmin",
    },
    {
      title: "HRMS Platform",
      category: "Enterprise Solution",
      description: "Modular Human Resource Management System with custom API integrations and data-heavy workflows.",
      metrics: ["AWS Integrated", "CSV support", "Modular UI"],
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      link: "https://hrms.volansinfo.com/",
      images: ["/assets/hrms.png", "/assets/hrms2.png", "/assets/hrms3.png"],
      github: "https://github.com/volansinfo/hrmsfrontend",
    },
    {
      title: "Recordified",
      category: "Healthcare Architecture",
      description: "Healthcare management system focused on appointment scheduling and encrypted patient records.",
      metrics: ["Encrypted Data", "Zero-Conflict Sync"],
      tech: ["React", "Redux", "SQL", "Cloud"],
      link: "https://recordified.com/",
      images: ["/assets/recordified.png", "/assets/recordified2.png"],
      github: "https://github.com/volansinfo/recordifyWeb",
    },
  ];

  const colors = {
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-500",
    border: isDark ? "border-white/5" : "border-black/5",
    cardBg: isDark ? "bg-zinc-900/40" : "bg-zinc-50",
    accent: "text-emerald-500",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6 bg-emerald-500/50" />
          <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
            Section_04
          </span>
          <div className="h-px w-6 bg-emerald-500/50" />
        </div>
        <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${colors.textPrimary}`}>
          Selected <span className="text-emerald-500 italic">Work.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`group relative rounded-[3rem] border ${colors.border} ${colors.cardBg} overflow-hidden hover:border-emerald-500/30 transition-all duration-700 cursor-pointer`}
            onClick={() => setSelectedProject(project)}
          >
            {/* Visual Preview Area */}
            <div className={`aspect-video overflow-hidden border-b ${colors.border} bg-zinc-900 relative`}>
               <img 
                 src={project.images[0]} 
                 alt={project.title} 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="absolute top-8 right-8 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 <ArrowUpRight size={20} />
               </div>
            </div>

            {/* Content Area */}
            <div className="p-10">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${colors.accent}`}>
                  {project.category}
                </span>
                <div className="flex gap-2">
                   {project.tech.map((t, idx) => (
                     <span key={idx} className={`text-[8px] font-bold uppercase tracking-widest ${colors.textSecondary} opacity-40 group-hover:opacity-100 transition-opacity`}>
                       {t}
                     </span>
                   ))}
                </div>
              </div>

              <h3 className={`text-3xl font-black tracking-tight mb-4 ${colors.textPrimary} group-hover:text-emerald-500 transition-colors`}>
                {project.title}
              </h3>
              
              <p className={`text-base leading-relaxed ${colors.textSecondary} mb-8 line-clamp-2`}>
                {project.description}
              </p>

              <div className="flex gap-4">
                 {project.metrics.map((m, idx) => (
                   <span key={idx} className={`text-[9px] font-mono font-bold uppercase tracking-wider ${colors.textSecondary} opacity-60`}>
                     • {m}
                   </span>
                 ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
}

