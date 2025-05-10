import Navbar from "./_components/Navbar";
import Carousel from "./_components/Carousel";
import AboutMe from "./_components/About-me";
import MySkills from "./_components/MYSkills";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
export const metadata = {
  title: "Alao Abdul-salam Olayinka | Frontend Developer",
  description:
    "A Frontend Developer with experience in React, NextJS, TailwindCSS and much more. See my projects and get in touch.",
  openGraph: {
    title: "Alao Abdul-salam Olayinka| Frontend Developer",
    description:
      "Experienced Frontend Developer. Explore my portfolio and web development projects.",
    // images: ['/og-image.jpg'],
    type: "website",
    url: "https://abdulsalamalao.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alao Abdul-salam Olayinka | Frontend Developer",
    description:
      "Experienced Frontend Developer. Explore my portfolio and web development projects.",
    // images: ['/og-image.jpg'],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <>
      <main className="bg-gray-900">
        <Navbar />
        <Carousel />
        <AboutMe />
        <MySkills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
