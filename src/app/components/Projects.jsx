import { ArrowUpRight } from "lucide-react";

export default function Projects({ projects, isDark, theme }) {
  return (
    <section
      id="projects"
      className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 underline decoration-emerald-500 decoration-4 italic">
            FEATURED WORK
          </h2>
          <p className={`${theme.textMuted} text-sm md:text-base`}>
            High-concurrency performance and core web vitals focus.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div
            className={`text-3xl md:text-4xl font-mono ${theme.accent} font-black tracking-tighter`}
          >
            04+
          </div>
          <div className="text-[10px] md:text-xs uppercase font-mono opacity-50 tracking-widest">
            Deployed Projects
          </div>
        </div>
      </div>

      {/* Responsive Grid: 1 column on mobile, 2 on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`${theme.card} border p-1.5 md:p-2 rounded-4xl md:rounded-[3rem] group transition-all hover:-translate-y-1`}
          >
            <div
              className={`${theme.cardInner} rounded-[1.8rem] md:rounded-[2.7rem] p-6 md:p-8 h-full flex flex-col`}
            >
              <div className="flex justify-between items-start mb-6 md:mb-10">
                <span
                  className={`text-[9px] md:text-[10px] font-black font-mono px-3 py-1 md:px-4 md:py-1.5 ${
                    isDark
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100"
                  } rounded-full border uppercase tracking-widest`}
                >
                  {p.category}
                </span>
                <div
                  className={`p-2.5 md:p-3 ${
                    isDark ? "bg-zinc-800" : "bg-white border border-zinc-200"
                  } rounded-full group-hover:bg-emerald-500 group-hover:text-black transition-all`}
                >
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 italic tracking-tight">
                {p.title}
              </h3>

              <p
                className={`${theme.textMuted} text-sm md:text-base mb-6 md:mb-8 grow leading-relaxed`}
              >
                {p.description}
              </p>

              {/* Internal KPI Grid: Stays 2 columns unless screen is extremely narrow */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-2">
                {p.metrics.map((m) => (
                  <div
                    key={m}
                    className={`p-3 md:p-4 ${
                      isDark
                        ? "bg-zinc-900 border-zinc-800"
                        : "bg-white border-zinc-200 shadow-sm"
                    } border rounded-2xl md:rounded-3xl`}
                  >
                    <div className="text-[8px] md:text-[10px] font-mono opacity-40 uppercase font-bold tracking-tighter">
                      KPI
                    </div>
                    <div className="text-xs md:text-sm font-black truncate">
                      {m}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
