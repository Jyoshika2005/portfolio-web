export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          My<span className="text-blue-500">Portfolio</span>
        </h1>

        {/* Links */}
        <nav className="flex gap-6 text-slate-300 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#certifications" className="hover:text-white">Certificates</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

      </div>
    </header>
  );
}