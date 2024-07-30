"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            NextJS App
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white py-4">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
