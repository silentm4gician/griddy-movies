'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MovieGrid from './MovieGrid';
import { FaFilm, FaTv } from 'react-icons/fa';

const ResultsClient = ({ params, initialMovieResults, initialTvResults }) => {
  const [media, setMedia] = useState('movie');
  const results = media === 'movie' ? initialMovieResults : initialTvResults;

  const TabButton = ({ type, icon: Icon, label }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setMedia(type)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
        media === type
          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
      }`}
    >
      <Icon className='text-lg' />
      <span>{label}</span>
    </motion.button>
  );

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary pt-24'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-8'
        >
          <h1 className='text-4xl font-bold mb-4'>
            Search Results for{' '}
            <span className='gradient-text'>
              "{decodeURIComponent(params.id)}"
            </span>
          </h1>
          <div className='flex justify-center space-x-4 mt-8'>
            <TabButton type='movie' icon={FaFilm} label='Movies' />
            <TabButton type='tv' icon={FaTv} label='TV Shows' />
          </div>
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={media}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {results?.length > 0 ? (
              <MovieGrid media={results} />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center py-16'
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-semibold text-gray-300 mb-2'>
                  No {media === 'movie' ? 'movies' : 'TV shows'} found for "
                  {params.id}"
                </h3>
                <p className='text-gray-400'>
                  Try searching with different keywords or browse our categories
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ResultsClient;
