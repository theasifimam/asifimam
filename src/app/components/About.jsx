import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function SimpleAboutSlider({ isDark = true }) {
  const [active, setActive] = useState(0);

  const colors = {
    bg: isDark ? "bg-[#09090b]" : "bg-white",
    textMain: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/10" : "border-black/5",
    accent: "text-emerald-500",
  };

  const aboutData = [
    {
      label: "Philosophy",
      title: "Efficiency by Design",
      content:
        "I engineering digital systems where speed is the primary feature. Every line of code is audited for performance, ensuring sub-100ms response times and 99.9% reliability.",
    },
    {
      label: "History",
      title: "Architecture & Scale",
      content:
        "Over the last 3 years, I have transitioned from building interfaces to architecting scalable backend systems, specializing in modular React components and distributed Node.js environments.",
    },
    {
      label: "Mission",
      title: "Future of the Web",
      content:
        "My focus is on the intersection of Edge Computing and AI, creating web applications that feel as robust as native software while maintaining global accessibility.",
    },
  ];

  return (
    <section id="about" className={`py-32 px-6 transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto">
        {/* TOP NAVIGATION LINE */}
        <div
          className={`flex items-center justify-between mb-20 border-b ${colors.border} pb-6`}
        >
          <div className="flex gap-8 md:gap-16">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative group flex flex-col items-start transition-all`}
              >
                <span
                  className={`text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-2 ${
                    active === i ? colors.accent : colors.textMuted
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest ${
                    active === i
                      ? colors.textMain
                      : "opacity-20 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>
                {/* Active Underline */}
                {active === i && (
                  <div className="absolute -bottom-[26px] left-0 w-full h-0.5 bg-emerald-500 z-10" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => setActive((prev) => (prev - 1 + 3) % 3)}
              className={`${colors.textMuted} hover:text-emerald-500 transition-colors`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActive((prev) => (prev + 1) % 3)}
              className={`${colors.textMuted} hover:text-emerald-500 transition-colors`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* BIG SECTION TITLE (4 Cols) */}
          <div className="lg:col-span-5">
            <h3
              className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] ${colors.textMain}`}
            >
              {aboutData[active].title.split(" ")[0]} <br />
              <span className="text-emerald-500 italic">
                {aboutData[active].title.split(" ")[1]}
              </span>
            </h3>
          </div>

          {/* DESCRIPTION TEXT (7 Cols) */}
          <div className="lg:col-span-7">
            <p
              className={`text-xl md:text-3xl font-medium leading-relaxed tracking-tight ${colors.textMuted} max-w-3xl`}
            >
              <span className={colors.textMain}>— </span>
              {aboutData[active].content}
            </p>

            {/* PROGRESS DOTS (Mobile Friendly) */}
            <div className="flex gap-2 mt-12 md:hidden">
              {aboutData.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-8 rounded-full ${
                    active === i ? "bg-emerald-500" : "bg-zinc-800"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
