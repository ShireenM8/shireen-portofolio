function Project({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition"
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid gap-6">
          <Project
            title="Fintech – Customer Churn Analysis"
            description="Analyzed customer behavior to identify churn drivers and present insights through a structured business deck."
            link="https://docs.google.com/presentation/d/1SWrvWhReJqqBcwj7yVHmfCJk_OWqTKWr/edit"
          />
          <Project
            title="Fintech – Reksadana Analysis with Python"
            description="Performed mutual fund analysis using Python for data processing and insight generation."
            link="https://docs.google.com/presentation/d/1BcvZlbpG9nmzfd8Fgfs8SWLDMqc3F4STouDFK9_W7Qk/edit"
          />
          <Project
            title="E-Commerce – Samba Data Visualization Analysis"
            description="Built interactive dashboards using Looker Studio to support e-commerce performance evaluation."
            link="https://docs.google.com/presentation/d/1h5jezE_-D3aRza9BDNTU7XdjtofSeN6nirMKMOmDiTQ/edit"
          />
          <Project
            title="Corporate – Understanding Business Problem"
            description="Focused on translating business questions into analytical frameworks and measurable KPIs."
            link="https://docs.google.com/presentation/d/1EUYswPE0_HoTAwR2bks62bDWFh_SZEOm/edit"
          />
        </div>
      </div>
    </section>
  );
}