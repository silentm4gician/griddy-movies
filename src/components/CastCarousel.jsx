'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import '@/styles/carousel.css';
import Link from 'next/link';

const CastCarousel = ({ cast }) => {
  if (!cast?.length) return null;

  return (
    <div className='cast-carousel'>
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
        {cast.map((actor) => (
          <SwiperSlide key={actor.id}>
            <Link href={`/actor/${actor.id}`} className='block group/card cursor-pointer p-2'>
              <div className='relative aspect-[2/3] overflow-hidden rounded-lg'>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.name}
                    className='w-full h-full object-cover transform transition-transform duration-300 group-hover/card:scale-110'
                  />
                ) : (
                  <div className='w-full h-full bg-gray-800 flex items-center justify-center'>
                    <span className='text-4xl'>👤</span>
                  </div>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-0 p-3 w-full'>
                    <p className='text-xs text-gray-300 line-clamp-2'>{actor.known_for_department}</p>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <h4 className='font-medium text-sm group-hover/card:text-cyan-400 transition-colors truncate'>
                  {actor.name}
                </h4>
                <p className='text-xs text-gray-400 truncate'>
                  {actor.character}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastCarousel;
