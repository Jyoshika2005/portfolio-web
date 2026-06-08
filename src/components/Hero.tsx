export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

    <div className="relative flex justify-center mb-8">
  <div className="absolute w-[450px] h-[450px] bg-blue-500/30 rounded-full blur-[120px]" />
  <div className="absolute w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-[120px]" />

  <img
    src={import.meta.env.BASE_URL + "profile.jpeg"}
    alt="Profile"
    className="relative h-72 w-72 rounded-3xl object-cover border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.6)]"
  />
</div>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-extrabold">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Jyoshika Talakola
        </span>
      </h1>
      

      {/* Role */}
      <p className="mt-4 text-xl text-slate-300">
        Java Full Stack Developer
      </p>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-slate-400">
        Computer Science student passionate about Java, Spring Boot,
        Angular, Artificial Intelligence and Cloud Technologies.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}