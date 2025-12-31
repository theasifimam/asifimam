import React from "react";

export default function Experience({ isDark, theme }) {
  const experiences = [
    {
      company: "Volans Infomatics",
      role: "Senior MERN Stack Engineer",
      period: "Dec 2022 — Nov 2025",
      description:
        "Leading the development of a microservices-based SaaS platform. Orchestrating data flow between Node.js services and MongoDB clusters.",
      achievements: ["99.9% Uptime", "Optimized DB Queries by 40%"],
    },
    {
      company: "Softminds Infotech",
      role: "Frontend Developer Intern",
      period: "Oct 2022 — Dec 2022",
      description:
        "Developed responsive and user-friendly web applications using React.js. Implemented data fetching and state management using Redux Toolkit.",
      achievements: [
        "Zero-bug deployments",
        "Built 15+ reusable UI components",
      ],
    },
    // {
    //   company: "Innova Labs",
    //   role: "Junior Web Developer",
    //   period: "2020 — 2021",
    //   description:
    //     "Engineered front-facing features using React.js. Collaborated with UI/UX teams to translate Figma designs into pixel-perfect code.",
    //   achievements: ["Zero-bug deployments", "Improved Lighthouse scores"],
    // },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <span
          className={`${theme.accent} font-mono text-xs uppercase tracking-[0.3em]`}
        >
          // CAREER_LOG
        </span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 italic tracking-tighter uppercase">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* The Vertical Line (Hidden on small mobile, visible on tablet+) */}
        <div
          className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
            isDark ? "bg-zinc-800" : "bg-zinc-200"
          } hidden md:block transform md:-translate-x-1/2`}
        />

        <div className="space-y-12 md:space-y-32">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-2 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full ${
                  theme.accentBg
                } border-4 ${
                  isDark ? "border-[#080808]" : "border-zinc-50"
                } z-10 transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block`}
              />

              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div
                  className={`${theme.card} border p-6 md:p-10 rounded-4xl md:rounded-[3rem] hover:border-emerald-500/50 transition-all group`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black italic tracking-tight leading-none mb-2">
                        {exp.company}
                      </h3>
                      <p
                        className={`${theme.accent} font-mono text-xs font-bold uppercase`}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-3 py-1 border rounded-full ${theme.pill} opacity-70`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className={`${theme.textMuted} text-sm md:text-base mb-8 leading-relaxed`}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.achievements.map((ach, idx) => (
                      <div
                        key={idx}
                        className={`text-[10px] font-mono font-bold uppercase tracking-tighter flex items-center gap-2 ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${theme.accentBg}`}
                        />
                        {ach}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty Spacer for desktop alignment */}
              <div className="hidden md:block md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
