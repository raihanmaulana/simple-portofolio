"use client";

import BackToTopButton from "../components/BackToTopButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PaperClipIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import Link from "next/link";

export default function AboutAndContact() {
  const [agreed, setAgreed] = useState(false);

  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* About Section */}
      <motion.div
        className=" min-h-screen container flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex items-center justify-center">
          <div className="text-4xl font-bold text-center mb-4">About Me</div>
        </div>
        <div className="text-center"></div>
        <div className="space-y-8">
          <div className="text-lg mt-4">
            <p>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </p>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="text-2xl font-bold mb-4">Attachments</div>
            <ul className="divide-y divide-gray-700">
              <li className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <PaperClipIcon className="h-5 w-5 text-gray-400" />
                  <span className="ml-4 text-sm font-medium">
                    CV Muhammad Raihan Maulana.pdf
                  </span>
                </div>
                <Link
                  href="https://drive.google.com/file/d/1jkVaFygszqF77HEC6jEJ2pfnr4ojvhdV/view"
                  className="text-indigo-400 hover:text-indigo-300"
                  target="_blank"
                >
                  View
                </Link>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <PaperClipIcon className="h-5 w-5 text-gray-400" />
                  <span className="ml-4 text-sm font-medium">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  View
                </a>
              </li>
              <a href="#contact-me" className="flex justify-center pt-20">
                <button className="relative inline-flex items-center px-8 py-3 text-base font-semibold text-white bg-teal-600 rounded-lg shadow-lg ring-1 ring-teal-700 ring-opacity-50 hover:bg-teal-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  <span className="absolute inset-0 bg-teal-800 rounded-lg opacity-20 transform scale-90 transition-transform duration-300 ease-in-out group-hover:scale-100" />
                  <span className="relative">Go to Contact Me</span>
                </button>
              </a>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div id="contact-me" className=" bg-red-700 flex flex-col lg:flex-row">
        <div className="bg-blue-600 min-h-screen flex lg:w-1/2 items-center justify-center lg:pr-6 ">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Let me know your need!
            </p>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="bg-yellow-400 lg:w-1/2 mt-8 lg:mt-0 lg:pl-6 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
        <a href="#top" className="fixed bottom-6 right-6">
          <BackToTopButton />
        </a>
      </div>
    </div>
  );
}
