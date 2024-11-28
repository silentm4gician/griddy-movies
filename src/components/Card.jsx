"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaPlay } from "react-icons/fa";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Card = ({ media }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
  const linkUrl = media.first_air_date
    ? `/media/player/show/${media.id}`
    : `/media/player/movie/${media.id}`;

  return (
    <motion.div variants={item}>
      <Link href={linkUrl}>
        <motion.div
          className="relative group card-hover"
          whileHover={{ scale: 1.05 }}
        >
          <div className="aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={media.title || media.name}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center"
              >
                <FaPlay className="text-white text-2xl" />
              </motion.div>
            </div>
          </div>
          <div className="p-4 glass-effect rounded-b-lg">
            <h3 className="font-semibold text-lg truncate">
              {media.title || media.name}
            </h3>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span>{media.vote_average?.toFixed(1)}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Card;