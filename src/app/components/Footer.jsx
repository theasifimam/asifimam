import { Code2 } from "lucide-react";

export default function Footer(theme) {
  return (
    <footer className={`border-t ${theme.border} py-12 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 ${theme.accent} rounded-2xl flex items-center justify-center`}
            >
              <Code2 className="w-5 h-5" />
            </div>
            <span className={theme.textTertiary}>
              © 2024 All rights reserved
            </span>
          </div>
          <div className="flex gap-4">
            {[
              { name: "GitHub", link: "https://github.com/theasifimam" },
              {
                name: "LinkedIn",
                link: "https://linkedin.com/in/theasifimam",
              },
              { name: "Twitter", link: "https://x.com/theasifimam" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blanck"
                className={`px-5 py-2 ${theme.bgCard} rounded-full border ${theme.border} ${theme.borderHover} ${theme.bgCardHover} transition-all text-sm ${theme.textSecondary}`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
