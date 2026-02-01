"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FiCode, FiTool, FiVideo, FiAward, FiUser } from "react-icons/fi";

export default function AboutMe() {
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

  const stats = [
    {
      icon: <FiCode className="w-5 h-5" />,
      value: "17+",
      label: "Projects Completed",
    },
    {
      icon: <FiAward className="w-5 h-5" />,
      value: "7+",
      label: "Certifications",
    },
    {
      icon: <FiTool className="w-5 h-5" />,
      value: "12+",
      label: "Tools Mastered",
    },
  ];

  return (
    <section
      id="about-me"
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg mr-4">
                    <FiUser className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Who I Am</h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  Hi, I&apos;m Abdul-salam, a passionate and results-driven Full
                  Stack Web Developer with a strong focus on building
                  interactive and scalable web applications. I specialize in
                  modern technologies like React, Next.js, Tailwind CSS,
                  Firebase, Supabase, Google Cloud.
                </p>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  I also know how to effectively leverage AI tools to speed up
                  development, debug efficiently, and deliver smarter solutions
                  because companies value developers who can code and think with
                  AI. I enjoy turning ideas into real-life projects that solve
                  problems and add value.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  With experience in building systems such as a hotel booking
                  and reservation system, e-commerce website with an admin
                  management system. I&apos;ve honed my skills in both frontend
                  and backend development. I pay attention to clean design,
                  smooth user experience, and performance optimization.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mr-4">
                    <FiCode className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">My Approach</h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  As a Frontend Developer, I prioritize the user&apos;s needs by
                  ensuring every interface is intuitive, responsive, and meets
                  user expectations. I focus on delivering a seamless experience
                  by making websites easy to navigate, accessible across all
                  devices, and visually appealing.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Additionally, I optimize images and assets to enhance site
                  performance and loading speed, ensuring a smooth and efficient
                  browsing experience.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mr-4">
                    <FiVideo className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Beyond Coding
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  My journey in the world of programming began 2021 when I was
                  in High school. Since then, I&apos;ve been on an exciting
                  quest to explore the vast realms of technology and software
                  development.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  When I&apos;m not coding, I love sharing knowledge through my
                  courses and helping others grow in the tech space. I&apos;m
                  always eager to learn, improve, and take on new challenges
                  that push me forward.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-purple-500 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "React Native",
                "Bootstrap",
                "TailwindCSS",
                "Git",
                "GitHub",
                "Supabase",
                "Firebase",
                "Google Cloud",
                "Figma",
                "WordPress",
                "Elementor"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:bg-purple-600/20 hover:border-purple-500 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
