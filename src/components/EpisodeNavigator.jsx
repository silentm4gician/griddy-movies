'use client';

import { motion } from 'framer-motion';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';

const EpisodeNavigator = ({
  currentSeason,
  currentEpisode,
  totalEpisodes,
  onEpisodeChange,
  episodeInfo,
}) => {
  const handlePrevious = () => {
    if (currentEpisode > 1) {
      onEpisodeChange(currentSeason, currentEpisode - 1);
    }
  };

  const handleNext = () => {
    if (currentEpisode < totalEpisodes) {
      onEpisodeChange(currentSeason, currentEpisode + 1);
    }
  };

  return (
    <div className='glass-effect rounded-xl p-4 flex items-center justify-between'>
      <button
        onClick={handlePrevious}
        disabled={currentEpisode === 1}
        className='flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        <FaStepBackward />
        Previous
      </button>

      <div className='text-center'>
        <h4 className='font-semibold'>{episodeInfo?.name}</h4>
        <p className='text-sm text-gray-400'>
          Episode {currentEpisode} of {totalEpisodes}
        </p>
      </div>

      <button
        onClick={handleNext}
        disabled={currentEpisode === totalEpisodes}
        className='flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Next
        <FaStepForward />
      </button>
    </div>
  );
};

export default EpisodeNavigator;
