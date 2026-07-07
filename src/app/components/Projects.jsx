import React, { useState } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

export default function Projects({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Mazlis Messenger",
      category: "Full Stack",
      subCategory: "MERN / WebSockets",
      description: "A secure, real-time communication platform built for high concurrency. Features sub-second message delivery, custom notification channels, and end-to-end socket syncing.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      link: "https://ai.mazlis.com",
      github: "https://github.com/theasifimam",
      images: ["/asifimam.jpg"], // Replaced with existing assets for local preview fallback
      metrics: ["Sub-50ms message latency", "End-to-end WebSocket security", "Dynamic status badge syncing"]
    },
    {
      title: "SabkiMandi Platform",
      category: "Frontend",
      subCategory: "React Dashboard",
      description: "Real-time supply chain and bulk pricing data grid. Enables quick inventory audits, aggregate statistics, and clean charts for local vendors.",
      tech: ["React.js", "Chart.js", "Tailwind CSS", "REST APIs"],
      link: "https://sabkimandi.com/",
      github: "https://github.com/theasifimam",
      images: ["/asifimam2.jpg"],
      metrics: ["Bulk operation speedup of 60%", "Real-time pricing data updates", "SEO optimization scoring 98+"]
    },
    {
      title: "HRMS Enterprise",
      category: "Full Stack",
      subCategory: "Internal CRM",
      description: "Enterprise human resource portal designed with strict access control, document encrypting, and large-scale data logs.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
      link: "https://hrms.volansinfo.com/",
      github: "https://github.com/theasifimam",
      images: ["/asifimam3.jpg"],
      metrics: ["99.9% availability deployment", "Role-based encryption hierarchy", "Audited security log trails"]
    },
    {
      title: "Recordified Health",
      category: "Frontend",
      subCategory: "Medical Portal",
      description: "Client portal focusing on appointment schedules, digital records, and accessible layout flows following Web Content Guidelines.",
      tech: ["React.js", "Redux", "Tailwind CSS", "Axios"],
      link: "https://recordified.com/",
      github: "https://github.com/theasifimam",
      images: ["/asifimam.jpg"],
      metrics: ["Strict HIPAA access compliance", "Responsive design down to 320px screens", "Lightweight bundle loading under 1.2s"]
    }
  ];

  const filters = ["All", "Full Stack", "Frontend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-accent/10 border border-lime-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="text-[10px] font-mono text-lime-accent font-black uppercase tracking-widest">
              Section_04 // Portfolios
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase">
            Selected <span className="text-lime-accent">Work.</span>
          </h2>
        </div>

        {/* Filter Tabs (Bottom nav tab style) */}
        <div className="flex p-1.5 rounded-full bg-black border border-white/10 shrink-0 self-start md:self-auto">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2 rounded-full font-sans font-black text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-lime-accent text-black shadow-md shadow-lime-accent/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-950 border border-black/5 dark:border-white/10 overflow-hidden cursor-pointer shadow-lg hover:border-lime-accent/30 hover:shadow-lime-accent/5 dark:hover:shadow-[0_15px_40px_rgba(210,255,58,0.03)] transition-all duration-500"
            >
              {/* Photo Area */}
              <div className="p-3">
                <div className="w-full h-56 sm:h-72 rounded-[2rem] overflow-hidden relative bg-zinc-200 dark:bg-zinc-900">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 dark:bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-white text-[9px] font-mono font-black uppercase tracking-wider">
                    <FolderGit2 size={10} className="text-lime-accent" />
                    {project.subCategory}
                  </div>

                  {/* Icon link bubble reveal */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-lime-accent text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-md">
                    <ArrowUpRight size={18} className="stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tight text-black dark:text-white uppercase mb-2 group-hover:text-lime-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-sans leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl text-[9px] font-sans font-black uppercase tracking-wider bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-black/5 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
}
