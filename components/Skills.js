const technicalSkills = [
  { name: "Python", icon: "/icons/python.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "Tableau", icon: "/icons/tableau.png" },
  { name: "Power BI", icon: "/icons/powerbi.png" },
  { name: "Looker Studio", icon: "/icons/looker.png" },
  { name: "Google Sheets", icon: "/icons/sheets.png" },
  { name: "Google Slides", icon: "/icons/slides.png" },
  { name: "Microsoft Office", icon: "/icons/microsoft.png" },
];

const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Stakeholder Communication",
  "Collaboration",
  "Attention to Detail",
  "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-4 gap-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <img src={skill.icon} className="h-12 mx-auto" />
                  <p className="text-sm mt-2 text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <ul className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <li key={s} className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}