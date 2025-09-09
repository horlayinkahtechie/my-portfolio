"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiLayout, FiCode, FiSmartphone, FiArrowRight } from "react-icons/fi";

export default function ServicesSection() {
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
        staggerChildren: 0.2,
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

  const services = [
    {
      title: "Web Design",
      description:
        "Creating visually appealing, user-friendly interfaces with modern design principles that enhance user experience and engagement.",
      icon: <FiLayout className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "UI/UX Design",
        "Responsive Layouts",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance websites and web applications using the latest technologies and best practices.",
      icon: <FiCode className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Frontend Development",
        "Backend Integration",
        "Performance Optimization",
        "Web Applications",
      ],
    },
    {
      title: "App Development",
      description:
        "Developing cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      icon: <FiSmartphone className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "API Integration",
        "App Store Deployment",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden">
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
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              Services
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            I offer a range of services to help bring your digital ideas to life
            with modern solutions and cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 relative z-10">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="mb-6 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2 text-gray-300">
                    <FiArrowRight
                      className={`mr-2 ${
                        service.color.replace("from-", "text-").split(" ")[0]
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`relative z-10 flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-2 transition-all duration-300`}
              >
                Learn more
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Get in touch
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
