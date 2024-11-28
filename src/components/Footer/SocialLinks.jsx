'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='text-gray-400 hover:text-cyan-400 transition-colors'
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className='text-2xl' />
  </motion.a>
);

const SocialLinks = () => (
  <div className='flex space-x-4'>
    <SocialLink
      href='https://github.com/silentm4gician/griddy-movies'
      icon={FaGithub}
    />
  </div>
);

export default SocialLinks;
