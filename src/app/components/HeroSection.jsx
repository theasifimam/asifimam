import {
  Zap,
  Activity,
  Terminal as TerminalIcon,
  ArrowUpRight,
  Cpu,
  HardDrive,
  Code,
} from "lucide-react";

export default function SkillsHero({ isDark = true, theme }) {
  // Strict Color Mapping
  const colors = {
    bg: isDark ? "bg-[#09090b]" : "bg-white", // Zinc 950
    card: isDark ? "bg-[#121214]/50" : "bg-zinc-50",
    border: isDark ? "border-white/10" : "border-black/5",
    textMain: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-500",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500",
  };

  const metrics = [
    {
      label: "Architecture",
      value: "Clean",
      icon: <Cpu className="w-4 h-4" />,
    },
    { label: "Performance", value: "99+", icon: <Zap className="w-4 h-4" /> },
    {
      label: "Deployment",
      value: "Edge",
      icon: <Activity className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-700 pt-30 pb-20 lg:py-[120px] ${colors.bg}`}
    >
      {/* BACKGROUND: Subtle Grid & Glow */}
      <div className="absolute inset-0 opacity-20 mask-[radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* LEFT: Branding & Philosophy */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* Sub-header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`relative px-4 py-1.5 rounded-full text-[10px] font-mono font-black tracking-[0.4em] uppercase border ${colors.border} overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-emerald-500/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className={colors.accent}>System.Core_Initiated</span>
            </div>
          </div>

          {/* MAIN HEADLINE: Adjusted sizes for mobile (text-4xl -> text-7xl -> text-[140px]) */}
          <h2
            className={`relative text-4xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[140px] font-black tracking-[-0.06em] uppercase leading-[0.85] lg:leading-[0.75] mb-8 lg:mb-12 ${colors.textMain}`}
          >
            <span className="block opacity-90">Architecting</span>
            <span className="relative inline-block mt-2 lg:mt-4">
              <span
                className={`absolute -inset-1 select-none blur-2xl opacity-20 bg-emerald-500 rounded-full`}
              />
              <span className="relative italic text-transparent bg-clip-text bg-linear-to-br from-emerald-300 via-emerald-500 to-emerald-700 drop-shadow-2xl">
                Digital
              </span>
            </span>
            <br />
            <span className="flex items-center gap-4 mt-2 lg:mt-0">
              Speed.
              <span
                className={`h-4 sm:h-6 lg:h-10 w-10 sm:w-20 lg:w-[120px] rounded-full border-2 sm:border-4 lg:border-8 ${colors.border} opacity-20`}
              />
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`text-base sm:text-lg md:text-2xl max-w-xl leading-relaxed font-medium ${colors.textMuted}`}
          >
            High-frequency developer specializing in
            <span
              className={`inline-block mx-2 font-mono text-[10px] sm:text-sm px-2 py-0.5 rounded bg-white/5 border ${colors.border} ${colors.textMain}`}
            >
              latency_optimization
            </span>
            and pixel-perfect
            <span
              className={`ml-2 underline underline-offset-8 decoration-emerald-500/30 ${colors.textMain}`}
            >
              User Experiences.
            </span>
          </p>

          {/* Metrics: Wrapped for small screens */}
          <div className="flex flex-wrap gap-6 sm:gap-12 mt-10 lg:mt-12 items-center">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className={`text-xl sm:text-2xl font-black ${colors.textMain}`}
                >
                  {m.value}
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 ${colors.accent}`}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: The Live Code Terminal */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <div className="absolute -inset-1 bg-emerald-500/20 rounded-[36px] blur-2xl opacity-50" />

          <div
            className={`relative rounded-3xl lg:rounded-4xl border ${colors.border} ${colors.card} p-0.5 lg:p-1 backdrop-blur-xl overflow-hidden`}
          >
            {/* Terminal Header */}
            <div
              className={`flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b ${colors.border}`}
            >
              <div className="flex gap-1.5">
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-500/40" />
              </div>
              <span className="text-[9px] lg:text-[10px] font-mono opacity-40 uppercase tracking-widest font-bold">
                Main.tsx
              </span>
            </div>

            {/* List of Skills */}
            <div className="p-4 lg:p-6 space-y-4 lg:space-y-5">
              {[
                {
                  name: "React / Next.js",
                  icon: <Code className="w-4 h-4" />,
                  pct: "w-[95%]",
                },
                {
                  name: "JavaScript / TS ",
                  icon: <TerminalIcon className="w-4 h-4" />,
                  pct: "w-[92%]",
                },
                {
                  name: "Node.js / Express",
                  icon: <HardDrive className="w-4 h-4" />,
                  pct: "w-[78%]",
                },
                {
                  name: "Tailwind CSS / Shadcn UI",
                  icon: <Activity className="w-4 h-4" />,
                  pct: "w-[85%]",
                },
              ].map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`${colors.accent} opacity-50 group-hover:opacity-100 transition-opacity`}
                      >
                        {skill.icon}
                      </div>
                      <span
                        className={`text-[10px] lg:text-xs font-bold uppercase tracking-tight ${colors.textMain}`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[8px] lg:text-[9px] font-mono opacity-30">
                      STABLE
                    </span>
                  </div>
                  <div
                    className={`h-1 w-full rounded-full ${
                      isDark ? "bg-zinc-800" : "bg-zinc-200"
                    } overflow-hidden`}
                  >
                    <div
                      className={`h-full ${colors.accentBg} ${skill.pct} transition-all duration-1000 group-hover:brightness-125`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`p-4 lg:p-6 border-t ${colors.border} bg-emerald-500/5`}
            >
              <button
                className={`w-full py-3 lg:py-4 rounded-3xl ${colors.accentBg} text-zinc-950 font-black text-[10px] lg:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-emerald-500/20`}
              >
                Analyze Work <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: Adjusted for mobile (flex-col on tiny screens) */}
      <div className="absolute bottom-6 lg:bottom-10 left-0 w-full px-6 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-30">
        <div className="flex items-center gap-4">
          <div
            className={`hidden sm:block h-px w-12 ${
              isDark ? "bg-white" : "bg-black"
            }`}
          />
          <span className="text-[8px] lg:text-[9px] font-mono uppercase tracking-[0.3em]">
            Lat: 28.6139 | Lon: 77.2090
          </span>
        </div>
        <div className="text-[8px] lg:text-[9px] font-mono uppercase tracking-[0.3em]">
          Secure Connection Established
        </div>
      </div>
    </section>
  );
}
