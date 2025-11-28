import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import EnterpriseCases from "@/components/EnterpriseCases";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="projects">
        <FeaturedProjects />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <EnterpriseCases />

      <Testimonial />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
