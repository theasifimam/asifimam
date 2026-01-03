import React from "react";
import {
  Zap,
  Activity,
  Terminal as TerminalIcon,
  ArrowUpRight,
  Cpu,
  Database,
  Code2,
  Lock,
  Wifi,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection1({ isDark = true }) {
  // Theme Configuration
  const theme = {
    bg: isDark ? "bg-zinc-950" : "bg-zinc-50",
    text: isDark ? "text-zinc-100" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500",
    accentBorder: "border-emerald-500/20",
    glass: isDark ? "bg-zinc-900/40" : "bg-white/60",
    border: isDark ? "border-white/5" : "border-black/5",
  };

  // Mock Data for the "Live Monitor"
  const skills = [
    { label: "Frontend Architecture", val: 98, icon: <Layers size={14} /> },
    { label: "Backend / Node.js", val: 85, icon: <Database size={14} /> },
    { label: "WebGL / Performance", val: 92, icon: <Cpu size={14} /> },
  ];

  const systemMetrics = [
    { label: "UPTIME", val: "99.9%", color: "text-emerald-400" },
    { label: "LATENCY", val: "12ms", color: "text-yellow-400" },
    { label: "DEPLOY", val: "EDGE", color: "text-blue-400" },
  ];

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden pt-24 lg:pt-16 flex flex-col justify-center ${theme.bg} selection:bg-emerald-500/30`}
      id="home"
    >
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Base Grid with Perspective */}
      <div className="absolute inset-0 perspective-[1000px] opacity-[0.15] pointer-events-none">
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[60px_60px] [transform:rotateX(20deg)_scale(1.2)]`}
        />
      </div>

      {/* 2. Ambient Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* 3. Massive Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
        <h1
          className={`text-[15vw] font-black leading-none opacity-[0.03] ${theme.text} select-none`}
        >
          //asif_imam
        </h1>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT COLUMN: Typography & Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className={`px-3 py-1 rounded-full border ${theme.border} ${theme.glass} backdrop-blur-md flex items-center gap-2`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span
                className={`text-[10px] font-mono font-bold tracking-widest ${theme.textMuted} uppercase`}
              >
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2
              className={`text-5xl sm:text-7xl lg:text-[7.5rem] font-extrabold tracking-tighter ${theme.text} mb-6`}
            >
              FULL STACK <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-700">
                VELOCITY.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl ${theme.textMuted} max-w-lg leading-relaxed mb-10`}
          >
            Architecting high-performance digital interfaces with{" "}
            <span className={`${theme.text} font-semibold`}>pixel-perfect</span>{" "}
            precision. Bridging the gap between creative design and engineering
            logic.
          </motion.p>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            /* 'gap-3' for mobile, 'gap-4' for desktop. 'justify-center' helps on mobile */
            className="flex items-center justify-start sm:justify-start gap-3 lg:gap-4"
          >
            {/* BUTTON 1: GET IN TOUCH */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              /* Reduced padding on mobile: 'px-5 py-3' vs desktop 'sm:px-8 sm:py-4' */
              className="group relative px-5 py-3 sm:px-8 sm:py-4 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all rounded-full overflow-hidden active:scale-95 inline-block"
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
                className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent skew-x-12"
              />
              {/* Text size: 'text-[10px]' on mobile, 'sm:text-xs' on desktop */}
              <span className="relative flex items-center gap-2 sm:gap-3 text-emerald-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Get In Touch
              </span>
            </button>

            {/* BUTTON 2: VIEW CASE STUDIES */}
            <button
              className={`group px-5 py-3 sm:px-8 sm:py-4 border ${theme.border} ${theme.text} font-bold uppercase tracking-wider text-[10px] sm:text-xs rounded-full hover:bg-zinc-800/50 transition-colors flex items-center gap-2`}
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Shrunk icon size for mobile */}
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
              View Case Studies
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The "Glass Monitor" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Decorative Elements around card */}
          <div className="absolute -inset-1 bg-linear-to-b from-emerald-500/20 to-transparent rounded-2xl blur-xl opacity-50" />

          <div
            className={`relative rounded-2xl border ${theme.border} ${theme.glass} backdrop-blur-xl overflow-hidden shadow-2xl`}
          >
            {/* Monitor Header */}
            <div
              className={`flex items-center justify-between px-5 py-4 border-b ${theme.border} bg-zinc-950/20`}
            >
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
              </div>
              <div className="flex items-center gap-2">
                <Wifi size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  Connected: Localhost:3000
                </span>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-3 gap-4">
                {systemMetrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 mb-1">
                      {m.label}
                    </span>
                    <span className={`text-sm font-black font-mono ${m.color}`}>
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skill Bars */}
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`p-1 rounded bg-white/5 ${theme.accent}`}
                        >
                          {skill.icon}
                        </span>
                        <span className={`text-xs font-bold ${theme.text}`}>
                          {skill.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-500">
                        {skill.val}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden relative">
                      {/* Grid background in bar */}
                      <div className="absolute inset-0 w-full h-full opacity-20 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-size-[4px_100%]" />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.2 + i * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-emerald-500 relative"
                      >
                        {/* Glow at tip */}
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code Snippet Area */}
              <div
                className={`mt-6 p-4 rounded bg-black/20 border ${theme.border} relative overflow-hidden group`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50" />
                <pre className="font-mono text-[10px] leading-relaxed text-zinc-400">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">optimize</span> = () ={">"}{" "}
                    {"{"} {"\n"}
                    {"  "} <span className="text-purple-400">return</span>{" "}
                    <span className="text-yellow-300">new</span>{" "}
                    <span className="text-emerald-400">Promise</span>((resolve)
                    ={">"} {"{"} {"\n"}
                    {"    "}{" "}
                    <span className="text-zinc-500">// Injecting logic...</span>{" "}
                    {"\n"}
                    {"    "} resolve(
                    <span className="text-orange-300">"Success"</span>); {"\n"}
                    {"  "} {"}"});{"\n"}
                    {"}"}
                  </code>
                </pre>
                {/* Scanning Line Animation */}
                <motion.div
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-3 border-t border-white/5 bg-zinc-900/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-zinc-500" />
                <span className="text-[9px] text-zinc-500 uppercase tracking-wider">
                  System Normal
                </span>
              </div>
              <div className="text-[9px] text-zinc-600 font-mono">v2.4.0</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER TICKER --- */}
      <div className="absolute bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-3 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                <TerminalIcon size={10} className="text-emerald-500" />
                React_Next.JS_Architecture
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                <Zap size={10} className="text-emerald-500" />
                Latency_Optimization_Protocol
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                <Lock size={10} className="text-emerald-500" />
                Secure_Deployment_Ready
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
