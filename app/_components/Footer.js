import Link from "next/link";
import {
  FiGithub,
  FiFileText,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiX,
  FiTwitter,

} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 mt-20 lg:mt-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          {/* Copyright and credit */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm lg:text-base flex items-center justify-center lg:justify-start gap-1">
              <span>© {currentYear} Designed and Developed by</span>
              <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 font-semibold">
                Alao Abdul-salam
              </Link>
              <span className="hidden lg:inline">•</span>
              <span className="flex items-center gap-1">
                Made with
                <FiHeart className="text-red-500 w-4 h-4" />
              </span>
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/horlayinkahtechie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium hidden lg:block">
                GitHub
              </span>
            </Link>

            <Link
              href="ALAO ABDUL-SALAM CV.docx"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="Resume"
            >
              <FiFileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium hidden lg:block">
                Resume
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/abdulsalam-alao-b4217a250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium hidden lg:block">
                LinkedIn
              </span>
            </Link>

            <Link
              href="https://www.x.com/dev_olayinka"
              target="_blank"
              
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium hidden lg:block">
                Twitter (X)
              </span>
            </Link>

            <Link
              href="mailto:alaoabdulsalamolayinka@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium hidden lg:block">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
