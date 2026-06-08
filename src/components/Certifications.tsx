import { Cloud, Brain, Code } from "lucide-react";

const certifications = [
  {
    title: "AWS Cloud Internship",
    issuer: "AICTE + AWS",
    year: "2026",
    file: "aws.pdf",
    type: "aws"
  },
  {
    title: "Gen AI Academy",
    issuer: "Google Cloud",
    year: "2025",
    file: "genai.pdf",
    type: "ai"
  },
  {
    title: "Java Full Stack",
    issuer: "AICTE",
    year: "2025",
    file: "java-fullstack.pdf",
    type: "java"
  }
];

function getIcon(type: string) {
  if (type === "aws") return <Cloud className="text-blue-400" />;
  if (type === "ai") return <Brain className="text-purple-400" />;
  return <Code className="text-green-400" />;
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-8">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <div className="text-3xl mb-3">
              {getIcon(cert.type)}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {cert.title}
            </h3>

            <p className="text-slate-400 mt-2">
              {cert.issuer}
            </p>

            <p className="text-blue-400 mt-1">
              {cert.year}
            </p>

            <a
              href={import.meta.env.BASE_URL + `certificates/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}