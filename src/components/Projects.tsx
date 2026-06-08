
const projects = [
  {
    title: "Breast Cancer Detection System",
    image: import.meta.env.BASE_URL + "projects/breast-cancer.png",
    description: "ML model for cancer prediction using Python.",
    tech: ["Python", "Scikit-Learn", "Streamlit"],
    github: "https://github.com/Jyoshika2005/BreastCancer-ML-App"
  },
  {
    title: "Gesture Control System",
    image: import.meta.env.BASE_URL + "projects/gesture-control.png",
    description: "Control mouse using hand gestures.",
    tech: ["OpenCV", "MediaPipe", "Python"],
    github: "https://github.com/Jyoshika2005/gesture-control-computer-vision"
  },
  {
    title: "Smart Soil System",
    image: import.meta.env.BASE_URL + "projects/smart-soil.png",
    description: "IoT-based soil monitoring system.",
    tech: ["ESP32", "IoT", "Embedded C"],
    github: "https://github.com/Jyoshika2005/Smart-soil-Management"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-slate-300 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-slate-800 rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
>
  View Code
</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}