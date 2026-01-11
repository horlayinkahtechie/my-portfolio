"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { 
  Menu, 
  X, 
  Download, 
  Home, 
  User, 
  FolderOpen, 
  FileText, 
  Award, 
  Mail,
  BookOpen,
  LogOut,
  Menu as MenuIcon
} from "lucide-react";

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
    { name: "Home", to: "home", icon: Home },
    { name: "About me", to: "about-me", icon: User },
    { name: "Projects", to: "my-projects", icon: FolderOpen },
    { name: "Blogs", to: "blogs", icon: BookOpen },
    { name: "Certifications", to: "certifications", icon: Award },
    { name: "Contacts", to: "contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-800"
          : "bg-gray-900/95 py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo - Left aligned */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent tracking-tight"
          >
            Alao Abdul-salam
          </motion.span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="relative px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 cursor-pointer group"
              activeClass="text-white"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
          ))}
        </div>

        {/* Right side - Desktop Resume & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Download Resume Button - Desktop */}
          <motion.a
            href="ALAO ABDUL-SALAM CV.docx"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30 border border-purple-500/30"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <MenuIcon size={20} className="text-white" />
            )}
          </motion.button>
        </div>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-2xl p-6 lg:hidden z-50"
            >
              <div className="flex flex-col space-y-6">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 group"
                        onClick={() => setIsOpen(false)}
                        activeClass="text-white bg-gray-800/30"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300">
                          <IconComponent size={16} />
                        </div>
                        <span className="font-medium text-sm">{item.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Download Button for Mobile */}
                <motion.a
                  href="ALAO ABDUL-SALAM CV.docx"
                  target="_blank"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 p-3 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 border border-purple-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={16} />
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