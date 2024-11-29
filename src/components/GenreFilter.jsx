'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const GenreFilter = ({ genres, selectedGenre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleGenreSelect = (genreId) => {
    const params = new URLSearchParams(searchParams);
    if (genreId === selectedGenre) {
      params.delete('genre');
    } else {
      params.set('genre', genreId);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='glass-effect rounded-xl p-4 mb-8'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between p-2 text-lg font-semibold hover:text-cyan-400 transition-colors'
      >
        <span>Genres</span>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </motion.svg>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className='overflow-hidden'
      >
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4'>
          {genres.map((genre) => (
            <motion.button
              key={genre.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGenreSelect(genre.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedGenre === genre.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {genre.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GenreFilter;
