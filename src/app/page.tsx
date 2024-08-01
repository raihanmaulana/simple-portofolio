"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SIKPB from "/public/SIKPB.png";
import BG from "/public/BG.jpg";
import Link from "next/link";
import BackToTopButton from "./components/BackToTopButton";
import { useState, useEffect } from "react";
import { PaperClipIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

const links = [
  { name: "View Projects", href: "#projects" },
  { name: "Internship program", href: "#contact-me" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" }
];
const stats = [
  { name: "Project Counter", value: "2" },
  { name: "Full-time Backend Developer", value: "2 Years Experience" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      {/* Home Section */}
      <div
        id="home"
        className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-3 lg:h-screen xl:h-screen 2xl:h-screen flex items-center justify-start"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="container max-w-7xl px-6 lg:px-8 2xl: mx-auto">
          <div className=" mx-auto max-w-2xl lg:mx-0 gap-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome To My Next.JS Portfolio Web
            </h2>
            <p
              className="mt-6 text-lg leading-8 text-gray-300"
              style={{ textAlign: "justify" }}
            >
              Hi, I'm Raihan Maulana, a passionate Backend Developer with a
              solid foundation in PHP and Laravel. Currently, I'm expanding my
              skills into Frontend Development, eager to create seamless,
              user-friendly interfaces. I thrive on transforming complex
              challenges into elegant solutions and am dedicated to continuous
              learning and improvement. Let's connect and build something great
              together!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="bg-gray-900 py-24 sm:py-32 lg:py-40 px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My Projects
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Explore some of my recent projects below. Each project showcases
              unique features and modern design.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 justify-items-center">
            <motion.div
              className="flex flex-col bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: "100%", maxWidth: "350px" }} // Full width with max width for responsiveness
            >
              <Image
                src={SIKPB}
                alt="Project 1"
                className="object-cover w-full h-60 sm:h-72"
              />
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Project One
                </h3>
                <p className="text-gray-400 mt-2">
                  An exciting project with unique features and modern design.
                  Perfect for demonstrating my skills and creativity.
                </p>
                <Link
                  href={"https://yasawaskitha.site"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                >
                  Learn More{" "}
                  <ArrowUp size={14} className="ml-1 inline rotate-45" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: "100%", maxWidth: "350px" }} // Full width with max width for responsiveness
            >
              <Image
                src={BG}
                alt="Project 2"
                className="object-cover w-full h-60 sm:h-72"
              />
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Project Two
                </h3>
                <p className="text-gray-400 mt-2">
                  Stay tuned for upcoming projects that will be launched soon.
                  This section will showcase future endeavors.
                </p>
                <Link
                  href={"#"}
                  className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                >
                  Stay Tuned{" "}
                  <ArrowUp size={14} className="ml-1 inline rotate-45" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: "100%", maxWidth: "350px" }} // Full width with max width for responsiveness
            >
              <Image
                src={BG}
                alt="Project 2"
                className="object-cover w-full h-60 sm:h-72"
              />
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Project Two
                </h3>
                <p className="text-gray-400 mt-2">
                  Stay tuned for upcoming projects that will be launched soon.
                  This section will showcase future endeavors.
                </p>
                <Link
                  href={"#"}
                  className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                >
                  Stay Tuned{" "}
                  <ArrowUp size={14} className="ml-1 inline rotate-45" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{ width: "100%", maxWidth: "350px" }} // Full width with max width for responsiveness
            >
              <Image
                src={BG}
                alt="Project 2"
                className="object-cover w-full h-60 sm:h-72"
              />
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Project Two
                </h3>
                <p className="text-gray-400 mt-2">
                  Stay tuned for upcoming projects that will be launched soon.
                  This section will showcase future endeavors.
                </p>
                <Link
                  href={"#"}
                  className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                >
                  Stay Tuned{" "}
                  <ArrowUp size={14} className="ml-1 inline rotate-45" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="h-screen bg-gray-700 px-6 py-24 sm:py-3 lg:h-screen xl:h-screen 2xl:h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl pt-32 justify-center font-bold tracking-tight text-white sm:text-5xl">
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
          <ul className="my-auto space-y-6 ">
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
      <div id="about" className="bg-gray-900 text-white">
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
            <div className="text-lg mt-4 text-center justify-center">
              <p>
                Sebagai seorang Backend Developer yang berdedikasi, saya
                berfokus pada pengembangan solusi yang efisien dan scalable,
                terutama menggunakan Laravel dan MySQL. Selain keterampilan
                teknis saya, saya juga merupakan penggemar game yang aktif. Hobi
                ini tidak hanya memberikan hiburan tetapi juga menginspirasi
                kreativitas dan pemecahan masalah saya dalam dunia pengembangan
                perangkat lunak. Dengan minat yang mendalam terhadap teknologi
                dan permainan, saya selalu berusaha untuk menciptakan aplikasi
                yang tidak hanya berkinerja tinggi tetapi juga memberikan
                pengalaman pengguna yang memuaskan.
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
        <div id="contact-me" className=" flex flex-col lg:flex-row">
          <div className="bg-white min-h-screen flex lg:w-1/2 items-center justify-center lg:pr-6 ">
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
            className="bg-white lg:w-1/2 mt-8 lg:mt-0 lg:pl-6 flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 pr-8">
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
            <div className="mt-10 mr-8">
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
    </div>
  );
}
