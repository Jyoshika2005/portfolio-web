export default function StatBar() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <p className="text-slate-400 text-sm">CGPA</p>
        <h3 className="text-white text-xl font-bold">8.5+</h3>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <p className="text-slate-400 text-sm">Projects</p>
        <h3 className="text-white text-xl font-bold">3+</h3>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <p className="text-slate-400 text-sm">Internship</p>
        <h3 className="text-white text-xl font-bold">4</h3>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <p className="text-slate-400 text-sm">Tech Stack</p>
        <h3 className="text-white text-xl font-bold">Full Stack</h3>
      </div>

    </div>
  );
}