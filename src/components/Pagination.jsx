'use client';

import { motion } from 'framer-motion';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    router.push(`${pathname}?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.button
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full ${
            currentPage === i
              ? 'bg-cyan-500 text-white'
              : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
          }`}
        >
          {i}
        </motion.button>
      );
    }
    return pages;
  };

  return (
    <div className='flex justify-center items-center space-x-2 mt-8 mb-12'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='px-4 py-2 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Previous
      </motion.button>
      {renderPageNumbers()}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='px-4 py-2 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
