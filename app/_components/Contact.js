"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const controls = useAnimation();
  const formRef = useRef();

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
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_dt4lfep",
        "template_hbmczan",
        formRef.current,
        "zLcqtoGgeFglmGnFb"
      )
      .then(
        (result) => {
          console.log("Message sent");
          setSent(true);
          setIsLoading(false);
          // Reset form after successful submission
          setTimeout(() => {
            formRef.current.reset();
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log("Error:", error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Touch
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              If you&apos;re searching for a developer, need help with
              something, or just want to connect, don&apos;t hesitate to send me
              a message. I&apos;ll get back to you as soon as possible!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            ref={formRef}
            onSubmit={sendEmail}
            className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="fullname"
                    required
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400"
              >
                <FiCheckCircle className="w-5 h-5" />
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </motion.form>

          {/* Additional Contact Info */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-400 mb-4">Prefer to reach out directly?</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:alaoabdulsalamolayinka@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                contact@abdulsalamalao.com
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://wa.me/2348169415526"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                +234 816 941 5526
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
