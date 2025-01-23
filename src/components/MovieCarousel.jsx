'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import '@/styles/carousel.css';

const MovieCarousel = ({ movies, isShow }) => {
  if (!movies?.length) return null;

  return (
    <div className='movie-carousel'>
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        freeMode={true}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className='py-4'
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              href={isShow ? `/media/player/show/${movie.id}` : `/media/player/movie/${movie.id}`}
              className='block group/card cursor-pointer p-2'
            >
              <div className='relative aspect-[2/3] overflow-hidden rounded-lg'>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className='w-full h-full object-cover transform transition-transform duration-300 group-hover/card:scale-110'
                  />
                ) : (
                  <div className='w-full h-full bg-gray-800 flex items-center justify-center'>
                    <span className='text-4xl'>🎬</span>
                  </div>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-0 p-3 w-full'>
                    <div className='flex items-center gap-1 text-yellow-500 mb-1'>
                      <FaStar size={12} />
                      <span className='text-xs'>{movie.vote_average?.toFixed(1)}</span>
                    </div>
                    <p className='text-xs text-gray-300 line-clamp-3'>{movie.overview}</p>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <h4 className='font-medium text-sm group-hover/card:text-cyan-400 transition-colors truncate'>
                  {isShow ? movie.name : movie.title}
                </h4>
                <p className='text-xs text-gray-400'>
                  {!isShow ? new Date(movie.release_date).getFullYear() : new Date(movie.first_air_date).getFullYear()}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
