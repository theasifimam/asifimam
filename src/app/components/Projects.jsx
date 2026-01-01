"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export default function Projects({ isDark, theme }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hyper-Realistic Social Media App",
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
      link: "#",
      images: [
        "/assets/mazlis.png",
        "/assets/mazlis2.png",
        "/assets/mazlis3.png",
        "/assets/mazlis4.png",
        "/assets/mazlis5.png",
      ],
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
      images: ["/assets/hrms.png"],
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
      link: "#",
      images: [
        "/assets/hrms.png",
        "/assets/hrms2.png",
        "/assets/hrms3.png",
        "/assets/hrms4.png",
      ],
    },
    {
      title: "Recordified Platform",
      category: "Real-time MERN",
      description:
        "A kind of Hospital management system that include features like online consultation, appointment scheduling, patient management, billing, and inventory management. Implemented a robust data synchronization system.",
      metrics: ["Zero-Conflict sync", "Offline Support"],
      tech: ["React", "Redux", "Node.js", "SQL"],
      link: "#",
      images: [
        "/assets/recordified.png",
        "/assets/recordified2.png",
        "/assets/recordified.png",
      ],
    },
  ];
  return (
    <section
      id="projects"
      className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 underline decoration-emerald-500 decoration-4 italic">
            FEATURED WORK
          </h2>
          <p className={`${theme.textMuted} text-sm md:text-base`}>
            High-concurrency performance and core web vitals focus.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div
            className={`text-3xl md:text-4xl font-mono ${theme.accent} font-black tracking-tighter`}
          >
            04+
          </div>
          <div className="text-[10px] md:text-xs uppercase font-mono opacity-50 tracking-widest">
            Deployed Projects
          </div>
        </div>
      </div>

      {/* Responsive Grid: 1 column on mobile, 2 on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`${theme.card} border p-1.5 md:p-2 rounded-4xl md:rounded-[3rem] group transition-all hover:-translate-y-1`}
            onClick={() => setSelectedProject(p)} // OPEN MODAL
          >
            <div
              className={`${theme.cardInner} rounded-[1.8rem] md:rounded-[2.7rem] p-6 md:p-8 h-full flex flex-col`}
            >
              <div className="flex justify-between items-start mb-6 md:mb-10">
                <span
                  className={`text-[9px] md:text-[10px] font-black font-mono px-3 py-1 md:px-4 md:py-1.5 ${
                    isDark
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100"
                  } rounded-full border uppercase tracking-widest`}
                >
                  {p.category}
                </span>
                <div
                  className={`p-2.5 md:p-3 ${
                    isDark ? "bg-zinc-800" : "bg-white border border-zinc-200"
                  } rounded-full group-hover:bg-emerald-500 group-hover:text-black transition-all`}
                >
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 italic tracking-tight">
                {p.title}
              </h3>

              <p
                className={`${theme.textMuted} text-sm md:text-base mb-6 md:mb-8 grow leading-relaxed`}
              >
                {p.description}
              </p>

              {/* Internal KPI Grid: Stays 2 columns unless screen is extremely narrow */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-2">
                {p.metrics.map((m) => (
                  <div
                    key={m}
                    className={`p-3 md:p-4 ${
                      isDark
                        ? "bg-zinc-900 border-zinc-800"
                        : "bg-white border-zinc-200 shadow-sm"
                    } border rounded-2xl md:rounded-3xl`}
                  >
                    <div className="text-[8px] md:text-[10px] font-mono opacity-40 uppercase font-bold tracking-tighter">
                      KPI
                    </div>
                    <div className="text-xs md:text-sm font-black truncate">
                      {m}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
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
