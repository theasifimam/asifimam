import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Minimal Project Modal
 * Features an editorial layout with high-impact typography and clean gallery.
 */
const ProjectModalComponent = ({ project, isOpen, onClose, isDark }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!project) return null;

  const colors = {
    bg: isDark ? "bg-[#000000]" : "bg-white",
    textPrimary: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-zinc-500" : "text-zinc-400",
    border: isDark ? "border-white/10" : "border-black/10",
    accent: "text-lime-accent",
    accentBg: "bg-lime-accent",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col lg:flex-row rounded-[2.5rem] ${colors.bg} ${colors.border} border shadow-2xl overflow-hidden`}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className={`absolute top-8 right-8 z-[110] p-4 rounded-full ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-black/5"} ${colors.textPrimary} backdrop-blur-xl border ${colors.border} transition-colors cursor-pointer`}
            >
              <X size={20} />
            </motion.button>

            {/* Gallery Section */}
            <div className={`w-full lg:w-[60%] h-[40%] lg:h-full border-b lg:border-b-0 lg:border-r ${colors.border} bg-black/5 flex flex-col`}>
              <div className="flex-1 overflow-x-auto snap-x snap-mandatory no-scrollbar flex">
                {project.images?.map((image, index) => (
                  <div key={index} className="min-w-full h-full snap-center p-8 md:p-16 flex items-center justify-center">
                    <img
                      src={image}
                      alt="Project preview"
                      className="w-full h-full object-contain rounded-2xl shadow-2xl"
                    />
                  </div>
                ))}
              </div>
              <div className="p-8 flex justify-center gap-2">
                 {project.images?.map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-lime-accent/40" />
                 ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[40%] h-[60%] lg:h-full flex flex-col overflow-y-auto no-scrollbar p-10 md:p-16">
              <div className="mb-12">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.3em] ${colors.accent} mb-6 block`}>
                  {project.category}
                </span>
                <h2 className={`text-4xl md:text-6xl font-sans font-black tracking-tight uppercase mb-8 ${colors.textPrimary}`}>
                  {project.title}
                </h2>
                <p className={`text-base leading-relaxed ${colors.textSecondary} mb-12`}>
                  {project.longDescription || project.description}
                </p>

                {/* Features List */}
                <div className="space-y-6 mb-16">
                   <h4 className={`text-[10px] font-mono font-black uppercase tracking-[0.2em] ${colors.textSecondary} opacity-60 mb-4`}>Highlights</h4>
                   {project.metrics?.map((f, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={18} className={colors.accent} />
                        <span className={`text-sm font-bold ${colors.textPrimary}`}>{f}</span>
                     </div>
                   ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-16">
                   {project.tech?.map((t, i) => (
                     <span key={i} className={`text-[10px] font-bold px-4 py-2 rounded-full border ${colors.border} ${colors.textSecondary}`}>
                       {t}
                     </span>
                   ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-4">
                 <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-lime-accent hover:bg-lime-accent-hover text-black font-sans font-black py-5 rounded-full transition-all shadow-lg shadow-lime-accent/20 cursor-pointer"
                  >
                    VISIT PROJECT <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 rounded-full border ${colors.border} ${colors.textPrimary} hover:border-lime-accent/40 transition-all cursor-pointer`}
                  >
                    <Github size={20} />
                  </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ProjectModal = React.memo(ProjectModalComponent);
