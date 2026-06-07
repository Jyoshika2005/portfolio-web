const skills = [
  "Java",
  "Spring Boot",
  "Angular",
  "MySQL",
  "Git",
  "GitHub",
  "AWS",
  "Python",
  "Machine Learning",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-8">
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}