import { Mail, MessageCircle, Phone } from "lucide-react";

export default function Contact({ isDark, theme }) {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="inline-block p-1 bg-linear-to-r from-emerald-500/50 to-cyan-500/50 rounded-full mb-10">
        <div
          className={`${theme.bg} px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest`}
        >
          Open for high-impact contracts
        </div>
      </div>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 italic uppercase">
        HAVE A BOTTLENECK? <br />
        <span className={theme.accent}>LET'S FIX IT.</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:asifimam999@gmail.com"
          className={`${theme.accentBg} text-white px-12 py-5 font-black rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-lg`}
        >
          <Mail className="w-5 h-5" /> HIRE ME
        </a>
        <a
          href="tel:+919911471995"
          className={`px-12 py-5 border-2 ${
            isDark
              ? "border-zinc-800 hover:bg-zinc-800"
              : "border-zinc-200 hover:bg-zinc-100"
          } font-black rounded-full flex items-center gap-3 transition-all`}
        >
          <Phone className="w-5 h-5" /> CALL
        </a>
        <a
          href="https://wa.me/919911471995"
          className={`px-12 py-5 border-2 ${
            isDark
              ? "border-zinc-800 hover:bg-zinc-800"
              : "border-zinc-200 hover:bg-zinc-100"
          } font-black rounded-full flex items-center gap-3 transition-all`}
        >
          <MessageCircle className="w-5 h-5" /> WHATSAPP
        </a>
      </div>
    </section>
  );
}
