import Navigation from "@/components/Navigation";
import Hero from "@/components/HeroClean";
import About from "@/components/About";
import Skills from "@/components/SkillsNew";
import Experience from "@/components/ExperienceNew";
import Education from "@/components/EducationNew";
import Projects from "@/components/ProjectsNew";
import Contact from "@/components/ContactProfessional";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
