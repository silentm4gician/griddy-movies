'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const FooterLink = ({ href, children }) => (
  <Link href={href}>
    <motion.span
      className='text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  </Link>
);

export default FooterLink;
