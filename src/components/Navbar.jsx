'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/media/results/${search}`);
      setSearch('');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-b from-slate-900/80 to-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='flex items-center space-x-3'>
            <motion.h3
              className='text-2xl font-bold text-white'
              whileHover={{ scale: 1.05 }}
            >
              Griddy Movies
            </motion.h3>
          </Link>

          <div className='hidden md:flex items-center space-x-8'>
            <NavLink href='/media/trending'>Trending</NavLink>
            <NavLink href='/media/movies'>Movies</NavLink>
            <NavLink href='/media/shows'>TV Shows</NavLink>
            <NavLink href='/contact'>About</NavLink>
          </div>

          <div className='flex items-center space-x-4'>
            <form onSubmit={handleSearch} className='relative'>
              <input
                type='text'
                className='bg-slate-800 text-white px-4 py-2 rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <motion.button
                type='submit'
                className='absolute right-3 top-1/2 -translate-y-1/2'
              >
                <svg
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </motion.button>
            </form>

            <button
              className='md:hidden text-white'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden py-4'
            >
              <div className='flex flex-col space-y-4'>
                <MobileNavLink
                  href='/media/trending'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trending
                </MobileNavLink>
                <MobileNavLink
                  href='/media/movies'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Movies
                </MobileNavLink>
                <MobileNavLink
                  href='/media/shows'
                  onClick={() => setIsMenuOpen(false)}
                >
                  TV Shows
                </MobileNavLink>
                <MobileNavLink
                  href='/contact'
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <motion.span
      className='text-gray-300 hover:text-white transition-colors cursor-pointer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick}>
    <motion.span
      className='block text-gray-300 hover:text-white transition-colors'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  </Link>
);

export default Navbar;
