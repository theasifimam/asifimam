import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Search,
  MoreHorizontal,
  FileDown,
  Mail,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ isDark, setIsDark }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Stack", href: "#skills", id: "skills", icon: Code2 },
    { name: "Journey", href: "#experience", id: "experience", icon: Briefcase },
    { name: "Work", href: "#projects", id: "projects", icon: FolderGit2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = 200;
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

  const CV_URL = "/asif-cv.pdf";

  return (
    <>
      {/* Top Header Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
        {/* Logo container with background for readability */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto flex items-center gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-[1.5rem] border border-black/5 dark:border-white/5 shadow-sm cursor-pointer"
          onClick={(e) => handleScrollTo(e, "home")}
        >
          <span className="font-sans font-black tracking-tight text-2xl text-black dark:text-white uppercase">
            ASIF
          </span>
          <div className="relative flex h-3 w-3 ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-accent"></span>
          </div>
        </motion.div>

        {/* Action Buttons (Right side) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto flex items-center gap-3 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-[1.5rem] border border-black/5 dark:border-white/5 shadow-sm"
        >
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="w-10 h-10 rounded-full border border-black/5 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/50 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <Search size={16} />
          </button>

          {/* CV Resume Link */}
          <a
            href={CV_URL}
            download
            className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 hover:text-lime-accent transition-colors px-3"
          >
            Resume <FileDown size={14} />
          </a>

          {/* Theme Toggler */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full border border-black/5 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/50 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <Zap
              size={16}
              className={isDark ? "fill-lime-accent text-lime-accent" : ""}
            />
          </button>
        </motion.div>
      </nav>

      {/* Floating Search Bar Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-50 w-80 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-3xl p-4 shadow-2xl backdrop-blur-xl animate-none"
          >
            <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 rounded-2xl px-3 py-2">
              <Search size={16} className="text-zinc-400" />
              <input
                type="text"
                placeholder="Search portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-sm text-black dark:text-white"
              />
            </div>
            {searchQuery && (
              <div className="mt-4 max-h-48 overflow-y-auto space-y-2">
                {navLinks
                  .filter((link) =>
                    link.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        handleScrollTo(e, link.id);
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="block p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400"
                    >
                      Go to {link.name}
                    </a>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Dock Navigation (Screenshot 1 tab bar style) */}
      <div className="fixed bottom-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="pointer-events-auto flex items-center gap-1.5 p-2 rounded-full bg-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="relative flex items-center justify-center cursor-pointer"
              >
                {isActive ? (
                  <motion.div
                    layoutId="dock-active-pill"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-accent text-black font-extrabold text-[11px] tracking-wider uppercase shadow-[0_5px_15px_rgba(210,255,58,0.3)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  >
                    <link.icon size={14} className="stroke-[2.5]" />
                    <span>{link.name}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="p-3.5 rounded-full text-zinc-400 hover:text-white transition-colors"
                  >
                    <link.icon size={16} />
                  </motion.div>
                )}
              </a>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
