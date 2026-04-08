import React from "react";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Editorial Contact Section
 * Uses sharp lines and large negative space for a premium minimal feel.
 */
export default function Contact({ isDark }) {
  const colors = {
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-500",
    border: isDark ? "border-white/10" : "border-black/10",
    accent: "text-emerald-500",
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-20 md:mb-32"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
            Section_05
          </span>
          <div className="h-px w-8 bg-emerald-500/50" />
        </div>
        <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${colors.textPrimary}`}>
          Let's <span className="text-emerald-500 italic">Connect.</span>
        </h2>
      </motion.div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 border-t ${colors.border} pt-16`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <p className={`text-2xl md:text-3xl font-medium leading-relaxed ${colors.textSecondary} mb-8 max-w-lg`}>
            Currently available for high-impact software engineering roles and strategic technical consultations.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <a
            href="mailto:asifimam999@gmail.com"
            className={`group py-8 border-b ${colors.border} flex justify-between items-center text-2xl md:text-3xl font-black tracking-tight ${colors.textPrimary} hover:text-emerald-500 hover:pl-4 transition-all duration-500 w-full`}
          >
            Shoot an email
            <ArrowUpRight size={32} className="opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </a>
          
          <a
            href="https://wa.me/919911471995"
            className={`group py-8 border-b ${colors.border} flex justify-between items-center text-2xl md:text-3xl font-black tracking-tight ${colors.textPrimary} hover:text-emerald-500 hover:pl-4 transition-all duration-500 w-full`}
          >
            Drop a WhatsApp
            <ArrowUpRight size={32} className="opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

