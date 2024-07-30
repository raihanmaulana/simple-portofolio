"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Connect with Me
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          Feel free to connect with me on these platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 max-w-xl mx-auto"
      >
        <ul className="space-y-6">
          <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-indigo-400" />
              <div>
                <a
                  href="https://www.linkedin.com/in/raihanmaulana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-indigo-300 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <p className="text-gray-400">Professional Networking</p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/raihanmaulana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              View
            </a>
          </li>
          <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-indigo-400" />
              <div>
                <a
                  href="https://www.instagram.com/raihanmhz2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-indigo-300 transition-colors duration-300"
                >
                  Instagram
                </a>
                <p className="text-gray-400">Personal Photos and Updates</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/raihanmhz2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              View
            </a>
          </li>
          <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-indigo-400" />
              <div>
                <a
                  href="https://github.com/raihanmaulana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-indigo-300 transition-colors duration-300"
                >
                  GitHub
                </a>
                <p className="text-gray-400">Open Source Projects</p>
              </div>
            </div>
            <a
              href="https://github.com/raihanmaulana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              View
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
