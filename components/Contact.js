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
          max-w-6xl mx-auto
          px-6 py-1
          flex items-center justify-between
          text-sm text-gray-400
        "
      >
        {/* LEFT - CONTACT INFO */}
        <div className="flex items-center gap-6">

          {/* EMAIL */}
          <a
            href="mailto:shireenmalika.q@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition"
          >
            <Mail size={16} className="text-accent" />
            <span className="hidden sm:inline">
              shireenmalika.q@gmail.com
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/shireen-malika/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition"
          >
            <Linkedin size={16} className="text-accent" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* LOCATION */}
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            <span className="hidden sm:inline">South Jakarta</span>
          </div>
        </div>

        {/* RIGHT - DOWNLOAD CV */}
        <a
          href="/cv.pdf"
          download
          className="
            flex items-center gap-2
            px-4 py-1
            rounded-full
            border border-accent
            text-accent
            hover:bg-accent hover:text-slate-900
            transition
          "
        >
          <Download size={14} />
          <span className="text-sm font-medium">CV</span>
        </a>
      </div>
    </footer>
  );
}