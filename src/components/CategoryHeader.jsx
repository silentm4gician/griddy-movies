"use client";

import { motion } from "framer-motion";

const CategoryHeader = ({ title, subtitle, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="text-6xl mb-4 animate-float inline-block"
      >
        {icon}
      </motion.div>
      <h1 className="text-4xl font-bold gradient-text mb-4">{title}</h1>
      <p className="text-xl text-gray-400">{subtitle}</p>
    </motion.div>
  );
};

export default CategoryHeader;