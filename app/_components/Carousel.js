"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import myPicture from "../../public/Alao Abdulsalam.jpg";
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-10 sm:px-6 lg:px-40 py-16 lg:py-24 overflow-hidden pt-35 lg:pt-10"
    >
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-purple-400 mb-2"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Abdul-salam
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-6"
          >
            Fullstack Web Developer
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            I build user-friendly, responsive websites and web applications that
            help brands and businesses grow.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
          >
            <Link
              href="/hire-me"
              className="group relative flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <span className="mr-2">Hire Me</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#my-projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg transition-all duration-300 hover:border-purple-500 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-5"
          >
            <a
              href="https://wa.me/2348169415526"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 bg-white rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-110"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/dev_ola"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="p-3 bg-white rounded-lg transition-all duration-300 hover:bg-black hover:scale-110"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulsalam-alao-b4217a250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-white rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/horlayinkahtechie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-white rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={itemVariants}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
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

            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-t-4 border-r-4 border-purple-500 rounded-tr-3xl"></div>
            <div className="absolute -top-2 -left-2 w-24 h-24 border-b-4 border-l-4 border-indigo-500 rounded-bl-3xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
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
