import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center border-b-2 px-6 py-2 h-20 bg-black">
      <h1 className="font-bold text-white hover:text-indigo-400 hover:shadow-lg transition-colors duration-300 ease-in-out">
        NextJS APP
      </h1>
      <div className="grow">
        <div className="flex items-center justify-end gap-2 md:gap-8">
          <Link
            href="/"
            className="text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
