import Navbar from "./_components/Navbar";
import Carousel from "./_components/Carousel";
import AboutMe from "./_components/About-me";
import MySkills from "./_components/MYSkills";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Alao Abdul-salam Olayinka",
  description: "A Frontend Developer",
};

export default function Home() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <Carousel />
      <AboutMe />
      <MySkills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
