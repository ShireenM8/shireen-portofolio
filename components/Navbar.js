export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-slate-900/70 backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-4">
        <ul
          className="
            flex justify-center
            gap-4
            py-4
            text-sm
            overflow-x-auto
            scrollbar-hide
          "
        >
          {[
            ["Home", "#hero"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Education", "#education"],
          ].map(([label, link]) => (
            <li key={label} className="flex-shrink-0">
              <a
                href={link}
                className="
                  px-4 py-1 rounded-full
                  text-gray-300
                  hover:text-white
                  hover:bg-cyan-400/10
                  transition
                  whitespace-nowrap
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}