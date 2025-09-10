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
  FiShoppingCart,
  FiCalendar,
  FiUsers,
  FiCreditCard,
  FiShield,
  FiMail,
} from "react-icons/fi";

// Import your images
import tomatts from "../../public/Savour.png";
import menuSearchImg from "../../public/menu-search-img.png";
import cartItemImg from "../../public/cart-item-img.png";
import checkoutWithPaystack from "../../public/checkout-with-paystack.png";
import paymentStatusImg from "../../public/payment-status-img.png";
import reservationImg from "../../public/reservation_page.png";

import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import ProjectNav from "../_components/ProjectNav";

export default function SavourProject() {
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
    { name: "CSS", icon: <FiLayout className="w-5 h-5" /> },
    { name: "Bootstrap", icon: <FiLayout className="w-5 h-5" /> },
    { name: "TailwindCSS", icon: <FiLayout className="w-5 h-5" /> },
    { name: "React Router", icon: <FiServer className="w-5 h-5" /> },
    { name: "Supabase", icon: <FiDatabase className="w-5 h-5" /> },
    { name: "Netlify", icon: <FiServer className="w-5 h-5" /> },
    { name: "EmailJS", icon: <FiMail className="w-5 h-5" /> },
  ];

  const features = [
    "User Authentication",
    "User Authorization",
    "Ordering System",
    "Seat Reservation",
    "Payment System",
    "User Profile",
    "Admin Dashboard",
  ];

  return (
    <main className="bg-gray-900 min-h-screen">
      <ProjectNav />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-gray-900"></div>
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
              Savour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                Restaurant
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 text-center mb-8 leading-relaxed"
            >
              A comprehensive restaurant ordering and reservation system with
              seamless ordering, table booking, and advanced admin management
              features.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="https://tomatts.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
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
                src={tomatts}
                alt="Savour Restaurant Ordering System"
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
                <FiShoppingCart className="w-6 h-6 text-amber-400" />
                Features
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiCode className="w-6 h-6 text-amber-400" />
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
                <FiServer className="w-6 h-6 text-amber-400" />
                Project Details
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Full-stack restaurant management solution with ordering,
                  reservations, and comprehensive admin dashboard.
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

      {/* Technology Explanation */}
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
              Technology <span className="text-amber-400">Stack</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiCode className="w-5 h-5 text-amber-400" />
                    Frontend Framework
                  </h4>
                  <p className="text-gray-300">
                    React powers the dynamic and interactive user interfaces
                    with reusable components for both customers and admins,
                    ensuring a smooth experience.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiServer className="w-5 h-5 text-amber-400" />
                    Routing & Navigation
                  </h4>
                  <p className="text-gray-300">
                    React Router enables seamless client-side navigation between
                    pages without reloading, providing a native app-like
                    experience.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiDatabase className="w-5 h-5 text-amber-400" />
                    Backend & Database
                  </h4>
                  <p className="text-gray-300">
                    Supabase handles data storage, real-time updates,
                    authentication, and provides API access for seamless
                    frontend-backend communication.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiLayout className="w-5 h-5 text-amber-400" />
                    Styling Framework
                  </h4>
                  <p className="text-gray-300">
                    Tailwind CSS enables rapid design implementation with
                    consistent responsiveness across all devices and screen
                    sizes.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Purpose */}
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
              Project <span className="text-amber-400">Purpose</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The Savour restaurant system modernizes customer interactions by
                offering a seamless digital platform for browsing menus, placing
                orders, and reserving tables from any device.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                It aims to streamline restaurant operations, reduce manual
                workload, minimize errors, and provide real-time data for
                informed decision-making while ensuring an intuitive experience
                for both customers and restaurant managers.
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
            System <span className="text-amber-400">Screenshots</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              menuSearchImg,
              cartItemImg,
              checkoutWithPaystack,
              paymentStatusImg,
              reservationImg,
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`Savour screenshot ${index + 1}`}
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
