import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModalComponent = ({ project, isOpen, onClose, isDark, theme }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/10 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className={`relative w-full max-w-7xl h-full max-h-[85vh] lg:max-h-[80vh] flex flex-col lg:flex-row rounded-[2.5rem] md:rounded-[4rem] ${
              isDark
                ? "bg-zinc-950 border-zinc-800"
                : "bg-white border-zinc-200"
            } border shadow-2xl overflow-hidden`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-zinc-900/80 text-white hover:bg-emerald-500 transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            {/* LEFT COLUMN: SIDE-SCROLLABLE GALLERY */}
            <div
              className={`relative w-full lg:w-[60%] h-[40%] lg:h-full border-b lg:border-b-0 lg:border-r ${
                isDark
                  ? "bg-zinc-900/20 border-zinc-800"
                  : "bg-zinc-50 border-zinc-100"
              }`}
            >
              <div className="flex h-full overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                {project.images && project.images.length > 0 ? (
                  project.images.map((image, index) => (
                    <div
                      key={index}
                      className="min-w-full h-full snap-center flex items-center justify-center p-4 lg:p-12"
                    >
                      <img
                        src={image}
                        alt="Screenshot"
                        className="w-full h-full object-cover rounded-4xl shadow-2xl transition-transform duration-500"
                      />
                    </div>
                  ))
                ) : (
                  <div className="min-w-full flex items-center justify-center">
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                      Preview Missing
                    </p>
                  </div>
                )}
              </div>

              {/* Gallery Indicator Hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
                {project.images?.map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500/30"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: FIXED CONTENT AREA */}
            <div className="w-full lg:w-[40%] h-[60%] lg:h-full flex flex-col overflow-y-auto no-scrollbar">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold font-mono ${theme.accent} bg-emerald-500/10 border border-emerald-500/20 tracking-widest uppercase mb-4`}
                  >
                    {project.category}
                  </div>
                  <h2
                    className={`text-3xl md:text-5xl font-black mb-6 leading-none tracking-tighter ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {project.title}
                  </h2>
                  <p
                    className={`${theme.textMuted} text-base md:text-lg leading-relaxed font-medium`}
                  >
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mb-10">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40 font-mono">
                    Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border ${
                          isDark
                            ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                            : "bg-zinc-100 border-zinc-200 text-zinc-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40 font-mono">
                    Key Features
                  </h4>
                  <ul className="space-y-4">
                    {project.metrics?.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-4 text-sm font-semibold"
                      >
                        <CheckCircle2
                          size={20}
                          className="text-emerald-500 shrink-0"
                        />
                        <span
                          className={isDark ? "text-zinc-300" : "text-zinc-700"}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-full transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                  >
                    LAUNCH <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className={`flex items-center justify-center p-4 rounded-full border ${
                      theme.border
                    } hover:bg-zinc-800 hover:text-white transition-all active:scale-95 ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ProjectModal = React.memo(ProjectModalComponent);
