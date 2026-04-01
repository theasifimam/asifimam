import React, { useState, useEffect } from "react";
import {
  Zap,
  Code2,
  Briefcase,
  User,
  Home,
  FileDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Minimal Header
 * Premium glassmorphism navigation with staggered entrance animations.
 */
export default function Header({ isDark, setIsDark, theme }) {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Stack", href: "#skills", id: "skills", icon: Code2 },
    { name: "Experience", href: "#experience", id: "experience", icon: Briefcase },
    { name: "Work", href: "#projects", id: "projects", icon: Briefcase },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = 150;
      const scrollPos = window.scrollY + offset;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const CV_URL = "/assets/asif-imam-cv.pdf";

  const colors = {
    bg: isDark ? "bg-[#050505]/70" : "bg-white/70",
    text: isDark ? "text-white" : "text-black",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/5" : "border-black/5",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500",
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b ${colors.border} ${colors.bg} transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Minimal Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-black tracking-tighter text-3xl ${colors.text} cursor-pointer`}
            onClick={(e) => handleScrollTo(e, "home")}
          >
            A<span className="text-emerald-500">.</span>
          </motion.div>

          {/* Clean Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`relative px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 z-10 ${
                  activeSection === link.id
                    ? colors.text
                    : colors.textMuted + " hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isDark ? "bg-emerald-500/10" : "bg-black/5"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Minimal CV Link */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] ${colors.text} hover:text-emerald-500 transition-colors`}
            >
              Resume <FileDown size={14} className="text-emerald-500" />
            </motion.a>

            <motion.button
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-2xl border ${colors.border} transition-all ${
                isDark ? "bg-white/5" : "bg-black/5 shadow-sm"
              }`}
            >
              <Zap
                size={16}
                className={`transition-colors ${
                  isDark ? "fill-emerald-500 text-emerald-500" : "text-zinc-500"
                }`}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM DOCK REFINED */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 50, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 25 }}
          className="fixed md:hidden bottom-6 left-1/2 w-[90vw] max-w-[360px] z-50"
        >
          <div
            className={`flex items-center justify-around py-3 px-2 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl ${
              isDark
                ? "bg-black/60 border-white/10"
                : "bg-white/80 border-black/5"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="relative flex flex-col items-center justify-center p-3"
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-dock-bg"
                      className="absolute inset-0 bg-emerald-500/10 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <link.icon
                    size={18}
                    className={`z-10 transition-all duration-300 ${
                      isActive ? "text-emerald-500" : colors.textMuted
                    }`}
                  />
                </a>
              );
            })}
            <div className={`w-px h-6 opacity-20 ${isDark ? "bg-white" : "bg-black"}`} />
            <a href={CV_URL} className="p-3 text-emerald-500">
              <FileDown size={18} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

