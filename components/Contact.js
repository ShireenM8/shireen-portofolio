import { Mail, Linkedin, MapPin, Download } from "lucide-react";

export default function Contact() {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full z-40
        bg-slate-900/85 backdrop-blur-md
        border-t border-white/10
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 py-2
          flex items-center justify-between
          text-xs sm:text-sm
          text-gray-300
        "
      >
        {/* ================= LEFT - CONTACT INFO ================= */}
        <div className="flex items-center gap-4 sm:gap-6 flex-nowrap">

          {/* EMAIL */}
          <a
            href="mailto:shireenmalika.q@gmail.com"
            className="
              flex items-center gap-1.5
              hover:text-accent transition
              whitespace-nowrap
            "
          >
            <Mail size={16} className="text-accent shrink-0" />
            <span>
              <span className="font-medium">Email</span>
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/shireen-malika/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5
              hover:text-accent transition
              whitespace-nowrap
            "
          >
            <Linkedin size={16} className="text-accent shrink-0" />
            <span>
              <span className="font-medium">LinkedIn</span>
            </span>
          </a>

          {/* LOCATION */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <MapPin size={16} className="text-accent shrink-0" />
            <span>South Jakarta</span>
          </div>
        </div>

        {/* ================= CENTER - CTA ================= */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 text-gray-200 font-medium">
          Let&apos;s work together —
          <span className="text-accent ml-1">Contact Me</span>
        </div>

        {/* ================= RIGHT - DOWNLOAD CV ================= */}
        <a
          href="/CV-Shireen-Malika.pdf"
          download
          className="
            flex items-center gap-2
            px-3 sm:px-4 py-1
            rounded-full
            border border-accent
            text-accent
            hover:bg-accent hover:text-slate-900
            transition
            whitespace-nowrap
          "
        >
          <Download size={14} />
          <span className="font-medium">
            CV
          </span>
        </a>
      </div>
    </footer>
  );
}