"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"; // Added
import { ProjectModal } from "./ProjectModal";

export default function Projects({ isDark, theme }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mazlis - Social Media App",
      category: "Full Stack / MERN",
      description:
        "Built a social media app using React.js, Node.js, Express.js, MongoDB, and Mongoose. Features includes user authentication, post creation, and comment functionality. Implemented a robust data synchronization system.",
      metrics: [
        "User Authentication",
        "Posts, Comments, Replies",
        "99.9% Uptime",
        "Chat System",
      ],
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
      link: "https://mazlis.com",
      images: [
        "/assets/mazlis.png",
        "/assets/mazlis2.png",
        "/assets/mazlis3.png",
        "/assets/mazlis4.png",
        "/assets/mazlis5.png",
      ],
      github: "https://github.com/theasifimam/next-mazlis",
    },
    {
      title: "SabkiMandi Dashboard",
      category: "Frontend Architecture",
      description:
        "Built a real-time dashboard using React.js and Chart.js. Implemented a robust data synchronization system. Implemented a bulk product update, add, delete and get using CSV or Excel files.",
      metrics: [
        "Real-time Sync",
        "99.9% Uptime",
        "CSV/Excel Support",
        "API Integration",
      ],
      tech: ["React.js", "Chart.js", "Express", "Node.js", "SQL"],
      link: "https://sabkimandi.com/",
      images: ["/assets/skm.png", "/assets/skm2.png", "/assets/skm3.png"],
      github: "https://github.com/volansinfo/sabKiMandiAdmin.git",
    },
    {
      title: "HRMS Platform",
      category: "Frontend / API Integration",
      description:
        "Built a HRMS platform using React.js and Node.js. Implemented a bulk user update, add, delete and get using CSV or Excel files. Implemented a robust data synchronization system.",
      metrics: [
        "200ms Response",
        "99.9% Uptime",
        "CSV/Excel Support",
        "API Integration",
      ],
      tech: ["Express", "Node.js", "MongoDB", "AWS"],
      link: "https://hrms.volansinfo.com/",
      images: [
        "/assets/hrms.png",
        "/assets/hrms2.png",
        "/assets/hrms3.png",
        "/assets/hrms4.png",
      ],
      github: "https://github.com/volansinfo/hrmsfrontend.git",
    },
    {
      title: "Recordified Platform",
      category: "Real-time MERN",
      description:
        "A kind of Hospital management system that include features like online consultation, appointment scheduling, patient management, billing, and inventory management. Implemented a robust data synchronization system.",
      metrics: ["Zero-Conflict sync", "Offline Support"],
      tech: ["React", "Redux", "Node.js", "SQL"],
      link: "https://recordified.com/",
      images: [
        "/assets/recordified.png",
        "/assets/recordified2.png",
        "/assets/recordified.png",
      ],
      github: "https://github.com/volansinfo/recordifyWeb.git",
    },
  ];
  // Container variants to stagger the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card variants for entry
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "slick" feel
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto"
    >
      {/* Header Section with Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6"
      >
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 underline decoration-emerald-500 decoration-4 italic">
            FEATURED WORK
          </h2>
          <p className={`${theme.textMuted} text-sm md:text-base`}>
            High-concurrency performance and core web vitals focus.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className={`text-3xl md:text-4xl font-mono ${theme.accent} font-black tracking-tighter`}
          >
            04+
          </motion.div>
          <div className="text-[10px] md:text-xs uppercase font-mono opacity-50 tracking-widest">
            Deployed Projects
          </div>
        </div>
      </motion.div>

      {/* Grid with Staggered Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -8 }} // Enhanced hover lift
            whileTap={{ scale: 0.98 }}
            className={`${theme.card} border p-1.5 md:p-2 rounded-4xl md:rounded-[3rem] group cursor-pointer transition-all`}
            onClick={() => setSelectedProject(p)}
          >
            <div
              className={`${theme.cardInner} rounded-[1.8rem] md:rounded-[2.7rem] p-6 md:p-8 h-full flex flex-col relative overflow-hidden`}
            >
              {/* Internal Hover Glow */}
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 md:mb-10 relative z-10">
                <span
                  className={`text-[9px] md:text-[10px] font-black font-mono px-3 py-1 md:px-4 md:py-1.5 ${
                    isDark
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100"
                  } rounded-full border uppercase tracking-widest`}
                >
                  {p.category}
                </span>

                {/* Restore and animate the Arrow button */}
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className={`p-2.5 md:p-3 ${
                    isDark ? "bg-zinc-800" : "bg-white border border-zinc-200"
                  } rounded-full group-hover:bg-emerald-500 group-hover:text-black transition-all`}
                >
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 italic tracking-tight relative z-10">
                {p.title}
              </h3>

              <p
                className={`${theme.textMuted} text-sm md:text-base mb-6 md:mb-8 grow leading-relaxed relative z-10`}
              >
                {p.description}
              </p>

              {/* KPI Grid with individual pop-in */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-2 relative z-10">
                {p.metrics.map((m, idx) => (
                  <motion.div
                    key={m}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className={`py-2 px-4 md:px-6 md:py-3 ${
                      isDark
                        ? "bg-zinc-900 border-zinc-800"
                        : "bg-white border-zinc-200 shadow-sm"
                    } border rounded-2xl md:rounded-full group-hover:border-emerald-500/30 transition-colors`}
                  >
                    <div className="text-[8px] md:text-[10px] font-mono opacity-40 uppercase font-bold tracking-tighter">
                      KPI
                    </div>
                    <div className="text-xs md:text-sm font-black truncate">
                      {m}
                    </div>
                  </motion.div>
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
        theme={theme}
      />
    </section>
  );
}
