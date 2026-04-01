import React from "react";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Minimal Contact Section
 * Features a serene design with clear calls to action and premium animations.
 */
export default function Contact({ isDark }) {
  const colors = {
    textPrimary: isDark ? "text-white" : "text-zinc-950",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-500",
    border: isDark ? "border-white/5" : "border-black/5",
    accent: "text-emerald-500",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-6 bg-emerald-500/50" />
            <span className={`text-[10px] font-mono font-bold tracking-[0.5em] uppercase ${colors.accent}`}>
              Section_05
            </span>
            <div className="h-px w-6 bg-emerald-500/50" />
          </div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${colors.textPrimary}`}>
            Let's <span className="text-emerald-500 italic">Connect.</span>
          </h2>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className={`text-lg md:text-2xl font-medium leading-relaxed ${colors.textSecondary} mb-16 max-w-2xl mx-auto`}
        >
          Currently available for high-impact software engineering roles and strategic technical consultations.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* Primary CTA */}
          <motion.a
            href="mailto:asifimam999@gmail.com"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.3)] flex items-center gap-3`}
          >
            <Mail size={16} /> Send Email
          </motion.a>

          {/* Secondary CTAs */}
          <div className="flex gap-4">
             <motion.a
              href="https://wa.me/919911471995"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`p-5 rounded-full border ${colors.border} ${colors.textPrimary} hover:border-emerald-500/40 transition-all`}
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </motion.a>
            <motion.a
              href="tel:+919911471995"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`p-5 rounded-full border ${colors.border} ${colors.textPrimary} hover:border-emerald-500/40 transition-all`}
              aria-label="Phone"
            >
              <Phone size={18} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-20"
        >
           <a 
            href="mailto:asifimam999@gmail.com"
            className={`text-[9px] font-mono font-bold uppercase tracking-[0.3em] ${colors.textSecondary} hover:text-emerald-500 transition-colors inline-flex items-center gap-2`}
           >
             asifimam999@gmail.com <ArrowRight size={10} />
           </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

