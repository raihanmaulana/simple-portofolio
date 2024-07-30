"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  return (
    <div className="h-[110vh] isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Connect with Me
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
          Feel free to connect with me on these platforms.
        </p>
      </div>

      <div className="mt-16 max-w-xl mx-auto">
        <ul className="space-y-6">
          <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-indigo-400" />
              <div>
                <a
                  href="https://www.linkedin.com/in/raihanmaulana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-indigo-300"
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
              className="text-indigo-400 hover:text-indigo-300"
            >
              View
            </a>
          </li>
          <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-indigo-400" />
              <div>
                <a
                  href="https://www.instagram.com/raihanmhz2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-indigo-300"
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
              className="text-indigo-400 hover:text-indigo-300"
            >
              View
            </a>
          </li>
          <li className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-indigo-400" />
              <div>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-indigo-300"
                >
                  GitHub
                </a>
                <p className="text-gray-400">Open Source Projects</p>
              </div>
            </div>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
            >
              View
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
