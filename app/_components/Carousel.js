"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import myPicture from "../../public/Alao-Abdulsalam.jpg";
import Link from "next/link";

export default function Carousel() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20 overflow-hidden"
    >
      {/* Image at the top - Smaller */}
      <motion.div
        variants={itemVariants}
        className="relative mb-8 lg:mb-10 flex justify-center"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Image
            src={myPicture}
            quality={100}
            fill
            placeholder="blur"
            alt="Alao Abdul-salam Olayinka"
            className="rounded-full object-cover z-10 border-4 border-gray-800 shadow-xl"
            style={{
              objectPosition: "center center",
            }}
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        variants={itemVariants}
        className="text-center max-w-3xl mx-auto"
      >
       

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Alao Abdul-salam
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Fullstack Web Developer and Mobile App Developer specializing in React, React Native, Next.js, and building user-friendly, 
          performant web applications that solve real business problems.
        </motion.p>

        {/* CTA Button - Similar to "View My Work" in screenshot */}
        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <Link
            href="#my-projects"
            className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <span className="mr-3">View My Work</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://wa.me/2348169415526"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-110 hover:shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://x.com/dev_olayinka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-black hover:scale-110 hover:shadow-lg"
          >
            <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulsalam-alao-b4217a250/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg"
          >
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://github.com/horlayinkahtechie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-110 hover:shadow-lg"
          >
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Only shown on larger screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}