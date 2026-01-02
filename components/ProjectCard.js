export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-400/40 transition">
      
      {/* IMAGE */}
      <div className="bg-slate-800 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-contain p-4"
        />
      </div>

      {/* CONTENT */}
      <div className="px-6 pt-4 pb-5">
        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline"
        >
          View Project
          <span className="text-xs">↗</span>
        </a>
      </div>
    </div>
  );
}