"use client";

import { motion } from "framer-motion";
import Card from "./Card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const MovieGrid = ({ media }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 cardgrid"
    >
      {media?.map((item) => (
        <Card key={item.id} media={item} />
      ))}
    </motion.div>
  );
};

export default MovieGrid;