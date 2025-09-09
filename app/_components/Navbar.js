"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About me", to: "about-me" },
    { name: "Projects", to: "my-projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Contacts", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all pt-6 pb-6 duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent"
          >
            Abdul-salam
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 cursor-pointer group"
              activeClass="text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Download Resume Button */}
          <motion.a
            href="ALAO ABDUL-SALAM CV.docx"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-80 max-w-[85%] bg-gray-900 shadow-xl p-6 lg:hidden z-50"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} className="text-white" />
                  </button>
                </div>

                {/* Menu Items */}
                <ul className="mt-8 space-y-4 flex-1">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="block p-3 text-lg text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                        activeClass="text-white bg-gray-800"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Download Button for Mobile */}
                <motion.a
                  href="ALAO ABDUL-SALAM CV.docx"
                  target="_blank"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 p-4 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
