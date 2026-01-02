import React, { useRef, useState } from "react";
import {
  Zap,
  Activity,
  Terminal,
  ArrowUpRight,
  Cpu,
  Database,
  Code2,
  Server,
  Layers,
  Hexagon,
  Command,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SkillsHeroUltimate({ isDark = true }) {
  const containerRef = useRef(null);

  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    // Calculate rotation (-10 to 10 degrees)
    const xPct = (clientX / innerWidth - 0.5) * 2;
    const yPct = (clientY / innerHeight - 0.5) * 2;
    x.set(xPct);
    y.set(yPct);
  }

  // Transform values for the Card
  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);

  // Transform values for the Background Layers (Parallax)
  const bgX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const bgY = useTransform(mouseY, [-1, 1], [-20, 20]);

  const theme = {
    bg: isDark ? "bg-[#050505]" : "bg-zinc-50",
    text: isDark ? "text-zinc-100" : "text-zinc-900",
    border: isDark ? "border-white/10" : "border-black/5",
    accent: "text-emerald-500",
    accentGlow: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${theme.bg} perspective-[2000px]`}
      id="home"
    >
      {/* --- ATMOSPHERE LAYERS --- */}

      {/* 1. Cinematic Vignette (Focuses eye to center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#000000_120%)] pointer-events-none z-10 opacity-80" />

      {/* 2. Moving Grid Floor */}
      <motion.div
        style={{ x: bgX, y: bgY, rotateX: 45, scale: 1.5 }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[50px_50px]" />
      </motion.div>

      {/* 3. Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, i % 2 === 0 ? 50 : -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bg-emerald-500/20 blur-xl rounded-full"
            style={{
              width: 200 + i * 50,
              height: 200 + i * 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-20">
        {/* --- LEFT: TYPOGRAPHY --- */}
        <div className="relative">
          {/* Abstract Background Decoration for Text */}
          <motion.div
            style={{ x: useTransform(mouseX, [-1, 1], [10, -10]) }}
            className="absolute -left-20 -top-20 opacity-[0.05] pointer-events-none"
          >
            <Hexagon size={400} strokeWidth={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-emerald-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-emerald-500">
                System Architecture v3.0
              </span>
            </div>

            <h1
              className={`text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 ${theme.text}`}
            >
              Constructing <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-700">
                  Digital Reality.
                </span>
                {/* Text Glow Underlay */}
                <span className="absolute -inset-1 bg-emerald-500/10 blur-xl -z-10" />
              </span>
            </h1>

            <p className="text-lg text-zinc-500 max-w-md leading-relaxed mb-10 border-l-2 border-zinc-800 pl-6">
              Specialized in high-latency environments and complex state
              management. Turning chaotic data into{" "}
              <span className="text-emerald-400">structured elegance</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className={`relative px-8 py-4 bg-emerald-500 text-black font-bold uppercase tracking-widest text-xs rounded-none hover:bg-emerald-400 transition-all ${theme.accentGlow}`}
              >
                Execute
              </button>
              <button className="px-8 py-4 border border-zinc-800 text-zinc-400 font-bold uppercase tracking-widest text-xs hover:text-white hover:border-zinc-600 transition-colors flex items-center gap-2">
                <Command size={14} /> Documentation
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: THE 3D INTERACTIVE CARD --- */}
        <div className="perspective-[1000px] h-[600px] flex items-center justify-center">
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-md aspect-[4/5]"
          >
            {/* CARD BACK GLOW (Ambiance) */}
            <div className="absolute inset-4 bg-emerald-500 blur-[80px] opacity-20 -z-10 animate-pulse" />

            {/* THE GLASS SLAB */}
            <div
              className={`relative h-full w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col ${theme.accentGlow}`}
            >
              {/* Reflective Sheen Layer */}
              <motion.div
                style={{
                  background: useTransform(
                    mouseX,
                    [-1, 1],
                    [
                      "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.0) 60%, transparent 80%)",
                      "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.0) 60%, transparent 80%)",
                    ]
                  ),
                  x: useTransform(mouseX, [-1, 1], ["-100%", "100%"]),
                }}
                className="absolute inset-0 z-50 pointer-events-none"
              />

              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-wider">
                    Live
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col gap-8 relative">
                {/* Decorative Grid inside Card */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[20px_20px]" />

                {/* Metric Circles */}
                <div className="flex justify-between items-center z-10">
                  {[
                    { l: "Memory", v: "64GB" },
                    { l: "CPU", v: "12 Core" },
                    { l: "Ping", v: "14ms" },
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                        {m.l}
                      </div>
                      <div className="text-lg font-mono font-bold text-zinc-200">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Graphic - Animated Bars */}
                <div className="flex-1 flex items-end justify-between gap-2 z-10 pb-4 border-b border-white/5">
                  {[40, 70, 50, 90, 60, 80, 40].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "10%" }}
                      animate={{ height: [`${h}%`, `${h - 20}%`, `${h}%`] }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full bg-zinc-800 rounded-t-sm relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    </motion.div>
                  ))}
                </div>

                {/* Code/Terminal Area */}
                <div className="bg-black/40 rounded border border-white/5 p-4 font-mono text-[10px] text-zinc-400 z-10">
                  <div className="flex items-center gap-2 mb-2 text-zinc-600">
                    <Terminal size={10} />
                    <span>root@server:~</span>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <span className="text-green-500">➜</span>{" "}
                      <span className="text-blue-400">git</span> commit -m
                      "Optimize render"
                    </p>
                    <p>
                      <span className="text-green-500">➜</span>{" "}
                      <span className="text-blue-400">npm</span> run build
                    </p>
                    <p className="text-zinc-500 italic">
                      ... Compiling modules (98%)
                    </p>
                    <p className="text-emerald-500">
                      ✓ Build successful in 420ms
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements popping out of the card (Z-Axis) */}
              <motion.div
                style={{ translateZ: 40 }}
                className="absolute -right-6 top-20 bg-zinc-900 border border-emerald-500/30 p-3 rounded-lg shadow-xl"
              >
                <Activity size={20} className="text-emerald-500" />
              </motion.div>

              <motion.div
                style={{ translateZ: 60 }}
                className="absolute -left-4 bottom-32 bg-zinc-900 border border-blue-500/30 p-3 rounded-lg shadow-xl"
              >
                <Database size={20} className="text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
