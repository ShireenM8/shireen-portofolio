import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shireen Malika | Data Analyst</title>
        <meta name="description" content="Data Analyst Portfolio – Shireen Malika" />
      </Head>
      <main className="min-h-screen bg-gray-950 text-gray-100 font-sans">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="px-6 py-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Shireen Malika. All rights reserved.
        </footer>
      </main>
    </>
  );
}