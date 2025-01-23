'use client';

import { motion } from 'framer-motion';
import { FaStar, FaClock, FaCalendar } from 'react-icons/fa';
import MediaPlayer from './MediaPlayer';
import CastCarousel from './CastCarousel';
import MovieCarousel from './MovieCarousel';

const MoviePlayerClient = ({ movieInfo, movieURL }) => {
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary'>
      <div className='relative h-[50vh] lg:h-[60vh]'>
        <div className='absolute inset-0'>
          <img
            src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
            alt={movieInfo.title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent' />
        </div>
        <div className='absolute inset-0 flex items-end'>
          <div className='container mx-auto px-4 pb-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='max-w-3xl'
            >
              <h1 className='text-4xl md:text-5xl font-bold mb-2 text-shadow'>
                {movieInfo.title}
              </h1>
              {movieInfo.tagline && (
                <p className='text-xl text-cyan-400 italic mb-4'>
                  "{movieInfo.tagline}"
                </p>
              )}
              <div className='flex flex-wrap gap-4'>
                <span className='flex items-center gap-2'>
                  <FaStar className='text-yellow-500' />
                  {movieInfo.vote_average?.toFixed(1)}/10
                </span>
                <span className='flex items-center gap-2'>
                  <FaClock className='text-cyan-500' />
                  {formatRuntime(movieInfo.runtime)}
                </span>
                <span className='flex items-center gap-2'>
                  <FaCalendar className='text-cyan-500' />
                  {new Date(movieInfo.release_date).getFullYear()}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>        
        <div className='grid md:grid-cols-[350px,1fr] gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='space-y-6'
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.title}
              className='w-full rounded-xl shadow-xl shadow-cyan-500/10'
            />

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-4'>Overview</h3>
              <p className='text-gray-300 leading-relaxed'>
                {movieInfo.overview}
              </p>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Genres</h3>
              <div className='flex flex-wrap gap-2'>
                {movieInfo.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className='px-3 py-1 bg-cyan-500/20 rounded-full text-sm'
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Production Companies</h3>
              <div className='flex flex-wrap gap-4 items-center'>
                {movieInfo.production_companies?.map((company) => (
                  <div key={company.id} className='flex flex-col items-center gap-2'>
                    {company.logo_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        className='h-12 object-contain'
                      />
                    ) : (
                      <span className='text-sm text-gray-400'>{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Additional Information</h3>
              <div className='space-y-3'>
                <div>
                  <span className='text-cyan-400'>Original Title:</span>
                  <span className='ml-2'>{movieInfo.original_title}</span>
                </div>
                <div>
                  <span className='text-cyan-400'>Original Language:</span>
                  <span className='ml-2'>{movieInfo.spoken_languages?.[0]?.english_name}</span>
                </div>
                <div>
                  <span className='text-cyan-400'>Status:</span>
                  <span className='ml-2'>{movieInfo.status}</span>
                </div>
                {movieInfo.budget > 0 && (
                  <div>
                    <span className='text-cyan-400'>Budget:</span>
                    <span className='ml-2'>${movieInfo.budget?.toLocaleString()}</span>
                  </div>
                )}
                {movieInfo.revenue > 0 && (
                  <div>
                    <span className='text-cyan-400'>Revenue:</span>
                    <span className='ml-2'>${movieInfo.revenue?.toLocaleString()}</span>
                  </div>
                )}
                {movieInfo.homepage && (
                  <div>
                    <span className='text-cyan-400'>Homepage:</span>
                    <a 
                      href={movieInfo.homepage}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-2 text-cyan-500 hover:text-cyan-400'
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-6'
          >
            <div className='glass-effect rounded-xl p-4'>
              <div className='aspect-video'>
                <MediaPlayer url={movieURL} />
              </div>
            </div>
              {movieInfo.recommendations?.results?.length > 0  &&(
            <div className={`container mx-auto px-4 pb-8 w-[90vw] sm:w-[600px] md:w-[45vw] lg:w-[55vw]`}>
                  <div className='glass-effect rounded-xl p-6 mb-8 m-auto mt-8'>
                  <h3 className='text-lg font-semibold mb-4'>Cast</h3>
                  <CastCarousel cast={movieInfo.credits?.cast} />
                </div>

              <div className='glass-effect rounded-xl p-6 mx-auto'>
                <h3 className='text-lg font-semibold mb-4'>More Like This</h3>
                <MovieCarousel movies={movieInfo.recommendations.results} />
              </div>
            </div>
      )}  
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default MoviePlayerClient;
