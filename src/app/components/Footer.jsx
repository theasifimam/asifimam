import React from "react";
import { Linkedin, Github, Mail, ArrowUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ isDark = true }) {
  const currentYear = new Date().getFullYear();

  const colors = {
    bg: isDark ? "bg-[#09090b]" : "bg-white",
    border: isDark ? "border-white/10" : "border-black/5",
    textMain: isDark ? "text-white" : "text-zinc-900",
    textMuted: isDark ? "text-zinc-500" : "text-zinc-400",
    accent: "text-emerald-500",
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/theasifimam",
      color: "group-hover:text-blue-400",
      borderColor: "group-hover:border-blue-400/30",
    },
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/theasifimam",
      color: "group-hover:text-white",
      borderColor: "group-hover:border-white/30",
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:asifimam999@gmail.com",
      color: "group-hover:text-emerald-400",
      borderColor: "group-hover:border-emerald-400/30",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-4 h-4" />,
      href: "https://wa.me/919911471995",
      color: "group-hover:text-green-400",
      borderColor: "group-hover:border-green-400/30",
    },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`relative mt-20 border-t ${colors.border} ${colors.bg} transition-colors duration-700 pb-32 md:pb-12`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 font-black tracking-tighter text-2xl italic">
              <span className={colors.accent}>ASIF</span>
              <span className={colors.textMain}>IMAM</span>
            </div>
            <p
              className={`text-sm max-w-xs font-medium leading-relaxed ${colors.textMuted}`}
            >
              Building high-performance digital systems with precision and
              reliability.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group p-4 rounded-2xl border ${colors.border} ${colors.textMuted} transition-all duration-300 ${social.borderColor} ${social.color} bg-zinc-500/5`}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* MIDDLE ROW: SYSTEM SPECS */}
        <motion.div
          variants={itemVariants}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-dashed ${colors.border}`}
        >
          {[
            { label: "Status", value: "Available for Hire", active: true },
            { label: "Location", value: "Delhi, IN", active: false },
            {
              label: "Local Time",
              value: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              active: false,
            },
            { label: "Version", value: "2026.1.0", active: false },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">
                {stat.label}
              </p>
              <div className="flex items-center gap-2">
                {stat.active && (
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                )}
                <p className={`text-xs font-mono font-bold ${colors.textMain}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM ROW: COPYRIGHT & BACK TO TOP */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6"
        >
          <p
            className={`text-[10px] font-mono uppercase tracking-[0.2em] ${colors.textMuted}`}
          >
            © {currentYear} All Rights Reserved // Designed for Performance
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover="hover"
            className={`group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${colors.textMuted} hover:text-emerald-500 transition-colors`}
          >
            Back to Top
            <motion.div
              variants={{
                hover: {
                  y: -3,
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.4,
                  },
                },
              }}
              className={`p-2 rounded-lg border ${colors.border} group-hover:border-emerald-500/50 transition-colors`}
            >
              <ArrowUp className="w-3 h-3" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* DECORATIVE LIGHT STREAK */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "50%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
      />
    </motion.footer>
  );
}
