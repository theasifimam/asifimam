import React, { useState, useEffect } from "react";
import { Terminal, Zap, Code2, Briefcase, User, Home } from "lucide-react";

export default function Header({ isDark, setIsDark, theme }) {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "Stack", href: "#skills", id: "skills", icon: Code2 },
    { name: "Work", href: "#projects", id: "projects", icon: Briefcase },
    { name: "About", href: "#about", id: "about", icon: User },
  ];

  // Logic to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const offset = 100; // Adjust this for sensitivity
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

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* TOP NAVBAR */}
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

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`transition-colors ${
                  activeSection === link.id
                    ? "text-emerald-500"
                    : "hover:text-emerald-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 border rounded-xl transition-all active:scale-90 ${
              isDark
                ? "border-zinc-800 bg-zinc-900/50"
                : "border-zinc-200 bg-white/50"
            }`}
          >
            <Zap
              className={`w-4 h-4 ${
                isDark ? "fill-emerald-500 text-emerald-500" : "text-zinc-400"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE BOTTOM DOCK */}
      <div className="fixed md:hidden bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] z-50">
        <div
          className={`
          flex items-center justify-around p-2 rounded-3xl border backdrop-blur-2xl shadow-2xl
          ${
            isDark
              ? "bg-zinc-950/80 border-white/10 shadow-black/50"
              : "bg-white/80 border-black/5 shadow-zinc-200"
          }
        `}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="relative flex flex-col items-center justify-center py-2 px-4 transition-all duration-300"
              >
                {/* Visual Glow behind active icon */}
                {isActive && (
                  <div className="absolute inset-0 bg-emerald-500/10 blur-md rounded-full" />
                )}

                <link.icon
                  className={`w-5 h-5 mb-1 z-10 transition-transform duration-300 ${
                    isActive
                      ? "text-emerald-500 scale-110"
                      : isDark
                      ? "text-zinc-500"
                      : "text-zinc-400"
                  }`}
                />

                <span
                  className={`text-[9px] font-black uppercase tracking-tighter z-10 transition-colors ${
                    isActive
                      ? "text-emerald-500"
                      : isDark
                      ? "text-zinc-600"
                      : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </span>

                {/* Bottom Active Indicator Dot */}
                <div
                  className={`mt-1 w-1 h-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-500 scale-100"
                      : "bg-transparent scale-0"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
