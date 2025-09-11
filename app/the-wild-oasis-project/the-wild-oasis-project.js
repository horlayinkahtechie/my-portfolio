"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayout,
  FiDatabase,
  FiServer,
  FiHome,
  FiCalendar,
  FiUser,
  FiCreditCard,
  FiShield,
  FiMap,
} from "react-icons/fi";

// Import your images
import WildOasis from "../../public/WebWildOasisLanding.webp";
import WildOasisCabin from "../../public/WebWildOasisCabin.webp";
import WildOasisCabins from "../../public/WebWildOasisCabins.webp";
import WildOasisAbout from "../../public/WebWildOasisAbout.webp";
import WildOasisReservation from "../../public/WebWildOasisReservations.webp";
import WildOasisStripe from "../../public/WebWildOasisStripe.webp";

import Footer from "../_components/Footer";
import Contact from "../_components/Contact";
import ProjectNav from "../_components/ProjectNav";

export default function TheWildOasisProject() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

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

  const techStack = [
    { name: "React", icon: <FiCode className="w-5 h-5" /> },
    { name: "TailwindCSS", icon: <FiLayout className="w-5 h-5" /> },
    { name: "Supabase", icon: <FiDatabase className="w-5 h-5" /> },
    { name: "Next.js", icon: <FiServer className="w-5 h-5" /> },
    { name: "Axios", icon: <FiServer className="w-5 h-5" /> },
    { name: "Stripe", icon: <FiCreditCard className="w-5 h-5" /> },
    { name: "Netlify", icon: <FiServer className="w-5 h-5" /> },
  ];

  const features = [
    "User Sign up",
    "User Log in",
    "User Profile",
    "Cabin Reservation",
    "Payment System",
    "Cabin Management",
  ];

  const developmentPhases = [
    {
      phase: "Phase 1",
      title: "Cabins Display",
      description:
        "Cabins page where visitors can see all cabin information and sort available options.",
    },
    {
      phase: "Phase 2",
      title: "Authentication",
      description:
        "Implemented NextAuth for login and created profile pages with reservation management.",
    },
    {
      phase: "Phase 3",
      title: "Reservation System",
      description:
        "Created reservation functionality with date selection, guest count, and breakfast options.",
    },
    {
      phase: "Phase 4",
      title: "Reservation Management",
      description:
        "Enabled users to view, edit, and delete their existing reservations.",
    },
    {
      phase: "Phase 5",
      title: "Payment Integration",
      description:
        "Integrated Stripe for secure payment processing of reservations.",
    },
  ];

  return (
    <main className="bg-gray-900 min-h-screen">
      <ProjectNav />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-gray-900"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-white text-center mb-6"
            >
              The Wild{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Oasis
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 text-center mb-8 leading-relaxed"
            >
              A full-stack Next.js cabin reservation application with seamless
              booking, user authentication, and secure payment processing for
              nature retreats.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="https://the-wild-oasis-web-black.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
              >
                <FiExternalLink className="w-5 h-5" />
                Live Preview
              </a>
              <a
                href="https://github.com/horlayinkahtechie/tomats.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <FiGithub className="w-5 h-5" />
                GitHub Repo
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
            >
              <Image
                src={WildOasis}
                alt="The Wild Oasis Landing Page"
                className="w-full h-auto"
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiHome className="w-6 h-6 text-emerald-400" />
                Features
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiCode className="w-6 h-6 text-emerald-400" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiMap className="w-6 h-6 text-emerald-400" />
                Project Details
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Full-stack cabin reservation system with five-phase
                  development approach for nature retreat bookings.
                </p>
                <div className="flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  <span>Role: Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiServer className="w-5 h-5" />
                  <span>Deployment: Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
            >
              Development <span className="text-emerald-400">Phases</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {developmentPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="text-emerald-400 text-sm font-semibold mb-2">
                    {phase.phase}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold text-white mb-12"
            >
              Implementation <span className="text-emerald-400">Approach</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The project followed a structured five-phase approach, starting
                with cabin display functionality, followed by authentication,
                reservation creation, management features, and finally payment
                integration.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This incremental development strategy ensured each component was
                thoroughly tested and integrated before moving to the next
                phase, resulting in a robust and user-friendly application.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          >
            Application <span className="text-emerald-400">Screenshots</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              WildOasisCabin,
              WildOasisReservation,
              WildOasisCabins,
              WildOasisAbout,
              WildOasisStripe,
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500 transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`Wild Oasis screenshot ${index + 1}`}
                  className="w-full h-auto"
                  placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
