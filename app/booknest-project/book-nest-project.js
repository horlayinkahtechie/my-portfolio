"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FiGithub,
  FiExternalLink,
  FiArrowDown,
  FiCode,
  FiLayout,
  FiDatabase,
  FiServer,
  FiHome,
  FiUsers,
  FiMessageSquare,
  FiBarChart2,
  FiMail,
  FiShield,
  FiCreditCard,
  FiCalendar,
} from "react-icons/fi";

// Import your images
import booknest from "../../public/hero.png";
import booknestHeroWithLiveChat from "../../public/hero-with-live-chat.png";
import booknestCheckout from "../../public/booknest-checkout.png";
import booknestAbout from "../../public/about-booknest.png";
import booknestLuxuryListing from "../../public/luxury-listing.png";
import booknestStandardListing from "../../public/standard-listing.png";
import booknestBasicListing from "../../public/basic-listing.png";
import booknestFooter from "../../public/footer.png";
import dashboard from "../../public/dashboard.png";
import messages from "../../public/messages.png";
import bookings from "../../public/bookings.png";
import analytics from "../../public/analytics.png";
import profile from "../../public/profile.png";
import users from "../../public/users.png";
import rooms from "../../public/rooms.png";

import Footer from "../_components/Footer";
import Contact from "../_components/Contact";
import ProjectNav from "../_components/ProjectNav";

export default function BookNestProject() {
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
    { name: "Next.js", icon: <FiLayout className="w-5 h-5" /> },
    { name: "TailwindCSS", icon: <FiLayout className="w-5 h-5" /> },
    { name: "Next Router", icon: <FiServer className="w-5 h-5" /> },
    { name: "Next Auth", icon: <FiShield className="w-5 h-5" /> },
    { name: "Supabase", icon: <FiDatabase className="w-5 h-5" /> },
    { name: "Netlify", icon: <FiServer className="w-5 h-5" /> },
    { name: "EmailJS", icon: <FiMail className="w-5 h-5" /> },
  ];

  const features = [
    "Google Authentication",
    "Booking system",
    "Reservation System",
    "User profile",
    "Room listings",
    "Mobile Responsiveness",
    "Live chat",
    "Admin Features",
  ];

  return (
    <main className="bg-gray-900 min-h-screen">
      <ProjectNav />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
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
              Book
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Nest
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 text-center mb-8 leading-relaxed"
            >
              A comprehensive hotel booking and reservation system with live
              chat support, secure payments, and advanced admin management
              features for seamless hospitality management.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="https://booknnest.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                <FiExternalLink className="w-5 h-5" />
                Live Preview
              </a>
              <a
                href="https://github.com/horlayinkahtechie/hotel-airbnb-booking.git"
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
                src={booknest}
                alt="BookNest Hotel Booking Platform"
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
                <FiHome className="w-6 h-6 text-blue-400" />
                Features
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiCode className="w-6 h-6 text-blue-400" />
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
                <FiBarChart2 className="w-6 h-6 text-blue-400" />
                Project Details
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Full-stack hotel management solution with booking system, live
                  chat support, and comprehensive admin dashboard.
                </p>
                <div className="flex items-center gap-2">
                  <FiUsers className="w-5 h-5" />
                  <span>Role: Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiServer className="w-5 h-5" />
                  <span>Deployment: Netlify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking System */}
      <section id="project-details" className="py-20 bg-gray-900/50">
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
              Booking System{" "}
              <span className="text-blue-400">Implementation</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiHome className="w-5 h-5 text-blue-400" />
                    Room Management
                  </h4>
                  <p className="text-gray-300">
                    Three room categories (Basic, Standard, Luxury) with unique
                    IDs and individual tracking to prevent double bookings.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiCalendar className="w-5 h-5 text-blue-400" />
                    Date Validation
                  </h4>
                  <p className="text-gray-300">
                    Advanced date conflict detection ensures no overlapping
                    bookings for the same room during the same period.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiCreditCard className="w-5 h-5 text-blue-400" />
                    Payment Processing
                  </h4>
                  <p className="text-gray-300">
                    Integrated Paystack payment system with automatic cost
                    calculation based on nights stayed and room pricing.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiMessageSquare className="w-5 h-5 text-blue-400" />
                    Live Chat Support
                  </h4>
                  <p className="text-gray-300">
                    Real-time messaging system with read receipts and timestamps
                    for customer support and inquiries.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link
                to="admin_implementation"
                smooth={true}
                duration={500}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
              >
                Read about Admin System Implementation
                <FiArrowDown className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section id="screenshots" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          >
            Project <span className="text-blue-400">Screenshots</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              booknestAbout,
              booknestCheckout,
              booknestBasicListing,
              booknestStandardListing,
              booknestLuxuryListing,
              booknestFooter,
              booknestHeroWithLiveChat,
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`BookNest screenshot ${index + 1}`}
                  className="w-full h-auto"
                  placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin System */}
      <section id="admin_implementation" className="py-20 bg-gray-900/50">
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
              Admin <span className="text-blue-400">Management System</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiShield className="w-5 h-5 text-blue-400" />
                    Secure Access
                  </h4>
                  <p className="text-gray-300">
                    Role-based middleware protection ensuring only authorized
                    administrators can access management features.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiBarChart2 className="w-5 h-5 text-blue-400" />
                    Comprehensive Analytics
                  </h4>
                  <p className="text-gray-300">
                    Detailed revenue tracking, occupancy rates, and booking
                    analytics with visual charts and reporting.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiUsers className="w-5 h-5 text-blue-400" />
                    User Management
                  </h4>
                  <p className="text-gray-300">
                    Complete user profile management with activity tracking and
                    detailed customer information.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiMessageSquare className="w-5 h-5 text-blue-400" />
                    Communication Hub
                  </h4>
                  <p className="text-gray-300">
                    Integrated messaging system for customer support with
                    organized conversation management.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Admin Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                dashboard,
                bookings,
                analytics,
                rooms,
                messages,
                profile,
                users,
              ].map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <Image
                    src={image}
                    alt={`Admin screenshot ${index + 1}`}
                    className="w-full h-auto"
                    placeholder="blur"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
