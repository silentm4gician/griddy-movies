'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaPlay } from 'react-icons/fa';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Card = ({ media }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
  const linkUrl = media.first_air_date
    ? `/media/player/show/${media.id}`
    : `/media/player/movie/${media.id}`;

  return (
    <motion.div variants={item} className='group'>
      <Link href={linkUrl}>
        <motion.div
          className='relative card-hover'
          whileHover={{ scale: 1.02 }}
        >
          {/* Poster Container */}
          <div className='relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl'>
            {/* Movie Poster */}
            <img
              src={imageUrl}
              alt={media.title || media.name}
              className='w-full h-full object-cover transition-all duration-500 group-hover:brightness-50'
            />

            {/* Rating Badge */}
            <div className='absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-sm'>
              <FaStar className='text-yellow-400' />
              <span>{media.vote_average?.toFixed(1)}</span>
            </div>

            {/* Play Button Overlay */}
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className='w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center shadow-lg shadow-cyan-500/50'
              >
                <FaPlay className='text-white text-2xl ml-1' />
              </motion.div>
            </div>

            {/* Title Gradient Overlay */}
            <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>

          {/* Title Container */}
          <div className='absolute inset-x-0 bottom-0 p-4 transform translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <h3 className='font-bold text-lg text-white text-shadow line-clamp-2'>
              {media.title || media.name}
            </h3>
            <p className='text-sm text-gray-300 mt-1'>
              {new Date(
                media.release_date || media.first_air_date
              ).getFullYear()}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Card;
