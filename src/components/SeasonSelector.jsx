'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SeasonCard = ({ season, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative cursor-pointer rounded-lg overflow-hidden flex-shrink-0 w-[150px] ${
      isSelected ? 'ring-2 ring-cyan-500' : ''
    }`}
    onClick={onClick}
  >
    <img
      src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
      alt={season.name}
      className={`w-full h-48 object-cover transition-all duration-300 ${
        isSelected ? 'brightness-100' : 'brightness-50'
      }`}
    />
    <div className='absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent'>
      <p className='text-sm font-semibold'>{season.name}</p>
      <p className='text-xs text-gray-300'>{season.episode_count} Episodes</p>
    </div>
  </motion.div>
);

const SeasonSelector = ({ seasons, selectedSeason, onSeasonChange }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scrollSeasons = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const filteredSeasons = seasons.filter(
    (season) => season.name !== 'Specials'
  );

  return (
    <div className='glass-effect rounded-xl p-6'>
      <h3 className='text-xl font-semibold mb-6'>Seasons</h3>
      <div className='relative group'>
        {!isMobile && showLeftArrow && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => scrollSeasons('left')}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors'
          >
            <FaChevronLeft />
          </motion.button>
        )}
        <div
          ref={scrollContainerRef}
          className='overflow-x-auto scrollbar-hide scroll-smooth md:overflow-x-hidden'
        >
          <div className='flex space-x-3 p-2 w-max'>
            {filteredSeasons.map((season) => (
              <SeasonCard
                key={season.id}
                season={season}
                isSelected={selectedSeason === season.season_number}
                onClick={() => onSeasonChange(season.season_number)}
              />
            ))}
          </div>
        </div>
        {!isMobile && showRightArrow && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => scrollSeasons('right')}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors'
          >
            <FaChevronRight />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default SeasonSelector;