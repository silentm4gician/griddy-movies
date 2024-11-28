"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  const developers = [
    {
      name: "silentm4gician",
      image: "leox.jpg",
      github: "https://github.com/silentm4gician",
    },
    {
      name: "tropicaal_",
      image: "tropi.jpg",
      github: "https://github.com/Luks-code",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Meet the Team
          </h1>
          <p className="text-xl text-gray-400">
            The awesome developers behind Griddy Movies
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 w-64"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mb-4"
              >
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cyan-500/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent" />
              </motion.div>
              <h2 className="text-xl font-semibold text-center mb-4">
                {dev.name}
              </h2>
              <Link href={dev.github} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub Profile</span>
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <img
            src="griddyLogo.png"
            alt="Griddy Movies Logo"
            className="mx-auto w-64 animate-float"
          />
          <p className="text-gray-400 mt-8">
            © {new Date().getFullYear()} Griddy Movies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;