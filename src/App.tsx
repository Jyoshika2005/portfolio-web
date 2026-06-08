import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StatBar from "./components/StatBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white overflow-x-hidden">
      <Navbar />

      <div id="home">
        <Hero />
        <StatBar />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <Experience />

      <div id="projects">
        <Projects />
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}