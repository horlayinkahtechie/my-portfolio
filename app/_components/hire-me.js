"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCode,
  FiSmartphone,
  FiShoppingCart,
  FiShield,
  FiBarChart2,
  FiMail,
  FiMessageSquare,
  FiCalendar,
  FiCheck,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const projects = [
    {
      title: "LolasÈlan E-commerce",
      description:
        "UK-based fashion e-commerce platform with admin dashboard and payment processing",
      image: "/lolaselan-preview.jpg",
      link: "/lolaselan",
    },
    {
      title: "BookNest Hotel Booking",
      description:
        "Hotel reservation system with live chat and admin management",
      image: "/booknest-preview.jpg",
      link: "/booknest-project",
    },
    {
      title: "Savour Restaurant System",
      description:
        "Restaurant ordering and reservation system with admin panel",
      image: "/savour-preview.jpg",
      link: "/savour-project",
    },
  ];

  const services = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Website Development",
      description: "Business sites, e-commerce, portfolios, blogs",
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Hotel & Booking Systems",
      description: "Custom reservation systems for hospitality businesses",
    },
    {
      icon: <FiShoppingCart className="w-6 h-6" />,
      title: "Restaurant Websites",
      description: "Online ordering and reservation systems",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Custom Web Applications",
      description: "Tailored solutions for specific business needs",
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: "Authentication Systems",
      description: "Secure user management and authentication",
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: "Analytics Dashboards",
      description: "Data visualization and business intelligence",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Great Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              I&apos;m a Fullstack Web Developer specializing in modern,
              responsive websites and applications that drive results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2"
              >
                <FiCalendar className="w-5 h-5" />
                Book a Free Consultation
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:border-purple-500 transition-all duration-300"
              >
                Send Me a Message
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Why <span className="text-purple-400">Choose Me</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">
                    Clean, Maintainable Code
                  </h3>
                </div>
                <p className="text-gray-300">
                  Well-structured, documented code that&apos;s easy to maintain
                  and scale.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">
                    Responsive & SEO-optimized
                  </h3>
                </div>
                <p className="text-gray-300">
                  Websites that look great on all devices and rank well on
                  search engines.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">
                    Fast Delivery & Support
                  </h3>
                </div>
                <p className="text-gray-300">
                  Timely project delivery with ongoing support and maintenance.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">
                    Modern Tech Stack
                  </h3>
                </div>
                <p className="text-gray-300">
                  Expertise in Next.js, TailwindCSS, Supabase, Node.js, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Services <span className="text-purple-400">Offered</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Portfolio <span className="text-purple-400">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <FiCode className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors duration-300"
                  >
                    View Project <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-purple-400">900+</span> Students
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              I&apos;ve helped hundreds of students master web development
              through my comprehensive courses on Udemy.
            </p>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                &quot;Abdul-salam&apos;s teaching style is clear and practical.
                He breaks down complex concepts into understandable parts.&quot;
              </p>
              <p className="text-purple-400 font-medium">- Udemy Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Get In <span className="text-purple-400">Touch</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiMessageSquare className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Direct Contact
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Prefer to reach out directly? Here are my contact details:
                  </p>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/2348169415526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <FiMessageSquare className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">WhatsApp</h4>
                        <p className="text-gray-300">+234 816 941 5526</p>
                      </div>
                    </a>

                    <a
                      href="mailto:alaoabdulsalamolayinka@gmail.com"
                      className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <FiMail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-300">
                          alaoabdulsalamolayinka@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdulsalam-alao-b4217a250/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                        <FiExternalLink className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">LinkedIn</h4>
                        <p className="text-gray-300">Connect professionally</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-700/30">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <FiCheck className="w-5 h-5 text-purple-400" />
                    Ready to start your project?
                  </h4>
                  <p className="text-gray-300">
                    Let&apos;s discuss your ideas and create a solution that
                    meets your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Bring Your{" "}
              <span className="text-purple-400">Idea to Life</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s discuss your project and create something amazing
              together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              Start Your Project <FiArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
