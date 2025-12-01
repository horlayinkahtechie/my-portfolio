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
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiMail,
  FiShield,
  FiMessageCircle,
} from "react-icons/fi";

// Import your images
import thatLocalGirlHero from "../../public/thatLocalGirlHero.png";
import collectionsCardPage from "../../public/collectionsCard.png";
import productCardPage from "../../public/productCard.png";
import localgirlaboutPage from "../../public/localGirlAbout.png";
import localgirlcart from "../../public/localgirlcart.png";
import localgirlBlog from "../../public/localgirlBlog.png";
import localgirlCheckout from "../../public/localgirlcheckout.png";

import adminImage1 from "../../public/adminImage1.png";
import adminImage2 from "../../public/adminImage2.png";
import adminImage3 from "../../public/adminImage3.png";
import adminImage4 from "../../public/adminImage4.png";
import adminImage5 from "../../public/adminImage5.png";
import adminImage6 from "../../public/adminImage6.png";


import Footer from "../_components/Footer";
import Contact from "../_components/Contact";
import ProjectNav from "../_components/ProjectNav";

export default function ThatLocalGirl() {
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
    { name: "Resend", icon: <FiMail className="w-5 h-5" /> },
    { name: "Stripe", icon: <FiShoppingCart className="w-5 h-5" /> },
    {name: "WhatsApp Cloud API", icon: <FiMessageCircle className="w-5 h-5"/>}
  ];

  const features = [
    "Google Authentication",
    "Ordering system",
    "User profile",
    "Product listings",
    "Mobile Responsiveness",
    "Admin Features",
    "Order confirmation Email",
    "AI Support"
  ];

  return (
    <main className="bg-gray-900 min-h-screen">
      <ProjectNav />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900"></div>
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
              That Local{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Girl
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 text-center mb-8 leading-relaxed"
            >
              A sophisticated e-commerce platform for African women&apos;s
              fashion, featuring a seamless shopping experience, secure
              checkout, and comprehensive admin management system.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="https://thatlocalgirl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
              >
                <FiExternalLink className="w-5 h-5" />
                Live Preview
              </a>
              <a
                href="https://github.com/horlayinkahtechie/thelocalgirl.git"
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
                src={thatLocalGirlHero}
                alt="That Local Girl E-commerce Platform"
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
                <FiShoppingCart className="w-6 h-6 text-purple-400" />
                Features
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiCode className="w-6 h-6 text-purple-400" />
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
                <FiBarChart2 className="w-6 h-6 text-purple-400" />
                Project Details
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Full-stack e-commerce solution with admin dashboard, payment
                  processing, and customer management system. Includes AI Support, Sleek User Interface and Good User Experience, Optimized images and data fetching to make loading faster and smooth.
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

      {/* Ordering System */}
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
              Ordering System{" "}
              <span className="text-purple-400">Implementation</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Cart System
                  </h4>
                  <p className="text-gray-300">
                   Customers can add as much product into the cart, both authenticated and unauthenticated users. Afterwards, they can edit/delete or update their cart before proceeding to checkout.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Secure Checkout
                  </h4>
                  <p className="text-gray-300">
                    Before payment, user are required to put down info such as: delivery address, email, phone number, delivery method. Then, an integrated Stripe payment processing with support for cards,
                    PayPal, Google Pay, Apple Pay, and multiple other payment methods.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Order Tracking
                  </h4>
                  <p className="text-gray-300">
                    Customers can track order status from processing to delivery
                    through their personalized profile pages.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link
                to="admin_implementation"
                smooth={true}
                duration={500}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
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
            Project <span className="text-purple-400">Screenshots</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              collectionsCardPage,
              productCardPage,
              localgirlBlog,
              localgirlCheckout,
              localgirlaboutPage,
              localgirlcart,
             
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`Lolaselan screenshot ${index + 1}`}
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
              Admin <span className="text-purple-400">Management System</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiShield className="w-5 h-5 text-purple-400" />
                    Secure Authentication
                  </h4>
                  <p className="text-gray-300">
                    Role-based access control that checks the role of the user trying to log in if they are admin or not, if not they are redirected to the home page and if the user is an admin, they are redirected to admin dashboard, ensuring only authorized admins can access management
                    features.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiShoppingCart className="w-5 h-5 text-purple-400" />
                    Order Management
                  </h4>
                  <p className="text-gray-300">
                    Complete order lifecycle management with status updates,
                    delivery tracking, and customer communication. Admin can cancel orders, change the delivery status of the order and much more. Admin can also filter orders for easy access to orders.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiUsers className="w-5 h-5 text-purple-400" />
                    Customer Engagement
                  </h4>
                  <p className="text-gray-300">
                    Subscriber management with email marketing capabilities and
                    promotional campaign tools. Meaning admin can send promotional emails, offers and discount to the email of subscribers.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FiBarChart2 className="w-5 h-5 text-purple-400" />
                    Analytics & Reporting
                  </h4>
                  <p className="text-gray-300">
                    Comprehensive sales analytics with visual charts and export
                    functionality for business intelligence.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Admin Screenshots */}
            
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
               adminImage1,
               adminImage2,
               adminImage3,
               adminImage4,
               adminImage5,
               adminImage6
              ].map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
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
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
