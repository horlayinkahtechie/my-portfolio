import Navbar from "./_components/Navbar";
import Carousel from "./_components/Carousel";
import AboutMe from "./_components/About-me";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ServicesSection from "./_components/my-services";
import Testimonials from "./_components/clientTestimonials";
export const metadata = {
  title: "Alao Abdul-salam Olayinka | Frontend Developer",
  description:
    "Welcome to my portfolio! I'm Abdul-salam, a passionate Frontend Developer skilled in React, Next.js, TailwindCSS, and more. View my projects and get in touch.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TailwindCSS",
    "Web Developer Nigeria",
    "Web Developer in Nigeria",
    "Alao Abdul-salam",
    "Abdul-salam Olayinka",
    "JavaScript Developer",
    "Software Engineer Portfolio",
    "NextJS Developer",
    "React Developer",
    "Frontend Developer in Nigeria",
  ],
  authors: [
    { name: "Alao Abdul-salam Olayinka", url: "https://abdulsalamalao.com" },
  ],
  creator: "Alao Abdul-salam Olayinka",
  publisher: "Alao Abdul-salam Olayinka",
  metadataBase: new URL("https://abdulsalamalao.com"),
  openGraph: {
    title: "Alao Abdul-salam Olayinka | Frontend Developer",
    description:
      "Explore my web development projects built with React, Next.js and more.",
    url: "https://abdulsalamalao.com",
    siteName: "Alao Abdul-salam Portfolio",
    images: [
      {
        url: "/Alao Abdulsalam.jpg",
        width: 1000,
        height: 630,
        alt: "Alao Abdul-salam Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alao Abdul-salam Olayinka | Frontend Developer",
    description: "Check out my projects built with NextJS, React, and more.",
    images: ["/Alao Abdulsalam.jpg"],
    creator: "@dev_olayinka",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  alternates: {
    canonical: "https://abdulsalamalao.com",
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
        <ServicesSection />
        <Projects />
        <Testimonials />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
