'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const EpisodeList = ({ episodes, currentEpisode, onEpisodeSelect }) => {
  return (
    <div className='glass-effect rounded-xl p-6'>
      <h3 className='text-xl font-semibold mb-4'>All Episodes</h3>
      <div className='grid gap-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-slate-800'>
        <AnimatePresence mode='wait'>
          {episodes?.map((episode) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`glass-effect rounded-xl overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 ${
                currentEpisode === episode.episode_number
                  ? 'ring-2 ring-cyan-500'
                  : ''
              }`}
              onClick={() => onEpisodeSelect(episode.episode_number)}
            >
              <div className='flex flex-col md:flex-row'>
                <div className='relative md:w-64 shrink-0'>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                    alt={episode.name}
                    className='w-full h-48 md:h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity'>
                    <FaPlay className='text-3xl text-white' />
                  </div>
                  <div className='absolute top-2 left-2 px-2 py-1 bg-black/70 rounded-md text-sm'>
                    Episode {episode.episode_number}
                  </div>
                </div>
                <div className='p-4 flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <h4 className='font-semibold text-lg'>{episode.name}</h4>
                    <span className='text-sm text-cyan-400'>
                      {new Date(episode.air_date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className='text-gray-400 line-clamp-3'>
                    {episode.overview || 'No overview available.'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EpisodeList;
