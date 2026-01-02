import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fintech – Customer Churn Analysis",
    description:
      "Identified churn drivers through exploratory data analysis and customer segmentation, supporting targeted retention strategies to reduce churn by 5% within 12 months.",
    image: "/projects/churn.png",
    link: "https://docs.google.com/presentation/d/1SWrvWhReJqqBcwj7yVHmfCJk_OWqTKWr/edit",
  },
  {
    title: "Mutual Fund & Campaign Analysis",
    description:
      "Analyzed mutual fund performance using Python and developed user segmentation to recommend data-driven thematic marketing campaigns for the following month.",
    image: "/projects/reksadana.png",
    link: "https://docs.google.com/presentation/d/1BcvZlbpG9nmzfd8Fgfs8SWLDMqc3F4STouDFK9_W7Qk/edit",
  },
  {
    title: "E-Commerce Dashboard Analysis",
    description:
      "Designed executive dashboards in Looker Studio and Tableau to monitor sales, growth, and operational performance across key business metrics.",
    image: "/projects/dashboard.png",
    link: "https://docs.google.com/presentation/d/1h5jezE_-D3aRza9BDNTU7XdjtofSeN6nirMKMOmDiTQ/edit",
  },
  {
    title: "Business Problem Framing",
    description:
      "Translated HR attrition challenges into analytical frameworks and KPIs, supporting strategic initiatives to reduce employee turnover from 15% to 5%.",
    image: "/projects/business.png",
    link: "https://docs.google.com/presentation/d/1EUYswPE0_HoTAwR2bks62bDWFh_SZEOm/edit",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}