"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white bg-gray-900 p-6 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto lg:p-4 p-2">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <span className="lg:text-[1.8rem] text-[22px] font-bold font-[Inconsolata]">
            Alao Abdul-salam
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            // aria-current="page"
            className="text-white text-[1.1rem] hover:text-gray-300 active cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            aria-current="page"
            className="text-white text-[1.1rem] hover:text-gray-300 active cursor-pointer"
          >
            About me
          </Link>
          <Link
            to="my-skills"
            smooth={true}
            duration={500}
            aria-current="page"
            className="text-white text-[1.1rem] hover:text-gray-300 active cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="my-projects"
            smooth={true}
            duration={500}
            aria-current="page"
            className="text-white text-[1.1rem] hover:text-gray-300 active cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            aria-current="page"
            className="text-white text-[1.1rem] hover:text-gray-300 active cursor-pointer"
          >
            Certifications
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            aria-current="page"
            className="text-white text-[1.1rem] hover:text-gray-300 active cursor-pointer"
          >
            Contacts
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden transition-transform`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        <ul className="mt-10 space-y-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block p-2 text-lg text-white hover:bg-gray-700 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-me"
              smooth={true}
              duration={500}
              className="block p-2 text-lg text-white hover:bg-gray-700 rounded"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="my-skills"
              smooth={true}
              duration={500}
              className="block p-2 text-lg text-white hover:bg-gray-700 rounded"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="my-projects"
              smooth={true}
              duration={500}
              className="block p-2 text-lg text-white hover:bg-gray-700 rounded"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="block p-2 text-lg text-white hover:bg-gray-700 rounded"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block p-2 text-lg text-white hover:bg-gray-700 rounded"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
