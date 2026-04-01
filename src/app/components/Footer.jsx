import React from "react";
import { Linkedin, Github, Mail, ArrowUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Minimal Footer
 * Features a refined design with clean typography and system status indicators.
 */
export default function Footer({ isDark = true }) {
  const currentYear = new Date().getFullYear();

  const colors = {
    bg: isDark ? "bg-[#050505]" : "bg-white",
    border: isDark ? "border-white/5" : "border-black/5",
    textPrimary: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-400",
    accent: "text-emerald-500",
  };

  const socials = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://linkedin.com/in/theasifimam" },
    { name: "GitHub", icon: <Github size={18} />, href: "https://github.com/theasifimam" },
    { name: "Email", icon: <Mail size={18} />, href: "mailto:asifimam999@gmail.com" },
    { name: "WhatsApp", icon: <MessageCircle size={18} />, href: "https://wa.me/919911471995" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`relative pt-32 pb-12 border-t ${colors.border} ${colors.bg} transition-colors duration-700`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <motion.div variants={itemVariants} className="max-w-sm">
            <div className={`font-black tracking-tighter text-3xl ${colors.textPrimary} mb-6`}>
              A<span className="text-emerald-500">.</span>
            </div>
            <p className={`text-base leading-relaxed ${colors.textSecondary}`}>
              Building high-performance digital systems with minimalist aesthetics and engineering precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-24">
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
               <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${colors.textSecondary} opacity-60`}>Socials</span>
               {socials.map((social) => (
                 <a 
                   key={social.name} 
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`text-xs font-bold uppercase tracking-widest ${colors.textSecondary} hover:text-emerald-500 transition-colors`}
                 >
                   {social.name}
                 </a>
               ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
               <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${colors.textSecondary} opacity-60`}>Status</span>
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className={`text-xs font-bold uppercase tracking-widest ${colors.textPrimary}`}>Available</span>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row */}
        <motion.div 
          variants={itemVariants}
          className={`pt-12 border-t ${colors.border} flex flex-col md:flex-row justify-between items-center gap-8`}
        >
          <p className={`text-[9px] font-mono font-bold uppercase tracking-[0.3em] ${colors.textSecondary}`}>
             © {currentYear} ASIF IMAM. DESIGNED FOR PERFORMANCE.
          </p>

          <button 
            onClick={scrollToTop}
            className={`group text-[9px] font-mono font-bold uppercase tracking-[0.3em] ${colors.textSecondary} hover:text-emerald-500 transition-colors flex items-center gap-2`}
          >
             Back to top <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
}

