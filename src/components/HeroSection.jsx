"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const HeroSection = ({ movies }) => {
  const router = useRouter();

  const handleSlideClick = (movie) => {
    router.push(`/media/player/movie/${movie.id}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[90vh] overflow-hidden"
    >
      <Swiper
        effect="fade"
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation]}
        className="h-full hero-swiper"
      >
        {movies?.slice(0, 5).map((movie) => (
          <SwiperSlide
            key={movie.id}
            onClick={() => handleSlideClick(movie)}
            className="cursor-pointer"
          >
            <div className="relative h-full w-full group">
              <div className="absolute inset-0 bg-black/50 z-10" />{" "}
              {/* Dark overlay */}
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20">
                <div className="absolute bottom-0 left-0 p-8 w-full max-w-4xl">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-shadow mb-4 group-hover:text-cyan-400 transition-colors"
                  >
                    {movie.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-200 line-clamp-3"
                  >
                    {movie.overview}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                  >
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm group-hover:bg-cyan-500/30 transition-all">
                      Click to Watch
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default HeroSection;
