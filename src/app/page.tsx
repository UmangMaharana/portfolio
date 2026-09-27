import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-rust/20 selection:text-ink">
      {/* Navigation Masthead */}
      <Navbar />

      {/* 01 — Cover / Hero */}
      <Hero />

      {/* 02 — About / The Lede */}
      <About />

      {/* 03 — Selected Work */}
      <Projects />

      {/* 04 — Capabilities / Technical Index */}
      <Skills />

      {/* 05 — Experience / Archive */}
      <Experience />

      {/* 06 — Education / Achievement */}
      <Education />

      {/* 07 — Final Statement / Contact */}
      <Contact />

      {/* 08 — Colophon / Footer */}
      <Footer />
    </main>
  );
}
