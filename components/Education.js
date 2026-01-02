import { ExternalLink } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "RevoU",
      degree: "Full-Stack Data Analytics",
      start: "Jan 2023",
      end: "May 2023",
      logo: "/education/revou.png",
    },
    {
      institution: "State University of Malang",
      degree: "Bachelor in Statistics",
      start: "Aug 2018",
      end: "Aug 2022",
      logo: "/education/um.PNG",
    },
  ];

  const certifications = [
    {
      title: "Career Skills in Data Analytics",
      issuer: "LinkedIn Learning",
      year: "Dec 2025",
      logo: "/education/linkedin.jpg",
      file: "https://www.linkedin.com/learning/certificates/8c03f94c653adf9f5537d1ad9748e8e1d34fbbaec33f9427e61929571becb793",
    },
    {
      title: "Full Stack Data Analytics",
      issuer: "RevoU",
      year: "Apr 2023",
      logo: "/education/revou.png",
      file: "/certificates/Full-Stack-DA.pdf",
    },
    {
      title: "Product Management Mini Course",
      issuer: "RevoU",
      year: "Sep 2022",
      logo: "/education/revou.png",
      file: "/certificates/PM-mini-course.pdf",
    },
    {
      title: "Data Analytics Mini Course",
      issuer: "RevoU",
      year: "Jun 2022",
      logo: "/education/revou.png",
      file: "/certificates/DA-mini-course.pdf",
    },
  ];

  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

        {/* ================= EDUCATION ================= */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-white">
            Education
          </h2>

          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="
                  flex items-center gap-4
                  p-3 rounded-2xl
                  bg-slate-900/70
                  border border-slate-800
                "
              >
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-slate-300">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-slate-500">
                    {edu.start} – {edu.end}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-white">
            Certifications
          </h2>

          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  p-4 rounded-2xl
                  bg-slate-900/70
                  border border-slate-800
                  hover:border-cyan-400
                  transition
                "
              >
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-14 h-14 object-contain"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>

                {/* External link icon */}
                <ExternalLink
                  size={18}
                  className="text-slate-400 group-hover:text-cyan-400 transition"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}