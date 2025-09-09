"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiAward } from "react-icons/fi";

// Import your certificate images
import ReactCertificate from "../../public/React-certificate.jpg";
import JavaScriptCertificate from "../../public/JavaScript certificate.jpg";
import HTMLAndCSSCertificate from "../../public/HTML-and-CSS-certificate.jpg";
import VideoCreationCertificate from "../../public/Video Creation and Editing certificate.jpg";
import UXDesignFundamentals from "../../public/ux certificate.png";
import WireFrameAndLowFidelityPrototype from "../../public/low fidelity prototype certificate.png";

export default function Certifications() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const certifications = [
    {
      title: "Complete HTML and CSS Course",
      description:
        "In this course, I learnt everything I need to know about Website Design, from grid to flexbox, to coloring to website responsiveness.",
      image: HTMLAndCSSCertificate,
      link: "https://www.udemy.com/certificate/UC-313be613-34f9-4de6-b3cf-4c57627bccfe/",
      issuer: "Udemy",
      category: "Web Development",
    },
    {
      title: "Complete JavaScript Course from Zero to Expert",
      description:
        "In this course, I learnt everything I need to know about JavaScript, from String, Array, Objects, Loops, Conditional Statement and much more.",
      image: JavaScriptCertificate,
      link: "https://www.udemy.com/certificate/UC-0d8cc11e-2359-4c2e-94b1-e43b592a3abd/",
      issuer: "Udemy",
      category: "Programming",
    },
    {
      title: "ReactJS, NextJS, Supabase, TailwindCSS, Redux",
      description:
        "By completing this course, I was awarded this certificate of completion. The certificate also comes with a certificate ID that can be used to verify the certificate.",
      image: ReactCertificate,
      link: "https://www.udemy.com/certificate/UC-464d275f-751f-402b-837b-c8fa93410b46/",
      issuer: "Udemy",
      category: "Frontend Development",
    },
    {
      title: "Complete Video and Audio Creation at Home",
      description:
        "From this course, I was able to learn how to create a video, edit and enhance with AI tools such as Adobe Podcast, Adobe Premier Pro, OBS and Shotcut.",
      image: VideoCreationCertificate,
      link: "https://www.udemy.com/certificate/UC-719f42e4-6ee7-40b7-9fb0-e8e52c755364/",
      issuer: "Udemy",
      category: "Content Creation",
    },
    {
      title: "User Experience (UX) Design Fundamentals",
      description:
        "I was Introduced to the basics of User Experience. How to empathize, define and ideate what users need.",
      image: UXDesignFundamentals,
      link: "#",
      issuer: "Coursera",
      category: "UX Design",
    },
    {
      title: "Wireframing and Low Fidelity Prototyping",
      description:
        "In this course, I learnt about how to sketch a design on a paper and digitally.",
      image: WireFrameAndLowFidelityPrototype,
      link: "#",
      issuer: "Coursera",
      category: "UX Design",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-16 lg:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Through my experience, I have obtained multiple certifications
              that validate my expertise. These demonstrate my commitment to
              continuous learning and mastery of industry-standard technologies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-purple-600/80 text-purple-100 text-xs rounded-full backdrop-blur-sm">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-gray-800/80 text-gray-200 text-xs rounded-full backdrop-blur-sm">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg mr-4">
                      <FiAward className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Certificate Link */}
                  <Link
                    href={cert.link}
                    target="_blank"
                    className={`inline-flex items-center text-sm font-medium ${
                      cert.link !== "#"
                        ? "text-purple-400 hover:text-purple-300"
                        : "text-gray-500 cursor-not-allowed"
                    } transition-colors duration-300`}
                  >
                    {cert.link !== "#"
                      ? "View Certificate"
                      : "Certificate Link Coming Soon"}
                    {cert.link !== "#" && <FiExternalLink className="ml-2" />}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I believe in constantly upgrading my skills and staying updated
                with the latest technologies. These certifications represent my
                dedication to professional growth and excellence in web
                development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
