export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-8 text-white">
        Contact
      </h2>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-white shadow-lg">

        <p className="mb-4 text-lg">
          📧 Email:
          <a
            href="mailto:jyoshikatalakola2005@gmail.com"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            jyoshikatalakola2005@gmail.com
          </a>
        </p>

        <p className="mb-4 text-lg">
          📱 Phone:
          <a
            href="tel:+919876543210"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            +91 9876543210
          </a>
        </p>

        <p className="mb-6 text-lg">
          📍 Andhra Pradesh, India
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Jyoshika2005"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jyoshika-talakola/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition duration-300"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}