export default function Skills() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Python</li>
            <li>SQL</li>
            <li>Tableau</li>
            <li>Power BI</li>
            <li>Looker Studio</li>
            <li>Spreadsheets</li>
            <li>Google Slides</li>
            <li>Microsoft Office</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Analytical Thinking</li>
            <li>Interpersonal Communication</li>
            <li>Collaboration</li>
            <li>Time Management</li>
            <li>Detail-Oriented Execution</li>
          </ul>
        </div>
      </div>
    </section>
  );
}