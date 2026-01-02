import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pb-28">
        <Hero />
        <div className="section-divider" />

        <Skills />
        <div className="section-divider" />

        <Projects />
        <div className="section-divider" />

        <Education />
      </main>

      <Contact />
    </>
  );
}