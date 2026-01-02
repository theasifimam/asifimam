import { Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact({ isDark, theme }) {
  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      id="contact"
    >
      {/* Badge Reveal */}
      <motion.div
        variants={itemVariants}
        className="inline-block p-1 bg-linear-to-r from-emerald-500/50 to-cyan-500/50 rounded-full mb-10"
      >
        <div
          className={`${theme.bg} px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest`}
        >
          Open for high-impact contracts
        </div>
      </motion.div>

      {/* Heading with a slight scale-up */}
      <motion.h2
        variants={itemVariants}
        className="text-5xl md:text-7xl font-black tracking-tighter mb-12 italic uppercase"
      >
        HAVE A BOTTLENECK? <br />
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={theme.accent}
        >
          LET'S FIX IT.
        </motion.span>
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-6"
      >
        {/* Primary CTA with pulse effect */}
        <motion.a
          href="mailto:asifimam999@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${theme.accentBg} text-white px-12 py-5 font-black rounded-full flex items-center gap-3 shadow-lg relative overflow-hidden group`}
        >
          <Mail className="w-5 h-5" /> HIRE ME
        </motion.a>

        {/* Secondary CTA: Call */}
        <motion.a
          href="tel:+919911471995"
          whileHover={{
            y: -5,
            backgroundColor: isDark
              ? "rgba(39, 39, 42, 1)"
              : "rgba(244, 244, 245, 1)",
          }}
          whileTap={{ scale: 0.95 }}
          className={`px-12 py-5 border-2 ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          } font-black rounded-full flex items-center gap-3 transition-colors`}
        >
          <Phone className="w-5 h-5" /> CALL
        </motion.a>

        {/* Secondary CTA: WhatsApp */}
        <motion.a
          href="https://wa.me/919911471995"
          whileHover={{
            y: -5,
            backgroundColor: isDark
              ? "rgba(39, 39, 42, 1)"
              : "rgba(244, 244, 245, 1)",
          }}
          whileTap={{ scale: 0.95 }}
          className={`px-12 py-5 border-2 ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          } font-black rounded-full flex items-center gap-3 transition-colors`}
        >
          <MessageCircle className="w-5 h-5" /> WHATSAPP
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
