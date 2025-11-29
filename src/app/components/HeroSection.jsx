import {
  ArrowRight,
  Github,
  Layers,
  Linkedin,
  Mail,
  Palette,
  Zap,
} from "lucide-react";

export default function HeroSection(theme, isDark, typedText) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${theme.bgCard} border ${theme.border} mb-8`}
            >
              <span className="relative flex h-3 w-3">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                    isDark ? "bg-white" : "bg-black"
                  } opacity-75`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    isDark ? "bg-white" : "bg-black"
                  }`}
                ></span>
              </span>
              <span className={`text-sm ${theme.textSecondary}`}>
                Available for opportunities
              </span>
            </div>

            <div className="mb-6">
              <span className={`block ${theme.textTertiary} text-2xl mb-2`}>
                Hi, I'm a
              </span>
              <h1 className="text-7xl md:text-8xl font-bold">
                <span className="block">{typedText}</span>
                <span
                  className={`inline-block w-1 h-20 ${
                    isDark ? "bg-white" : "bg-black"
                  } ml-2 animate-pulse`}
                ></span>
              </h1>
            </div>

            <p
              className={`text-xl ${theme.textSecondary} mb-8 leading-relaxed max-w-xl`}
            >
              Crafting pixel-perfect, performant web experiences with React,
              Next.js, and modern JavaScript. Specialized in building scalable
              frontend architectures.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className={`group px-8 py-4 ${theme.accent} rounded-full hover:shadow-2xl hover:${theme.shadow} hover:shadow-opacity-50 transition-all flex items-center gap-2 font-medium`}
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className={`px-8 py-4 border-2 ${theme.border} rounded-full ${theme.borderHover} ${theme.bgCardHover} transition-all font-medium`}
              >
                Download CV
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
              >
                <Github
                  className={`w-5 h-5 ${isDark ? "text-black" : "text-white"}`}
                />
              </a>
              <a
                href="#"
                className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
              >
                <Linkedin
                  className={`w-5 h-5 ${isDark ? "text-black" : "text-white"}`}
                />
              </a>
              <a
                href="#"
                className={`p-3 ${theme.bgCard} rounded-2xl border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all`}
              >
                <Mail
                  className={`w-5 h-5 ${isDark ? "text-black" : "text-white"}`}
                />
              </a>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`col-span-2 ${theme.accent} rounded-3xl p-10 relative overflow-hidden transition-colors duration-500`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${
                  isDark ? "bg-black" : "bg-white"
                } opacity-5 rounded-full blur-2xl`}
              />
              <div className="relative">
                <div className="text-6xl font-bold mb-2">3+</div>
                <div className={isDark ? "text-gray-700" : "text-gray-300"}>
                  Years Experience
                </div>
              </div>
            </div>

            <div
              className={`${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-6 flex flex-col items-center justify-center ${theme.borderHover} transition-all group`}
            >
              <Zap
                className={`w-10 h-10 mb-3 group-hover:scale-110 transition-transform ${theme.textSecondary}`}
              />
              <div className={`text-center text-sm ${theme.textSecondary}`}>
                Fast Performance
              </div>
            </div>

            <div
              className={`${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-6 flex flex-col items-center justify-center ${theme.borderHover} transition-all group`}
            >
              <Layers
                className={`w-10 h-10 mb-3 group-hover:scale-110 transition-transform ${theme.textSecondary}`}
              />
              <div className={`text-center text-sm ${theme.textSecondary}`}>
                Clean Code
              </div>
            </div>

            <div
              className={`col-span-2 ${theme.bgCard} backdrop-blur border ${theme.border} rounded-3xl p-6 flex items-center justify-center ${theme.borderHover} transition-all group`}
            >
              <Palette
                className={`w-8 h-8 mr-4 group-hover:scale-110 transition-transform ${theme.textSecondary}`}
              />
              <div className={`text-center text-sm ${theme.textSecondary}`}>
                Pixel-Perfect Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
