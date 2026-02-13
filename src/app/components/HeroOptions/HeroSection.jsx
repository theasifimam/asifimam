import React, { useRef, useState } from "react";
import {
  Terminal,
  Hexagon,
  Command,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SkillsHeroUltimate({ isDark = true }) {
  const containerRef = useRef(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    { type: "info", text: "System initialized..." },
    { type: "success", text: "Ready for input." }
  ]);

  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement - reduced stiffness for smoother feel
  const mouseX = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 25 });

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    // Calculate rotation (-10 to 10 degrees)
    const xPct = (clientX / innerWidth - 0.5) * 2;
    const yPct = (clientY / innerHeight - 0.5) * 2;
    x.set(xPct);
    y.set(yPct);
  }

  // Transform values for the Card - Reduced intensity
  const rotateX = useTransform(mouseY, [-1, 1], [3, -3]);
  const rotateY = useTransform(mouseX, [-1, 1], [-3, 3]);

  // Transform values for the Background Layers (Parallax) - Reduced range
  const bgX = useTransform(mouseX, [-1, 1], [-10, 10]);
  const bgY = useTransform(mouseY, [-1, 1], [-10, 10]);

  const theme = {
    bg: isDark ? "bg-[#050505]" : "bg-white",
    text: isDark ? "text-zinc-100" : "text-zinc-900",
    subtext: isDark ? "text-zinc-500" : "text-zinc-600",
    border: isDark ? "border-white/10" : "border-zinc-200",
    cardBg: isDark ? "bg-zinc-900/40" : "bg-white/60",
    cardBorder: isDark ? "border-white/10" : "border-zinc-200/80",
    accent: "text-emerald-500",
    accentGlow: isDark ? "shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]" : "shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)]",
    headingGradient: isDark 
      ? "from-white via-zinc-400 to-zinc-700" 
      : "from-zinc-900 via-zinc-600 to-zinc-400",
  };

  const handleExecute = () => {
    setIsExecuting(true);
    setTerminalOutput(prev => [...prev, { type: "cmd", text: "> Executing sequence..." }]);
    
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, { type: "info", text: "Compiling assets..." }]);
    }, 800);

    setTimeout(() => {
      setTerminalOutput(prev => [...prev, { type: "success", text: "✓ Deployment successful." }]);
      setIsExecuting(false);
    }, 2500);
  };

  const handleDocumentation = () => {
    // Scroll to a features section or similar if it exists, otherwise just a visual feedback
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    } else {
         window.open('https://github.com', '_blank'); // Placeholder for docs
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${theme.bg} perspective-[2000px] transition-colors duration-500`}
      id="home"
    >
      {/* --- ATMOSPHERE LAYERS --- */}

      {/* 1. Cinematic Vignette (Focuses eye to center) - Tuned down for light mode */}
      <div className={`absolute inset-0 pointer-events-none z-10 ${isDark ? "bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#000000_120%)] opacity-80" : "bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#ffffff_120%)] opacity-40"}`} />

      {/* 2. Moving Grid Floor */}
      <motion.div
        style={{ x: bgX, y: bgY, rotateX: 45, scale: 1.5 }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className={`absolute inset-0 ${isDark ? "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"} bg-size-[50px_50px]`} />
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
            className={`absolute -left-20 -top-20 pointer-events-none ${isDark ? "opacity-[0.05]" : "opacity-[0.03]"}`}
          >
            <Hexagon size={400} strokeWidth={0.5} className={isDark ? "text-white" : "text-black"} />
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
                <span className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-br ${theme.headingGradient}`}>
                  Digital Reality.
                </span>
                {/* Text Glow Underlay */}
                <span className="absolute -inset-1 bg-emerald-500/10 blur-xl -z-10" />
              </span>
            </h1>

            <p className={`text-lg max-w-md leading-relaxed mb-10 border-l-2 pl-6 ${theme.subtext} ${isDark ? "border-zinc-800" : "border-zinc-200"}`}>
              Specialized in high-latency environments and complex state
              management. Turning chaotic data into{" "}
              <span className="text-emerald-500 font-medium">structured elegance</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className={`relative rounded-full px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-widest text-xs rounded-none hover:bg-emerald-400 active:scale-95 transition-all ${theme.accentGlow}`}
              >
                {isExecuting ? "Processing..." : "Execute"}
              </button>
              <button 
                onClick={handleDocumentation}
                className={`px-8 py-4 rounded-full border font-bold uppercase tracking-widest text-xs hover:text-emerald-500 hover:border-emerald-500 transition-colors flex items-center gap-2 ${isDark ? "border-zinc-800 text-zinc-400" : "border-zinc-300 text-zinc-600"}`}
              >
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
              className={`relative h-full w-full rounded-3xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col ${theme.accentGlow} transition-colors duration-300`}
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
              <div className={`p-6 border-b flex justify-between items-center ${isDark ? "border-white/5 bg-black/20" : "border-black/5 bg-white/40"}`}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${isExecuting ? 'animate-ping' : 'animate-pulse'}`} />
                  <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-wider">
                    {isExecuting ? "Live Exec" : "Live"}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col gap-8 relative">
                {/* Decorative Grid inside Card */}
                <div className={`absolute inset-0 opacity-[0.03] ${isDark ? "bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]"} bg-size-[20px_20px]`} />

                {/* Main Content - Code/Terminal Area */}
                <div className={`flex-1 rounded border p-4 font-mono text-[10px] z-10 overflow-hidden flex flex-col ${isDark ? "bg-black/40 border-white/5 text-zinc-400" : "bg-zinc-100/80 border-black/5 text-zinc-600"}`}>
                  <div className="flex items-center gap-2 mb-4 opacity-50 border-b pb-2 border-white/5">
                    <Terminal size={12} />
                    <span>root@server:~</span>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-2">
                    {terminalOutput.map((line, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-2"
                      >
                       <span className={line.type === 'cmd' ? "text-blue-500 shrink-0" : "text-emerald-500 shrink-0"}>➜</span>
                       <span className={`break-words ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>{line.text}</span>
                      </motion.div>
                    ))}
                    {isExecuting && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-emerald-500/50"
                        />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
