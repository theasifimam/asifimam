import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Bell, Send, Github, Linkedin, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact({ isDark }) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const targetEmail = "asifimam999@gmail.com";
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${emailBody}`;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/theasifimam", icon: <Linkedin size={16} /> },
    { name: "GitHub", href: "https://github.com/theasifimam", icon: <Github size={16} /> },
    { name: "WhatsApp", href: "https://wa.me/919911471995", icon: <Phone size={16} /> }
  ];

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono font-black tracking-[0.5em] text-lime-accent uppercase">
            Section_05 // Contact
          </span>
          <div className="h-px w-8 bg-lime-accent/50" />
        </div>
        <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight text-black dark:text-white uppercase">
          Let's <span className="text-lime-accent italic">Connect.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Bio Details, Social Links & Availability Widget (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-8">
          <p className="text-base sm:text-xl font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
            Currently accepting select contract work, consulting roles, and senior software engineering positions. Use the form to reach out, or find me on my networks below.
          </p>

          {/* Socials Row */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-50 dark:bg-zinc-900 hover:bg-lime-accent hover:text-black border border-black/5 dark:border-white/5 font-sans font-black text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
              >
                {link.icon}
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="opacity-40" />
              </a>
            ))}
          </div>

          {/* Availability Switch (Screenshot 2 style widget) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-6 md:p-8 flex flex-col justify-between shadow-md"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[1.25rem] bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-lime-accent flex items-center justify-center border border-black/5 dark:border-white/5 shadow-sm shrink-0">
                  <Bell size={20} className={isAvailable ? "fill-lime-accent text-lime-accent" : ""} />
                </div>
                <div>
                  <span className="text-sm font-sans font-black text-black dark:text-white uppercase tracking-tight block">
                    Availability Status
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block mt-0.5">
                    Real-time connection
                  </span>
                </div>
              </div>
            </div>

            {/* Toggle Row */}
            <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-6">
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono font-black text-black dark:text-white uppercase">
                  {isAvailable ? "OPEN FOR OPPORTUNITIES" : "NOT BOOKING AT PRESENT"}
                </span>
                <span className="text-[10px] font-sans font-bold text-zinc-400 dark:text-zinc-500 mt-0.5">
                  {isAvailable ? "Let's kick off a conversation" : "Check back later"}
                </span>
              </div>

              {/* iOS-Style Toggle Switch */}
              <div
                onClick={() => setIsAvailable(!isAvailable)}
                className={`w-14 h-8 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-300 ${
                  isAvailable ? "bg-lime-accent" : "bg-zinc-300 dark:bg-zinc-800"
                }`}
              >
                <motion.div
                  layout
                  className="w-6 h-6 rounded-full bg-white dark:bg-black shadow-md"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ marginLeft: isAvailable ? "auto" : "0" }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Professional Message Form (lg:col-span-7) */}
        <div className="lg:col-span-7 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-950 border border-black/5 dark:border-white/10 shadow-2xl p-8 md:p-10 space-y-6"
          >
            <div className="border-b border-black/5 dark:border-white/10 pb-4 text-left">
              <span className="text-xs font-mono font-black text-lime-accent uppercase tracking-widest block mb-1">
                Direct Dispatch
              </span>
              <h3 className="text-2xl font-sans font-black text-black dark:text-white uppercase tracking-tight">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="flex flex-col items-start gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-[1.25rem] px-5 py-4 text-sm focus:border-lime-accent/50 outline-none text-black dark:text-white placeholder-zinc-400 transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col items-start gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-[1.25rem] px-5 py-4 text-sm focus:border-lime-accent/50 outline-none text-black dark:text-white placeholder-zinc-400 transition-colors"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="message" className="text-[10px] font-mono font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  Your Message
                  </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or request..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-[1.5rem] px-5 py-4 text-sm focus:border-lime-accent/50 outline-none text-black dark:text-white placeholder-zinc-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4.5 bg-lime-accent hover:bg-lime-accent-hover text-black font-sans font-black text-xs uppercase tracking-[0.25em] rounded-full shadow-[0_8px_20px_-6px_rgba(210,255,58,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Transmit message</span>
                  <Send size={12} className="stroke-[3]" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
