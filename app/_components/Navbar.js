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
  BookOpen 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled); // Fixed: removed the negation (!)
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
          ? "bg-gray-900/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-gray-900/95 py-5"
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
           Alao Abdul-salam
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
        
            return (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="relative flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 cursor-pointer group px-3 py-2 rounded-lg hover:bg-gray-800/50"
                activeClass="text-white bg-gray-800/30"
              >
                
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </Link>
            );
          })}

          {/* Download Resume Button */}
          <motion.a
            href="ALAO ABDUL-SALAM CV.docx"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30 border border-purple-500/30"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
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
              className="fixed top-0 left-0 h-full w-80 max-w-[85%] bg-gray-900 border-r border-gray-800 shadow-2xl p-6 lg:hidden z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                    Abdul-salam
                  </span>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 border border-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>

                {/* Menu Items */}
                <ul className="space-y-2 flex-1">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={500}
                          offset={-80}
                          className="flex items-center gap-3 p-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 group"
                          onClick={() => setIsOpen(false)}
                          activeClass="text-white bg-gray-800"
                        >
                          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                            <IconComponent size={18} />
                          </div>
                          <span className="font-medium">{item.name}</span>
                          <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Download Button for Mobile */}
                <motion.a
                  href="ALAO ABDUL-SALAM CV.docx"
                  target="_blank"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 p-4 mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 border border-purple-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-center text-gray-400 text-sm">
                    Let&apos;s build something amazing together
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}