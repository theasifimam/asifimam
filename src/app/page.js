"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ArrowRight,
  Menu,
  X,
  Zap,
  Layers,
  Palette,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Built a scalable e-commerce solution with Next.js, Redux Toolkit, and Stripe integration. Features include real-time inventory, cart persistence, and optimized checkout flow.",
      tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Developed a real-time analytics dashboard using React and Chart.js with custom hooks for data fetching and state management using Zustand. Features include interactive charts, filters, and responsive design.",
      tech: ["React.js", "Zustand", "Chart.js", "REST API", "Tailwind CSS"],
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "School Management App",
      description:
        "Created a school management app using Nextjs and zustand for state management, nodejs for backend and mongodb for database. Features include student enrollment, attendance tracking, and grade management.",
      tech: ["React.js", "Context API", "React DnD", "LocalStorage"],
      color: "from-orange-600 to-red-600",
    },
  ];

  const skills = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "JavaScript", level: 93, icon: "📜" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Redux/State", level: 88, icon: "🔄" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "Performance", level: 87, icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"
          style={{ transform: `translate(-25%, ${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"
          style={{ transform: `translate(25%, ${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500 opacity-20 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950 bg-opacity-70 backdrop-blur-xl border-b border-slate-800 border-opacity-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Asif Imam</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 bg-slate-900 bg-opacity-50 rounded-full p-1.5 border border-slate-800">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeSection === item.toLowerCase()
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-2xl bg-slate-900 border border-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 bg-opacity-95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-6 py-6 space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 rounded-2xl transition-all ${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 from-opacity-10 to-purple-500 to-opacity-10 border border-blue-500 border-opacity-20 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-slate-300">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="block text-slate-400 text-2xl mb-2">
                  Hi, I am a
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Frontend
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Crafting pixel-perfect, performant web experiences with
                <span className="text-blue-400 font-semibold"> React</span>,
                <span className="text-purple-400 font-semibold"> Next.js</span>,
                and modern JavaScript
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-blue-500 hover:shadow-opacity-50 transition-all flex items-center gap-2 font-medium">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-slate-700 rounded-full hover:border-blue-500 hover:bg-blue-500 hover:bg-opacity-10 transition-all font-medium">
                  Download CV
                </button>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">3+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
              </div>

              <div className="bg-slate-900 bg-opacity-50 backdrop-blur border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-blue-500 hover:border-opacity-50 transition-all">
                <Zap className="w-10 h-10 text-yellow-400 mb-3" />
                <div className="text-center text-sm text-slate-400">
                  Fast Performance
                </div>
              </div>

              <div className="bg-slate-900 bg-opacity-50 backdrop-blur border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center hover:border-purple-500 hover:border-opacity-50 transition-all">
                <Layers className="w-10 h-10 text-purple-400 mb-3" />
                <div className="text-center text-sm text-slate-400">
                  Clean Code
                </div>
              </div>

              <div className="col-span-2 bg-slate-900 bg-opacity-50 backdrop-blur border border-slate-800 rounded-3xl p-6 flex items-center justify-center hover:border-cyan-500 hover:border-opacity-50 transition-all">
                <Palette className="w-8 h-8 text-cyan-400 mr-4" />
                <div className="text-slate-300">Pixel-Perfect Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Card Layout */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-500 bg-opacity-10 rounded-full border border-blue-500 border-opacity-20 mb-6">
              <span className="text-blue-400 font-medium">My Toolkit</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-slate-900 bg-opacity-50 backdrop-blur border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:border-opacity-50 transition-all hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-slate-200">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-blue-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Unique Cards */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-purple-500 bg-opacity-10 rounded-full border border-purple-500 border-opacity-20 mb-6">
              <span className="text-purple-400 font-medium">Portfolio</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-900 bg-opacity-30 backdrop-blur border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 hover:border-opacity-50 transition-all hover:-translate-y-2"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs bg-slate-800 bg-opacity-50 text-slate-300 rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 rounded-full transition-all flex items-center justify-center gap-2 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </button>
                    <button className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 rounded-full transition-all flex items-center gap-2 text-sm font-medium">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 from-opacity-20 to-purple-600 to-opacity-20 backdrop-blur border border-blue-500 border-opacity-30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-30 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h2>
              <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
                I'm currently open to freelance projects and full-time
                opportunities. Let's discuss how I can help bring your vision to
                life.
              </p>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-full hover:shadow-2xl hover:shadow-white hover:shadow-opacity-50 transition-all text-lg font-bold hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 border-opacity-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-400">© 2024 All rights reserved</span>
            </div>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-5 py-2 bg-slate-900 rounded-full border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all text-sm text-slate-400 hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
