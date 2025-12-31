import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3.5rem] ${
              isDark
                ? "bg-zinc-950 border-zinc-800"
                : "bg-white border-zinc-200"
            } border shadow-2xl no-scrollbar`}
          >
            {/* Close Button - Higher Z-index and visibility */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-emerald-500 transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Image Gallery (7 cols) */}
              <div
                className={`lg:col-span-7 p-4 md:p-10 ${
                  isDark ? "bg-zinc-900/50" : "bg-zinc-50"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {project.images && project.images.length > 0 ? (
                    project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full aspect-video (16/9) rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))
                  ) : (
                    /* Fallback if no images */
                    <div className="w-full aspect-video rounded-2xl bg-zinc-800 flex items-center justify-center border border-dashed border-zinc-700">
                      <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                        No Preview Available
                      </p>
                    </div>
                  )}

                  {/* Secondary small grids for "Details" look */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[4/3] rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                      <span className="text-[10px] text-emerald-500 font-mono">
                        DETAIL_VIEW_01
                      </span>
                    </div>
                    <div className="aspect-[4/3] rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                      <span className="text-[10px] text-emerald-500 font-mono">
                        DETAIL_VIEW_02
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right Column: Project Details (5 cols) */}
              <div className="lg:col-span-5 p-8 md:p-12 lg:sticky lg:top-0 h-fit">
                <div className="mb-8">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold font-mono ${theme.accent} bg-emerald-500/10 border border-emerald-500/20 tracking-tighter uppercase mb-4`}
                  >
                    {project.category}
                  </div>
                  <h2
                    className={`text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter ${
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

                {/* Tech Stack Tags */}
                <div className="mb-10">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40 font-mono">
                    Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 text-xs font-bold rounded-xl border ${
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

                {/* Features List */}
                <div className="mb-12">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40 font-mono">
                    Key Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.metrics?.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm font-semibold"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-emerald-500 mt-0.5 shrink-0"
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

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/20"
                  >
                    LAUNCH PROJECT <ExternalLink size={18} />
                  </a>
                  <a
                    href="#"
                    className={`flex items-center justify-center p-4 rounded-2xl border ${
                      theme.border
                    } hover:bg-zinc-800 transition-all ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    <Github size={24} />
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
