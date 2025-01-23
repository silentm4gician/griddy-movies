'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import HandleSeasons from './HandleSeasons';
import CastCarousel from './CastCarousel';
import MovieCarousel from './MovieCarousel';

const ShowPlayerClient = ({ showInfo }) => {
  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary'>
      <div className='relative h-[50vh] lg:h-[60vh]'>
        <div className='absolute inset-0'>
          <img
            src={`https://image.tmdb.org/t/p/original${showInfo.backdrop_path}`}
            alt={showInfo.name}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent' />
        </div>

        <div className='absolute inset-0 flex items-end'>
          <div className='container mx-auto px-4 py-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='max-w-3xl'
            >
              <h1 className='text-4xl md:text-5xl font-bold mb-2 text-shadow'>
                {showInfo.name}
              </h1>
              {showInfo.tagline && (
                <p className='text-xl text-cyan-400 italic mb-4'>
                  "{showInfo.tagline}"
                </p>
              )}
              <div className='flex items-center gap-4 text-sm'>
                <div className='flex items-center gap-1'>
                  <FaStar className='text-yellow-500' />
                  <span>{showInfo.vote_average?.toFixed(1)}</span>
                </div>
                <span>{showInfo.first_air_date?.split('-')[0]}</span>
                <span>{showInfo.number_of_seasons} Season{showInfo.number_of_seasons !== 1 ? 's' : ''}</span>
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
              src={`https://image.tmdb.org/t/p/w500${showInfo.poster_path}`}
              alt={showInfo.name}
              className='w-full rounded-xl shadow-xl shadow-cyan-500/10'
            />

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-4'>Overview</h3>
              <p className='text-gray-300 leading-relaxed'>
                {showInfo.overview}
              </p>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Genres</h3>
              <div className='flex flex-wrap gap-2'>
                {showInfo.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className='px-3 py-1 bg-gray-800 rounded-full text-sm'
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Production Companies</h3>
              <div className='flex flex-wrap gap-4 items-center'>
                {showInfo.production_companies?.map((company) => (
                  <div key={company.id} className='flex flex-col items-center gap-2'>
                    {company.logo_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        className='h-8 object-contain dark:filter dark:invert'
                      />
                    ) : (
                      <span className='text-sm'>{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='glass-effect rounded-xl p-6'>
              <h3 className='text-lg font-semibold mb-2'>Additional Information</h3>
              <div className='space-y-3'>
                <div>
                  <span className='text-cyan-400'>Original Name:</span>
                  <span className='ml-2'>{showInfo.original_name}</span>
                </div>
                <div>
                  <span className='text-cyan-400'>Status:</span>
                  <span className='ml-2'>{showInfo.status}</span>
                </div>
                <div>
                  <span className='text-cyan-400'>First Air Date:</span>
                  <span className='ml-2'>{showInfo.first_air_date}</span>
                </div>
                {showInfo.last_air_date && (
                  <div>
                    <span className='text-cyan-400'>Last Air Date:</span>
                    <span className='ml-2'>{showInfo.last_air_date}</span>
                  </div>
                )}
                <div>
                  <span className='text-cyan-400'>Number of Episodes</span>
                  <span className='ml-2'>{showInfo.number_of_episodes}</span>
                </div>
                {
                  showInfo.episode_run_time.length > 0 && (
                    <div>
                      <span className='text-cyan-400'>Duration:</span>
                      <span className='ml-2'>{showInfo.episode_run_time[0]} min</span>
                    </div>
                  )
                }
                <div>
                  <span className='text-cyan-400'>Original Language:</span>
                  <span className='ml-2'>{showInfo.original_language.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-6'
          >
            <HandleSeasons show={showInfo} />

            {showInfo.credits?.cast?.length > 0 && (
              <div className='container mx-auto px-4 pb-8 w-[90vw] sm:w-[600px] md:w-[45vw] lg:w-[55vw]'>
                <div className='glass-effect rounded-xl p-6 mb-8 m-auto mt-8'>
                  <h3 className='text-lg font-semibold mb-4'>Cast</h3>
                  <CastCarousel cast={showInfo.credits.cast} />
                </div>

                {showInfo.recommendations?.results?.length > 0 && (
                  <div className='glass-effect rounded-xl p-6 mx-auto'>
                    <h3 className='text-lg font-semibold mb-4'>More Like This</h3>
                    <MovieCarousel movies={showInfo.recommendations.results} isShow={true}/>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ShowPlayerClient;
