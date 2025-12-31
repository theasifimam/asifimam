"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Zap,
  Cpu,
  Globe,
  Database,
  Server,
  Layout,
  Phone,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Hyper-Scale E-Commerce",
      category: "Full Stack / MERN",
      description:
        "Designed a high-throughput engine using MongoDB and Redis for caching. Reduced checkout latency by 65%.",
      metrics: ["0.4s Load", "10k+ SKU Support"],
      tech: ["React", "Node.js", "Redis", "MongoDB"],
      link: "#",
    },
    {
      title: "Enterprise SaaS Dashboard",
      category: "Frontend Architecture",
      description:
        "Complex data visualization suite for logistics tracking. Integrated WebSockets for real-time fleet updates.",
      metrics: ["Real-time Sync", "99.9% Uptime"],
      tech: ["Next.js", "Socket.io", "Express", "D3.js"],
      link: "#",
    },
    {
      title: "FinTech Transaction API",
      category: "Backend / Optimization",
      description:
        "Secure, high-concurrency API for micro-transactions. Implemented JWT-based auth and heavy rate-limiting.",
      metrics: ["200ms Response", "Bank-grade Security"],
      tech: ["Express", "Node.js", "MongoDB", "AWS"],
      link: "#",
    },
    {
      title: "Collaborative Workspace",
      category: "Real-time MERN",
      description:
        "A Trello-style productivity tool featuring multi-user editing and instant cloud synchronization.",
      metrics: ["Zero-Conflict sync", "Offline Support"],
      tech: ["React", "Zustand", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend Mastery",
      icon: <Layout className="w-5 h-5" />,
      skills: [
        "React 18",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Framer Motion",
      ],
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-5 h-5" />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "WebSockets",
        "Microservices",
      ],
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS (S3/EC2)",
        "CI/CD Pipelines",
      ],
    },
  ];

  // FIXED THEME OBJECT FOR CONSISTENCY
  const theme = {
    bg: isDark ? "bg-[#080808]" : "bg-zinc-50",
    text: isDark ? "text-zinc-100" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-500",
    card: isDark
      ? "bg-zinc-900/30 border-zinc-800"
      : "bg-white border-zinc-200 shadow-sm",
    cardInner: isDark ? "bg-zinc-950/40" : "bg-zinc-50",
    pill: isDark
      ? "bg-zinc-800 text-zinc-400 border-zinc-700"
      : "bg-zinc-100 text-zinc-600 border-zinc-200",
    nav: isDark
      ? "bg-[#080808]/80 border-zinc-800"
      : "bg-white/80 border-zinc-200",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500",
  };

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} selection:bg-emerald-500/30 font-sans transition-colors duration-500`}
    >
      {/* Background Interactive Layer */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${
            mousePos.y
          }px, ${
            isDark ? "rgba(16, 185, 129, 0.05)" : "rgba(16, 185, 129, 0.1)"
          }, transparent 70%)`,
        }}
      />

      {/* Header */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${theme.nav}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black tracking-tighter text-xl italic">
            <div className={`${theme.accentBg} p-1.5 rounded-lg`}>
              <Terminal className="w-5 h-5 text-black" />
            </div>
            ASIF_IMAM
          </div>
          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest">
            <a
              href="#skills"
              className="hover:text-emerald-500 transition-colors"
            >
              Stack
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-500 transition-colors"
            >
              Work
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 border rounded-xl transition-colors ${
                isDark
                  ? "border-zinc-800 hover:bg-zinc-800"
                  : "border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              <Zap
                className={`w-4 h-4 ${
                  isDark ? "fill-emerald-500 text-emerald-500" : "text-zinc-400"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div>
            <h2
              className={`${theme.accent} font-mono text-sm mb-4 tracking-[0.3em] uppercase underline underline-offset-8`}
            >
              MERN Stack Engineer
            </h2>
            <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10">
              CLEAN.
              <br />
              EASY.
              <br />
              FAST.
            </h1>
            <p
              className={`text-xl ${theme.textMuted} max-w-lg leading-relaxed`}
            >
              Specializing in scalable architecture and sub-second load times.
              Converting complex code into{" "}
              <span className={theme.text}>efficient digital products</span>.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className={`${theme.card} border-2 p-6 rounded-full flex items-center justify-between group cursor-default hover:border-emerald-500/50 transition-all`}
            >
              <span className="font-mono opacity-50 text-xs uppercase italic">
                Location
              </span>
              <span className="font-bold flex items-center gap-2">
                Delhi, India <Globe className="w-4 h-4 text-emerald-500" />
              </span>
            </div>
            <div
              className={`${theme.card} border-2 p-6 rounded-full flex items-center justify-between group cursor-default hover:border-emerald-500/50 transition-all`}
            >
              <span className="font-mono opacity-50 text-xs uppercase italic">
                Experience
              </span>
              <span className="font-bold">3.0 Years (MERN Specialist)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section
        id="skills"
        className={`py-24 px-6 border-y ${
          isDark
            ? "border-zinc-900 bg-zinc-950/50"
            : "border-zinc-200 bg-zinc-100/50"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className={`${theme.accent} font-mono text-xs uppercase tracking-widest`}
            >
              // TECHNICAL_ARSENAL
            </span>
            <h2 className="text-4xl font-black mt-2 italic">THE STACK</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, i) => (
              <div
                key={i}
                className={`${theme.card} border p-8 rounded-[2.5rem] hover:scale-[1.02] transition-all`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${
                    isDark ? "bg-emerald-500/10" : "bg-emerald-50"
                  } border ${
                    isDark ? "border-emerald-500/20" : "border-emerald-200"
                  } flex items-center justify-center ${theme.accent} mb-6`}
                >
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 italic">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-1.5 border ${theme.pill} text-xs rounded-full font-mono font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 underline decoration-emerald-500 decoration-4 italic">
              FEATURED WORK
            </h2>
            <p className={theme.textMuted}>
              High-concurrency performance and core web vitals focus.
            </p>
          </div>
          <div className="text-right">
            <div
              className={`text-4xl font-mono ${theme.accent} font-black tracking-tighter`}
            >
              04+
            </div>
            <div className="text-xs uppercase font-mono opacity-50">
              Deployed Projects
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${theme.card} border p-2 rounded-[3rem] group transition-all`}
            >
              <div
                className={`${theme.cardInner} rounded-[2.7rem] p-8 h-full flex flex-col`}
              >
                <div className="flex justify-between items-start mb-10">
                  <span
                    className={`text-[10px] font-black font-mono px-4 py-1.5 ${
                      isDark
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-emerald-50 text-emerald-600 border-emerald-100"
                    } rounded-full border uppercase tracking-widest`}
                  >
                    {p.category}
                  </span>
                  <div
                    className={`p-3 ${
                      isDark ? "bg-zinc-800" : "bg-white border border-zinc-200"
                    } rounded-full group-hover:bg-emerald-500 group-hover:text-black transition-all`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 italic tracking-tight">
                  {p.title}
                </h3>
                <p
                  className={`${theme.textMuted} mb-8 flex-grow leading-relaxed`}
                >
                  {p.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {p.metrics.map((m) => (
                    <div
                      key={m}
                      className={`p-4 ${
                        isDark
                          ? "bg-zinc-900 border-zinc-800"
                          : "bg-white border-zinc-200 shadow-sm"
                      } border rounded-3xl`}
                    >
                      <div className="text-[10px] font-mono opacity-40 uppercase font-bold tracking-tighter">
                        Performance KPI
                      </div>
                      <div className="text-sm font-black">{m}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-200/10">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-bold opacity-40 italic"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div
          className={`inline-block p-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-full mb-10`}
        >
          <div
            className={`${theme.bg} px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest`}
          >
            Open for high-impact contracts
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 italic uppercase">
          HAVE A BOTTLENECK? <br />
          <span className={theme.accent}>LET'S FIX IT.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:asifimam999@gmail.com"
            className={`${theme.accentBg} text-black px-12 py-5 font-black rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-lg`}
          >
            <Mail className="w-5 h-5" /> HIRE ME
          </a>
          <a
            href="tel:+919911471995"
            className={`px-12 py-5 border-2 ${
              isDark
                ? "border-zinc-800 hover:bg-zinc-800"
                : "border-zinc-200 hover:bg-zinc-100"
            } font-black rounded-full flex items-center gap-3 transition-all`}
          >
            <Phone className="w-5 h-5" /> CALL
          </a>
        </div>
      </section>

      <footer
        className={`py-12 px-6 border-t ${
          isDark ? "border-zinc-900" : "border-zinc-200"
        } opacity-60`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-mono font-bold">ASIF_IMAM // 2024</div>
          <div className="flex gap-8">
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-emerald-500" />
            <Github className="w-5 h-5 cursor-pointer hover:text-emerald-500" />
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.2em]">
            Efficiency is mandatory.
          </div>
        </div>
      </footer>
    </div>
  );
}
