import React, { useState, useEffect } from "react";
import {
  Terminal,
  Zap,
  Code2,
  Briefcase,
  User,
  Home,
  FileDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ isDark, setIsDark, theme }) {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Stack", href: "#skills", id: "skills", icon: Code2 },
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

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${theme.nav} transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-black tracking-tighter text-xl italic"
          >
            <div className={`${theme.accentBg} p-1.5 rounded-lg`}>
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className={isDark ? "text-white" : "text-zinc-900"}>
              ASIF_IMAM
            </span>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2 bg-zinc-500/5 p-1 rounded-full border border-zinc-500/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 z-10 ${
                  activeSection === link.id
                    ? "text-emerald-500"
                    : isDark
                    ? "text-zinc-500 hover:text-white"
                    : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isDark ? "bg-emerald-500/10" : "bg-white shadow-sm"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                isDark
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-black"
                  : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
              }`}
            >
              CV <FileDown className="w-3.5 h-3.5" />
            </motion.a>

            <motion.button
              whileTap={{ rotate: 180 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 border rounded-full transition-all ${
                isDark
                  ? "border-zinc-800 bg-zinc-900/50"
                  : "border-zinc-200 bg-white shadow-sm"
              }`}
            >
              <Zap
                className={`w-4 h-4 transition-colors ${
                  isDark ? "fill-emerald-500 text-emerald-500" : "text-zinc-400"
                }`}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM DOCK */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed md:hidden bottom-6 left-1/2 w-[92vw] max-w-[400px] z-50"
        >
          <div
            className={`flex items-center justify-between p-2 rounded-[2rem] border backdrop-blur-2xl shadow-2xl ${
              isDark
                ? "bg-zinc-950/80 border-white/10"
                : "bg-white/90 border-black/5 shadow-zinc-200"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="relative flex flex-1 flex-col items-center justify-center py-3"
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-dock-bg"
                      className="absolute inset-1 bg-emerald-500/10 rounded-2xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <link.icon
                    className={`w-5 h-5 z-10 transition-all duration-300 ${
                      isActive
                        ? "text-emerald-500 scale-110"
                        : isDark
                        ? "text-zinc-500"
                        : "text-zinc-400"
                    }`}
                  />
                  <span
                    className={`text-[7px] font-black uppercase mt-1 z-10 ${
                      isActive
                        ? "text-emerald-500"
                        : isDark
                        ? "text-zinc-600"
                        : "text-zinc-400"
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}

            <div
              className={`w-px h-8 mx-1 ${
                isDark ? "bg-white/10" : "bg-black/5"
              }`}
            />

            <a
              href={CV_URL}
              className="flex flex-1 flex-col items-center justify-center py-3 text-emerald-500"
            >
              <FileDown className="w-5 h-5" />
              <span className="text-[7px] font-black uppercase mt-1">CV</span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
