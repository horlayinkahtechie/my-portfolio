"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiFileText, FiGithub } from "react-icons/fi";

// Import your project images
import RestaurantReservationSystem from "../../public/Admin-dashboard.png";
import TheWildOasis from "../../public/the-wild-oasis.png";
import presidentialVotingSystem from "../../public/presidential-voting-system.png";
import booknesthero from "../../public/hero.png";
import savor from "../../public/Savour.png";
import UNIZIK from "../../public/UNIZIK.png";
import translationApp from "../../public/translateapp.png";
import lolaselanHero from "../../public/lolaselanHero.png";

export default function Projects() {
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

  const projects = [
    {
      title: "LolasÈlan",
      description:
        "Lolaselan is a UK-based E-commerce platform for an African women's fashion store, designed to provide her customers with a seamless online shopping experience. The website features a clean, user-friendly interface and a smooth, intuitive ordering process.",
      image: lolaselanHero,
      link: "/lolaselan",
      tags: ["E-commerce", "React", "Next.js"],
      type: "project",
    },
    {
      title: "BookNest",
      description:
        "BookNest is an online hotel booking system where users can book a room and pay from their device prior to their arrival. Booknest also has an integrated live chat for questions or support and an admin management system.",
      image: booknesthero,
      link: "/booknest-project",
      tags: ["Hotel Booking", "Fullstack", "Payment Integration"],
      type: "project",
    },
    {
      title: "Savor Restaurant Ordering and Reservation system",
      description:
        "Savor Restaurant Ordering and Reservation system allows authenticated users place orders, reserve a seat, with a payment system that allows users to pay for what they ordered.",
      image: savor,
      link: "/savour-project",
      tags: ["Restaurant", "Ordering System", "Reservation"],
      type: "project",
    },
    {
      title: "Savor Restaurant Admin Dashboard",
      description:
        "A fully functional Restaurant Admin Page where authorized admin can access user orders, mark order or reservation as completed, track revenue, total users, and manage menu items with a well designed UI.",
      image: RestaurantReservationSystem,
      link: "/savour-project-admin",
      tags: ["Admin Dashboard", "Analytics", "Management"],
      type: "project",
    },
    {
      title: "The Wild Oasis",
      description:
        "The Wild Oasis Web is a user friendly fullstack application. The purpose of this is to enable users to book cabins that WildOasis company offers.",
      image: TheWildOasis,
      link: "/the-wild-oasis-project",
      tags: ["Cabin Booking", "Fullstack", "Responsive"],
      type: "project",
    },
    {
      title: "Presidential Voting System",
      description:
        "The Presidential Voting system allows eligible, authenticated citizens to vote not more than once via a secure platform.",
      image: presidentialVotingSystem,
      link: "/voting-system-project",
      tags: ["Voting System", "Authentication", "Security"],
      type: "project",
    },
    {
      title: "UNIZIK Alumni Website",
      description:
        "I designed a user-friendly and responsive UNIZIK Alumni website for a Yaba College of Technology student for their final year project.",
      image: UNIZIK,
      liveLink: "https://lustrous-crisp-1be53a.netlify.app",
      reportLink: "/Uniziq-Alumni-Report.docx",
      tags: ["Alumni Portal", "Education", "Responsive"],
      type: "dual-link",
    },
    {
      title: "Nigerian Language Translation App",
      description:
        "A translation App that translates the three popular Nigerian Languages which is Igbo, Yoruba and Hausa to English with a simple User Interface.",
      image: translationApp,
      liveLink: "https://sprightly-sprinkles-7b74b9.netlify.app",
      reportLink: "/Translation-app-project-report.docx",
      tags: ["Translation", "Languages", "UI/UX"],
      type: "dual-link",
    },
  ];

  return (
    <section
      id="my-projects"
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
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I enjoy working on projects that challenge me to learn something
              new. Take a look at some of the applications I&apos;ve built:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    {project.type === "project" ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        View Project
                        <FiExternalLink className="ml-2" />
                      </Link>
                    ) : (
                      <div className="flex gap-4">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
                        >
                          Live Demo
                          <FiExternalLink className="ml-2" />
                        </Link>
                        <Link
                          href={project.reportLink}
                          target="_blank"
                          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors duration-300"
                        >
                          Report
                          <FiFileText className="ml-2" />
                        </Link>
                      </div>
                    )}

                    <div className="flex items-center text-xs text-gray-500">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                      Completed
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-400 mb-6">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/horlayinkahtechie"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-600"
            >
              <FiGithub className="mr-2" />
              View GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
