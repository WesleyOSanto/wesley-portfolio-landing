import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import BrandApplications from '@/components/BrandApplications';
import UIStudies from '@/components/UIStudies';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects />
        <BrandApplications />
        <UIStudies />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
