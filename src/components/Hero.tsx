export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <img
        src="/profile.jpeg"
        alt="Profile"
        className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover shadow-xl"
      />

      <h1 className="mt-6 text-5xl md:text-7xl font-bold">
        Jyoshika Talakola
      </h1>

      <p className="mt-4 text-xl text-slate-300">
        Java Full Stack Developer
      </p>

      <p className="mt-4 max-w-2xl text-slate-400">
        Computer Science student passionate about Java, Spring Boot,
        Angular, Artificial Intelligence and Cloud Technologies.
      </p>

      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <button className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition">
          View Projects
        </button>

        <button className="px-6 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition">
          Contact Me
        </button>
      </div>

    </section>
  );
}