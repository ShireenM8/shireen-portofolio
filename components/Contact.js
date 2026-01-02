import { Mail, Linkedin, MapPin, Download } from "lucide-react";

export default function Contact() {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full z-40
        bg-slate-900/80 backdrop-blur-md
        border-t border-white/10
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-2
          flex items-center justify-between
          text-sm text-gray-400
        "
      >
        {/* ================= LEFT - CONTACT INFO ================= */}
        <div className="flex items-center gap-6 flex-nowrap">

          {/* EMAIL */}
          <a
            href="mailto:shireenmalika.q@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition whitespace-nowrap"
          >
            <Mail size={16} className="text-accent shrink-0" />
            <span className="hidden sm:inline">
              shireenmalika.q@gmail.com
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/shireen-malika/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition whitespace-nowrap"
          >
            <Linkedin size={16} className="text-accent shrink-0" />
            <span className="hidden sm:inline">
              LinkedIn
            </span>
          </a>

          {/* LOCATION */}
          <div className="flex items-center gap-2 flex-nowrap">
            <MapPin size={16} className="text-accent shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">
              South Jakarta
            </span>
          </div>
        </div>

        {/* ================= CENTER - CTA ================= */}
        <div className="hidden md:block">
          <span className="text-gray-300 font-medium tracking-wide">
            Let&apos;s work together —
            <span className="text-accent ml-1">Contact Me</span>
          </span>
        </div>

        {/* ================= RIGHT - DOWNLOAD CV ================= */}
        <a
          href="/CV-Shireen-Malika.pdf"
          download
          className="
            flex items-center gap-2
            px-4 py-0.9
            rounded-full
            border border-accent
            text-accent
            hover:bg-accent hover:text-slate-900
            transition
            whitespace-nowrap
          "
        >
          <Download size={14} />
          <span className="text-sm font-medium">
            CV
          </span>
        </a>
      </div>
    </footer>
  );
}