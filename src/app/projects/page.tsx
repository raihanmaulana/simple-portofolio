// "use client";

// import { ArrowUp } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import SIKPB from "/public/SIKPB.png";
// import BG from "/public/bg.jpg";
// import Link from "next/link";

// export default function Projects() {
//   return (
//     <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="mx-auto max-w-2xl text-center mb-12"
//       >
//         <h2 className="container text-4xl font-bold tracking-tight text-white sm:text-5xl">
//           My Projects
//         </h2>
//         <p className="mt-4 text-lg leading-8 text-gray-400">
//           Explore some of my recent projects below.
//         </p>
//       </motion.div>

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         <motion.div
//           className="flex flex-col bg-gray-800 rounded-xl shadow-lg overflow-hidden"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <Image
//             src={SIKPB}
//             alt="Project 1"
//             className="object-cover w-full h-60"
//           />
//           <div className="p-6">
//             <h3 className="text-xl font-semibold text-white">Project One</h3>
//             <p className="text-gray-400 mt-2 mb-4">
//               An exciting project with unique features and modern design.
//             </p>
//             <Link
//               href={"https://yasawaskitha.site"}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
//             >
//               Learn More <ArrowUp size={14} className="inline rotate-45" />
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div
//           className="flex flex-col bg-gray-800 rounded-xl shadow-lg overflow-hidden"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <Image
//             src={BG}
//             alt="Coming Soon"
//             className="object-cover w-full h-60"
//           />
//           <div className="p-6">
//             <h3 className="text-xl font-semibold text-white">Coming Soon</h3>
//             <p className="text-gray-400 mt-2 mb-4">
//               Stay tuned for upcoming projects that will be launched soon!
//             </p>
//             <Link
//               href={"#"}
//               className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
//             >
//               Stay Tuned <ArrowUp size={14} className="inline rotate-45" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
