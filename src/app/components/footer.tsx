import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { HeartIcon } from "@heroicons/react/24/solid"; // Import ikon hati dari heroicons

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-medium">
            © {new Date().getFullYear()} Raihan Maulana. Made with{" "}
            <HeartIcon
              className="inline h-5 w-5 text-red-500"
              aria-hidden="true"
            />{" "}
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/raihanmaulana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/raihanmhz2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/raihanmaulana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
