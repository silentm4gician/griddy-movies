'use client';

import { motion } from 'framer-motion';

const MediaPlayer = ({ url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='media-player-container glass-effect p-2 h-full'
    >
      <iframe src={url} className='w-full h-full rounded-lg' allowFullScreen />
    </motion.div>
  );
};

export default MediaPlayer;
