"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/ExperienceSection";
import Footer from "./components/Footer";
import About from "./components/About";
// Import Footer and Skills similarly...

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const theme = {
    bg: isDark ? "bg-[#080808]" : "bg-zinc-50",
    text: isDark ? "text-zinc-100" : "text-zinc-900",
    textMuted: "text-zinc-500",
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

  const projectsData = [
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

  // const skillGroups = [
  //   {
  //     title: "Frontend Mastery",
  //     icon: <Layout className="w-5 h-5" />,
  //     skills: [
  //       "React 18",
  //       "Next.js",
  //       "TypeScript",
  //       "Tailwind CSS",
  //       "Redux Toolkit",
  //       "Framer Motion",
  //     ],
  //   },
  //   {
  //     title: "Backend Engineering",
  //     icon: <Server className="w-5 h-5" />,
  //     skills: [
  //       "Node.js",
  //       "Express.js",
  //       "RESTful APIs",
  //       "GraphQL",
  //       "WebSockets",
  //       "Microservices",
  //     ],
  //   },
  //   {
  //     title: "Database & DevOps",
  //     icon: <Database className="w-5 h-5" />,
  //     skills: [
  //       "MongoDB",
  //       "PostgreSQL",
  //       "Redis",
  //       "Docker",
  //       "AWS (S3/EC2)",
  //       "CI/CD Pipelines",
  //     ],
  //   },
  // ];

  // FIXED THEME OBJECT FOR CONSISTENCY
  // const theme = {
  //   bg: isDark ? "bg-[#080808]" : "bg-zinc-50",
  //   text: isDark ? "text-zinc-100" : "text-zinc-900",
  //   textMuted: isDark ? "text-zinc-500" : "text-zinc-500",
  //   card: isDark
  //     ? "bg-zinc-900/30 border-zinc-800"
  //     : "bg-white border-zinc-200 shadow-sm",
  //   cardInner: isDark ? "bg-zinc-950/40" : "bg-zinc-50",
  //   pill: isDark
  //     ? "bg-zinc-800 text-zinc-400 border-zinc-700"
  //     : "bg-zinc-100 text-zinc-600 border-zinc-200",
  //   nav: isDark
  //     ? "bg-[#080808]/80 border-zinc-800"
  //     : "bg-white/80 border-zinc-200",
  //   accent: "text-emerald-500",
  //   accentBg: "bg-emerald-500",
  // };

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500`}
    >
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

      <Header isDark={isDark} setIsDark={setIsDark} theme={theme} />
      <Hero theme={theme} isDark={isDark} />
      <About theme={theme} isDark={isDark} />
      <Skills theme={theme} isDark={isDark} />
      <Experience theme={theme} isDark={isDark} />
      <Projects projects={projectsData} isDark={isDark} theme={theme} />
      <Contact isDark={isDark} theme={theme} />
      <Footer isDark={isDark} theme={theme} />
    </div>
  );
}
