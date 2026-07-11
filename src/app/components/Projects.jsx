import React, { useState } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

export default function Projects({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "RajulEye E-Commerce",
      category: "Full Stack",
      subCategory: "Next.js Storefront",
      description: "Independently built and deployed a production-ready full stack eCommerce platform on a DigitalOcean VPS. Features secure authentication, Twilio OTP verification, Razorpay payment gateway integration, and optimized APIs handling 100,000+ records.",
      tech: ["Next.js", "Express.js", "MongoDB", "Mongoose", "Razorpay", "Twilio"],
      link: "https://rajuleye.com",
      github: "https://github.com/theasifimam",
      images: ["/rajuleye-preview.png"],
      metrics: ["Integrated Razorpay & Twilio OTP", "Handles 100,000+ records seamlessly", "20% faster API load times"]
    },
    {
      title: "RajulEye Admin",
      category: "Frontend",
      subCategory: "React Dashboard",
      description: "Developed a scalable admin panel for product, order, and business management. Features secure authentication, analytics-ready architecture, and real-time operational workflows to manage store catalog and customer transactions.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Chart.js", "JWT"],
      link: "https://admin.rajuleye.com",
      github: "https://github.com/theasifimam",
      images: ["/asifimam2.jpg"],
      metrics: ["Secure administrative session gates", "Real-time order tracking charts", "Simplified catalog management UI"]
    },
    {
      title: "Mazlis Messenger & App",
      category: "Full Stack",
      subCategory: "MERN / WebSockets",
      description: "A real-time communication platform and mobile app (React Native Expo). Powered by Socket.io, RTK Query, and WebRTC to deliver sub-second messaging, interactive features, and secure end-to-end client syncing.",
      tech: ["React Native", "Next.js", "Node.js", "Socket.io", "WebRTC", "RTK Query"],
      link: "https://ai.mazlis.com",
      github: "https://github.com/theasifimam",
      images: ["/asifimam.jpg"],
      metrics: ["Sub-50ms message latency", "Cross-platform mobile client (Expo)", "WebRTC direct peer connection"]
    },
    {
      title: "AI Educational Platform",
      category: "Full Stack",
      subCategory: "Testing Engine",
      description: "Developed an online test platform featuring a scalable, API-driven architecture. Designed to handle high concurrent user loads with robust database schemas, secure testing rules, and high availability.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/theasifimam",
      github: "https://github.com/theasifimam",
      images: ["/asifimam3.jpg"],
      metrics: ["99.8% platform uptime maintained", "Scalable concurrent exam engine", "Optimized API-driven score analytics"]
    },
    {
      title: "HRMS Enterprise",
      category: "Full Stack",
      subCategory: "Internal CRM",
      description: "Implemented authentication, Redux Toolkit state stores, form validation, and REST APIs for employee management workflows. Focuses on strict access control and encrypted log trails.",
      tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/theasifimam",
      github: "https://github.com/theasifimam",
      images: ["/asifimam.jpg"],
      metrics: ["Secure JWT token authentication", "Centralized Redux employee store", "Validated multi-step form workflows"]
    }
  ];

  const filters = ["All", "Full Stack", "Frontend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-accent/10 border border-lime-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
            <span className="text-[10px] font-mono text-lime-accent font-black uppercase tracking-widest">
              Section_04 // Portfolios
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase leading-tight">
            Selected <span className="text-lime-accent">Work.</span>
          </h2>
        </div>

        <div className="flex p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shrink-0 self-start md:self-auto">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-1.5 rounded-full font-sans font-black text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-lime-accent text-black"
                    : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Photo Area */}
              <div className="w-full h-56 sm:h-72 lg:h-80 rounded-[1.75rem] md:rounded-[2rem] overflow-hidden relative bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-[1.02] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 dark:bg-zinc-950/80 backdrop-blur-md border border-white/10 dark:border-white/5 text-white text-[8px] sm:text-[9px] font-mono font-black uppercase tracking-wider">
                  <FolderGit2 size={9} className="text-lime-accent" />
                  {project.subCategory}
                </div>

                {/* Link icon reveal */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-lime-accent text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg">
                  <ArrowUpRight size={16} className="stroke-[2.5]" />
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-5 text-left flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-mono font-black text-lime-accent uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                    <span className="text-[9px] font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                      {project.subCategory}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-black tracking-tight text-black dark:text-white uppercase mb-2 group-hover:text-lime-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack items - clean minimal style */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-mono font-bold uppercase bg-zinc-150 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800/60"
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
