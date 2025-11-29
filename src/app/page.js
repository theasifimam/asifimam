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
  Moon,
  Sun,
  Phone,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [isDark, setIsDark] = useState(false);
  const fullText = "Frontend Developer";

  // Detect system theme on mount
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   setIsDark(mediaQuery.matches);

  //   const handleChange = (e) => setIsDark(e.matches);
  //   mediaQuery.addEventListener("change", handleChange);
  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
  }, [typedText]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Built a scalable e-commerce solution with Next.js, Redux Toolkit, and Stripe integration. Features include real-time inventory, cart persistence, and optimized checkout flow.",
      tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
      number: "01",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Developed a real-time analytics dashboard using React and Chart.js with custom hooks for data fetching and state management using Zustand.",
      tech: ["React.js", "Zustand", "Chart.js", "REST API"],
      number: "02",
    },
    {
      title: "Task Management App",
      description:
        "Created a collaborative task management tool with drag-and-drop functionality, real-time updates, and responsive design for mobile-first experience.",
      tech: ["React.js", "Context API", "React DnD", "LocalStorage"],
      number: "03",
    },
  ];

  const skills = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "JavaScript", level: 93, icon: "JS" },
    { name: "TypeScript", level: 85, icon: "TS" },
    { name: "Tailwind CSS", level: 92, icon: "CSS" },
    { name: "Redux", level: 88, icon: "RDX" },
    { name: "REST APIs", level: 90, icon: "API" },
    { name: "Performance", level: 87, icon: "⚡" },
  ];

  const experience = [
    {
      year: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "Volans Infomatics pvt ltd",
      description:
        "Leading development of enterprise applications with modern React ecosystem",
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "Softmind Infotech pvt ltd",
      description:
        "Built responsive web applications for diverse clients across industries",
    },
  ];

  const theme = {
    bg: isDark ? "bg-black-500" : "bg-white",
    text: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-gray-400" : "text-gray-600",
    textTertiary: isDark ? "text-gray-500" : "text-gray-500",
    border: isDark
      ? "border-white border-opacity-10"
      : "border-black border-opacity-10",
    borderHover: isDark
      ? "hover:border-white hover:text-black hover:border-opacity-30"
      : "hover:border-black hover:text-white hover:border-opacity-30",
    bgCard: isDark ? "bg-white bg-opacity-5" : "bg-black bg-opacity-500",
    bgCardHover: isDark
      ? "hover:bg-white hover:bg-opacity-10"
      : "hover:bg-black hover:bg-opacity-10",
    accent: isDark ? "bg-white text-black" : "bg-black text-white",
    accentReverse: isDark ? "bg-black text-white" : "bg-white text-black",
    shadow: isDark ? "shadow-white" : "shadow-black",
    gridColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
    spotlightColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
  };
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/asif-cv.pdf"; // file inside public/
    link.download = "asif-imam-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} relative overflow-hidden transition-colors duration-500`}
    >
      {/* Animated grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${theme.gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.gridColor} 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePos.x * 0.01}px, ${
              mousePos.y * 0.01
            }px)`,
          }}
        />
      </div>

      {/* Spotlight effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 ${theme.bg} bg-opacity-80 backdrop-blur-xl border-b ${theme.border} transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 ${theme.accent} rounded-2xl flex items-center justify-center transition-colors duration-500`}
            >
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">DEV</span>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex gap-2 ${theme.bgCard} rounded-full p-1.5 border ${theme.border} transition-colors duration-500`}
          >
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeSection === item.toLowerCase()
                    ? theme.accent
                    : `${theme.textSecondary} ${theme.bgCardHover}`
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} transition-all`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-black" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              className={`md:hidden p-2 rounded-2xl ${theme.bgCard} border ${theme.border}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <Menu className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden ${theme.bg} bg-opacity-95 backdrop-blur-xl border-t ${theme.border}`}
          >
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
                      ? theme.accent
                      : `${theme.textSecondary} ${theme.bgCardHover}`
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
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${theme.bgCard} border ${theme.border} mb-8`}
              >
                <span className="relative flex h-3 w-3">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      isDark ? "bg-white" : "bg-black"
                    } opacity-75`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 ${
                      isDark ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                </span>
                <span className={`text-sm ${theme.textSecondary}`}>
                  Available for opportunities
                </span>
              </div>

              <div className="mb-6">
                <span className={`block ${theme.textTertiary} text-2xl mb-2`}>
                  Hi, I'm a
                </span>
                <h1 className="text-7xl md:text-8xl font-bold">
                  <span className="block">{typedText}</span>
                  <span
                    className={`inline-block w-1 h-20 ${
                      isDark ? "bg-white" : "bg-black"
                    } ml-2 animate-pulse`}
                  ></span>
                </h1>
              </div>

              <p
                className={`text-xl ${theme.textSecondary} mb-8 leading-relaxed max-w-xl`}
              >
                Crafting pixel-perfect, performant web experiences with React,
                Next.js, and modern JavaScript. Specialized in building scalable
                frontend architectures.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  className={`group px-8 py-4 ${theme.accent} rounded-full hover:shadow-2xl hover:${theme.shadow} hover:shadow-opacity-50 transition-all flex items-center gap-2 font-medium`}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`px-8 py-4 border-2 ${theme.border} cursor:pointer rounded-full ${theme.borderHover} ${theme.bgCardHover} transition-all font-medium`}
                  onClick={downloadCV}
                >
                  Download CV
                </button>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/theasifimam"
                  className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
                >
                  <Github
                    className={`w-5 h-5 ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  />
                </a>
                <a
                  href="https://linkedin.com/in/theasifimam"
                  className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
                >
                  <Linkedin
                    className={`w-5 h-5 ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  />
                </a>
                <a
                  href="mailto:asifimam999@gmail.com"
                  className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
                >
                  <Mail
                    className={`w-5 h-5 ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  />
                </a>
                <a
                  href="tel:+918882868861"
                  className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
                >
                  <Phone
                    className={`w-5 h-5 ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  />
                </a>
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`col-span-2 ${theme.accent} rounded-3xl p-10 relative overflow-hidden transition-colors duration-500`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${
                    isDark ? "bg-black" : "bg-white"
                  } opacity-5 rounded-full blur-2xl`}
                />
                <div className="relative">
                  <div className="text-6xl font-bold mb-2">3+</div>
                  <div className={isDark ? "text-gray-700" : "text-gray-300"}>
                    Years Experience
                  </div>
                </div>
              </div>

              <div
                className={`${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-6 flex flex-col items-center justify-center ${theme.borderHover} transition-all group`}
              >
                <Zap
                  className={`w-10 h-10 mb-3 group-hover:scale-110 transition-transform ${theme.textSecondary}`}
                />
                <div className={`text-center text-sm ${theme.textSecondary}`}>
                  Fast Performance
                </div>
              </div>

              <div
                className={`${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-6 flex flex-col items-center justify-center ${theme.borderHover} transition-all group`}
              >
                <Layers
                  className={`w-10 h-10 mb-3 group-hover:scale-110 transition-transform ${theme.textSecondary}`}
                />
                <div className={`text-center text-sm ${theme.textSecondary}`}>
                  Clean Code
                </div>
              </div>

              <div
                className={`col-span-2 ${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-6 flex items-center justify-center ${theme.borderHover} transition-all group`}
              >
                <Palette
                  className={`w-8 h-8 mr-4 group-hover:scale-110 transition-transform ${theme.textSecondary}`}
                />
                <div className={`text-center text-sm ${theme.textSecondary}`}>
                  Pixel-Perfect Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div
              className={`inline-block px-6 py-2 ${theme.bgCard} rounded-full border ${theme.border} mb-6`}
            >
              <span className={`${theme.textSecondary} font-medium`}>
                Technical Stack
              </span>
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${theme.text}`}>
              Skills & Expertise
            </h2>
            <p className={`${theme.textTertiary} text-lg`}>
              Technologies I work with daily
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative ${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-8 ${theme.borderHover} transition-all hover:-translate-y-2`}
              >
                <div
                  className={`absolute top-4 right-4 text-6xl font-bold ${
                    isDark ? "text-black" : "text-white"
                  } opacity-5`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div
                  className={`text-4xl mb-4 font-bold ${
                    isDark ? "text-black" : "text-white"
                  }`}
                >
                  {skill.icon}
                </div>
                <h3
                  className={`text-lg font-semibold mb-3  ${
                    isDark ? "text-black" : "text-white"
                  }`}
                >
                  {skill.name}
                </h3>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-1 h-2 ${
                      isDark ? "bg-black" : "bg-white"
                    } bg-opacity-10 rounded-full overflow-hidden`}
                  >
                    <div
                      className={`h-full ${
                        isDark ? "bg-black" : "bg-white"
                      } rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span
                    className={`text-sm ${theme.textSecondary} font-semibold`}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div
              className={`inline-block px-6 py-2 ${theme.bgCard} rounded-full border ${theme.border} mb-6`}
            >
              <span className={`${theme.textSecondary} font-medium`}>
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className={`${theme.textTertiary} text-lg`}>
              Recent work that showcases my skills
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl overflow-hidden ${theme.borderHover} transition-all`}
              >
                <div className="grid md:grid-cols-12 gap-6 p-8">
                  <div className="md:col-span-2 flex items-center">
                    <div
                      className={`text-7xl font-bold ${
                        isDark ? "text-black" : "text-white"
                      } opacity-10 group-hover:opacity-20 transition-all`}
                    >
                      {project.number}
                    </div>
                  </div>

                  <div className="md:col-span-6">
                    <h3
                      className={`text-2xl font-bold mb-3 group-hover:${theme.textSecondary} transition-colors`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`${theme.textSecondary} mb-4 leading-relaxed`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-4 py-1.5 text-xs ${theme.bgCard} ${theme.textSecondary} rounded-full border ${theme.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 flex items-center justify-end gap-3">
                    <button
                      className={`px-6 py-3 ${theme.accent} rounded-full transition-all flex items-center gap-2 text-sm font-medium hover:shadow-lg`}
                    >
                      <ExternalLink
                        className={`w-4 h-4 ${
                          isDark ? "text-black" : "text-white"
                        }`}
                      />
                      Live Demo
                    </button>
                    <button
                      className={`p-3 ${theme.bgCard} rounded-full transition-all ${theme.bgCardHover}`}
                    >
                      <Github
                        className={`w-5 h-5 ${
                          isDark ? "text-black" : "text-white"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div
              className={`inline-block px-6 py-2 ${theme.bgCard} rounded-full border ${theme.border} mb-6`}
            >
              <span className={`${theme.textSecondary} font-medium`}>
                Career Path
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Work Experience
            </h2>
          </div>

          <div className="relative">
            <div
              className={`absolute left-8 top-0 bottom-0 w-px ${
                isDark ? "bg-white" : "bg-black"
              } bg-opacity-10`}
            />

            {experience.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-16 last:pb-0">
                <div
                  className={`absolute left-5 top-2 w-7 h-7 ${
                    theme.accent
                  } rounded-full border-4 ${
                    isDark ? "border-black" : "border-white"
                  }`}
                />

                <div
                  className={`${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-8 ${theme.borderHover} transition-all`}
                >
                  <div className={`text-sm ${theme.textTertiary} mb-2`}>
                    {exp.year}
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  >
                    {exp.role}
                  </h3>
                  <div className={`${theme.textSecondary} mb-4`}>
                    {exp.company}
                  </div>
                  <p className={theme.textTertiary}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative ${theme.accent} rounded-[3rem] p-12 md:p-20 text-center overflow-hidden transition-colors duration-500`}
          >
            <div
              className={`absolute top-0 right-0 w-64 h-64 ${
                isDark ? "bg-black" : "bg-white"
              } opacity-5 rounded-full blur-3xl`}
            />
            <div
              className={`absolute bottom-0 left-0 w-64 h-64 ${
                isDark ? "bg-black" : "bg-white"
              } opacity-5 rounded-full blur-3xl`}
            />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Build Something
                <span
                  className={`block ${
                    isDark ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  Extraordinary
                </span>
              </h2>
              <p
                className={`${
                  isDark ? "text-gray-600" : "text-gray-400"
                } mb-10 text-lg max-w-2xl mx-auto`}
              >
                I'm currently open to freelance projects and full-time
                opportunities. Let's discuss how I can help bring your vision to
                life.
              </p>
              <button
                className={`px-12 py-5 ${theme.accentReverse} rounded-full hover:shadow-2xl transition-all text-lg font-bold hover:scale-105`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${theme.border} py-12 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 ${theme.accent} rounded-2xl flex items-center justify-center`}
              >
                <Code2 className="w-5 h-5" />
              </div>
              <span className={theme.textTertiary}>
                © 2024 All rights reserved
              </span>
            </div>
            <div className="flex gap-4">
              {[
                { name: "GitHub", link: "https://github.com/theasifimam" },
                {
                  name: "LinkedIn",
                  link: "https://linkedin.com/in/theasifimam",
                },
                { name: "Twitter", link: "https://x.com/theasifimam" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blanck"
                  className={`px-5 py-2 ${theme.bgCard} rounded-full border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all text-sm ${theme.textSecondary}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
