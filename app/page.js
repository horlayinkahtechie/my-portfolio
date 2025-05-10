import Navbar from "./_components/Navbar";
import Carousel from "./_components/Carousel";
import AboutMe from "./_components/About-me";
import MySkills from "./_components/MYSkills";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alao Abdul-salam Olayinka | Frontend Developer</title>
        <meta
          name="description"
          content="A Frontend Developer with experience in React, NextJS, TailwindCSS and much more. See my projects and get in touch."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abdul-salam | Frontend Developer" />
        <meta
          property="og:description"
          content="Experienced Frontend Developer. Explore my portfolio and web development projects."
        />
        {/* <meta property="og:image" content="/og-image.jpg" /> */}
        {/* <meta property="og:type" content="website" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
