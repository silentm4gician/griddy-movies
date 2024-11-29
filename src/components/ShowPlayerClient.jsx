'use client';

import { motion } from 'framer-motion';
import { FaStar, FaTv, FaFilm } from 'react-icons/fa';
import HandleSeasons from './HandleSeasons';

const ShowPlayerClient = ({ showInfo }) => {
  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary'>
      {/* Hero Banner */}
      <div className='relative h-[40vh] md:h-[50vh] lg:h-[60vh]'>
        <div className='absolute inset-0'>
          <img
            src={`https://image.tmdb.org/t/p/original${showInfo.backdrop_path}`}
            alt={showInfo.name}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent' />
        </div>

        {/* Show Info */}
        <div className='absolute inset-0 flex items-end'>
          <div className='w-full px-4 pb-8 md:container md:mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='max-w-3xl'
            >
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-shadow'>
                {showInfo.name}
              </h1>
              {showInfo.tagline && (
                <p className='text-lg md:text-xl text-cyan-400 italic mb-4'>
                  "{showInfo.tagline}"
                </p>
              )}
              <div className='flex flex-wrap gap-4 text-sm md:text-base'>
                <span className='flex items-center gap-2'>
                  <FaStar className='text-yellow-500' />
                  {showInfo.vote_average?.toFixed(1)}/10
                </span>
                <span className='flex items-center gap-2'>
                  <FaTv className='text-cyan-500' />
                  {showInfo.number_of_seasons} Seasons
                </span>
                <span className='flex items-center gap-2'>
                  <FaFilm className='text-cyan-500' />
                  {showInfo.number_of_episodes} Episodes
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='w-full px-4 py-8 md:container md:mx-auto'>
        <div className='flex flex-col lg:grid lg:grid-cols-[300px,1fr] gap-8'>
          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='space-y-6 order-2 lg:order-1'
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${showInfo.poster_path}`}
              alt={showInfo.name}
              className='w-full rounded-xl shadow-xl shadow-cyan-500/10 hidden lg:block'
            />

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-4'>Overview</h3>
              <p className='text-gray-300 leading-relaxed'>
                {showInfo.overview}
              </p>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Genres</h3>
              <div className='flex flex-wrap gap-2'>
                {showInfo.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className='px-3 py-1 bg-cyan-500/20 rounded-full text-sm'
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Player and Episodes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-6 order-1 lg:order-2 w-full overflow-x-hidden'
          >
            <HandleSeasons show={showInfo} />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ShowPlayerClient;
