import { Code2, Cpu, Globe, Layers, Sparkles } from "lucide-react";

export default function Skills({ isDark }) {
  const categories = [
    {
      title: "Frontend Architecture",
      desc: "Building immersive user interfaces",
      icon: <Layers className="w-6 h-6" />,
      skills: ["React", "Next.js 14", "Tailwind CSS", "Framer Motion"],
      size: "md:col-span-2",
      gradient: "from-emerald-500/20 to-blue-500/20",
    },
    {
      title: "Backend",
      desc: "Scalable systems",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Node.js", "PostgreSQL", "Prisma"],
      size: "md:col-span-1",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Core Stack",
      desc: "Fundamental languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["TypeScript", "JavaScript", "Python", "Go"],
      size: "md:col-span-1",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Deployment & Ops",
      desc: "Cloud infrastructure",
      icon: <Globe className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Vercel", "CI/CD"],
      size: "md:col-span-2",
      gradient: "from-cyan-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header with Glass Effect Label */}
      <div className="flex flex-col items-start mb-16">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-emerald-500/30 text-emerald-500 mb-4 bg-emerald-500/5">
          Expertise
        </span>
        <h2
          className={`text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          MY{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500 text-italic">
            ARSENAL
          </span>
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-4xl border transition-all duration-500 p-8
              ${cat.size}
              ${
                isDark
                  ? "bg-zinc-900/40 border-white/5 hover:border-emerald-500/50"
                  : "bg-zinc-50 border-black/5 hover:border-emerald-500/30"
              }
            `}
          >
            {/* Mesh Gradient Background */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br ${cat.gradient} blur-3xl`}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div
                  className={`p-4 rounded-2xl ${
                    isDark ? "bg-zinc-800" : "bg-white shadow-sm"
                  } group-hover:scale-110 transition-transform duration-500`}
                >
                  {cat.icon}
                </div>
                <Sparkles
                  className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ${
                    isDark ? "text-zinc-700" : "text-zinc-300"
                  }`}
                />
              </div>

              <div className="mt-auto">
                <p className="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-1">
                  {cat.desc}
                </p>
                <h3
                  className={`text-2xl font-black tracking-tight mb-6 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-4 py-2 rounded-xl backdrop-blur-md border transition-all
                        ${
                          isDark
                            ? "bg-white/5 border-white/10 text-zinc-300 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500"
                            : "bg-black/5 border-black/5 text-zinc-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500"
                        }
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
