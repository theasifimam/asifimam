"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/ExperienceSection";
import Footer from "./components/Footer";
import About from "./components/About";
import HeroSection1 from "./components/HeroOptions/HeroSection1";
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
      <HeroSection1 theme={theme} isDark={isDark} />
      <About theme={theme} isDark={isDark} />
      <Skills theme={theme} isDark={isDark} />
      <Experience theme={theme} isDark={isDark} />
      <Projects isDark={isDark} theme={theme} />
      <Contact isDark={isDark} theme={theme} />
      <Footer isDark={isDark} theme={theme} />
    </div>
  );
}
