'use client';

import { motion } from 'framer-motion';
import { FaStar, FaImdb, FaFacebookSquare, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaWikipediaW } from 'react-icons/fa';
import Link from 'next/link';

const ActorClient = ({ actorInfo }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Sort credits by release date (newest first) and popularity
  const sortedCredits = actorInfo.combined_credits?.cast?.sort((a, b) => {
    const dateA = a.release_date || a.first_air_date || '';
    const dateB = b.release_date || b.first_air_date || '';
    if (dateB !== dateA) {
      return dateB.localeCompare(dateA);
    }
    return b.popularity - a.popularity;
  });

  const socialLinks = [
    {
      id: 'imdb',
      url: actorInfo.external_ids?.imdb_id ? `https://www.imdb.com/name/${actorInfo.external_ids.imdb_id}` : null,
      icon: FaImdb,
      color: 'text-yellow-400',
    },
    {
      id: 'facebook',
      url: actorInfo.external_ids?.facebook_id ? `https://facebook.com/${actorInfo.external_ids.facebook_id}` : null,
      icon: FaFacebookSquare,
      color: 'text-blue-500',
    },
    {
      id: 'instagram',
      url: actorInfo.external_ids?.instagram_id ? `https://instagram.com/${actorInfo.external_ids.instagram_id}` : null,
      icon: FaInstagram,
      color: 'text-pink-500',
    },
    {
      id: 'twitter',
      url: actorInfo.external_ids?.twitter_id ? `https://twitter.com/${actorInfo.external_ids.twitter_id}` : null,
      icon: FaTwitter,
      color: 'text-sky-500',
    },
    {
      id: 'tiktok',
      url: actorInfo.external_ids?.tiktok_id ? `https://tiktok.com/@${actorInfo.external_ids.tiktok_id}` : null,
      icon: FaTiktok,
      color: 'text-gray-100',
    },
    {
      id: 'youtube',
      url: actorInfo.external_ids?.youtube_id ? `https://youtube.com/${actorInfo.external_ids.youtube_id}` : null,
      icon: FaYoutube,
      color: 'text-red-500',
    },
    {
      id: 'wikidata',
      url: actorInfo.external_ids?.wikidata_id ? `https://www.wikidata.org/wiki/${actorInfo.external_ids.wikidata_id}` : null,
      icon: FaWikipediaW,
      color: 'text-gray-100',
    },
  ];

  const availableSocialLinks = socialLinks.filter(link => link.url);

  return (
    <main className='min-h-screen bg-gradient-to-b from-primary to-secondary pt-16'>
      <div className='container mx-auto px-4 sm:px-6 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-[minmax(250px,300px),1fr] gap-6 md:gap-8'>
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='space-y-4 sm:space-y-6'
          >
            <div className='relative aspect-[2/3] overflow-hidden rounded-xl shadow-xl shadow-cyan-500/10'>
              {actorInfo.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actorInfo.profile_path}`}
                  alt={actorInfo.name}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full bg-gray-800 flex items-center justify-center'>
                  <span className='text-6xl'>👤</span>
                </div>
              )}
            </div>

            <div className='glass-effect rounded-xl p-4 sm:p-6'>
              <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Personal Info</h3>
              <div className='space-y-4 sm:space-y-6'>
                <div>
                  <h4 className='text-cyan-400 text-sm'>Known For</h4>
                  <p>{actorInfo.known_for_department}</p>
                </div>
                <div>
                  <h4 className='text-cyan-400 text-sm'>Birthday</h4>
                  <p>{formatDate(actorInfo.birthday)}</p>
                </div>
                {actorInfo.deathday && (
                  <div>
                    <h4 className='text-cyan-400 text-sm'>Died</h4>
                    <p>{formatDate(actorInfo.deathday)}</p>
                  </div>
                )}
                <div>
                  <h4 className='text-cyan-400 text-sm'>Place of Birth</h4>
                  <p>{actorInfo.place_of_birth || 'N/A'}</p>
                </div>
                {actorInfo.also_known_as?.length > 0 && (
                  <div>
                    <h4 className='text-cyan-400 text-sm'>Also Known As</h4>
                    <ul className='list-none space-y-1'>
                      {actorInfo.also_known_as.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {availableSocialLinks.length > 0 && (
              <div className='glass-effect rounded-xl p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Social Media</h3>
                <div className='flex flex-wrap gap-4'>
                  {availableSocialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`text-2xl hover:scale-110 transition-transform ${link.color}`}
                      title={link.id.charAt(0).toUpperCase() + link.id.slice(1)}
                    >
                      <link.icon />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Biography and Credits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='space-y-4 sm:space-y-6'
          >
            <div>
              <h1 className='text-3xl sm:text-4xl font-bold mb-2'>{actorInfo.name}</h1>
              <div className='flex items-center gap-2 text-cyan-400 mb-4'>
                <FaStar />
                <span>{actorInfo.popularity.toFixed(1)} Popularity</span>
              </div>
            </div>

            {actorInfo.biography && (
              <div className='glass-effect rounded-xl p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Biography</h3>
                <p className='text-gray-300 leading-relaxed whitespace-pre-line'>
                  {actorInfo.biography}
                </p>
              </div>
            )}

            <div className='glass-effect rounded-xl p-4 sm:p-6'>
              <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Known For</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4'>
                {sortedCredits?.slice(0, 10).map((credit) => (
                  <Link
                    key={`${credit.id}-${credit.credit_id}`}
                    href={`/media/player/${credit.media_type.includes('tv') ? 'show' : 'movie'}/${credit.id}`}
                    className='block group/card'
                  >
                    <div className='relative aspect-[2/3] overflow-hidden rounded-lg'>
                      {credit.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w300${credit.poster_path}`}
                          alt={credit.title || credit.name}
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
                            <FaStar className='text-xs' />
                            <span className='text-[10px] sm:text-xs'>
                              {credit.vote_average?.toFixed(1)}
                            </span>
                          </div>
                          <p className='text-[10px] sm:text-xs text-gray-300 line-clamp-2'>
                            {credit.character}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <h4 className='font-medium text-xs sm:text-sm group-hover/card:text-cyan-400 transition-colors truncate'>
                        {credit.title || credit.name}
                      </h4>
                      <p className='text-[10px] sm:text-xs text-gray-400'>
                        {new Date(
                          credit.release_date || credit.first_air_date
                        ).getFullYear() || 'N/A'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className='glass-effect rounded-xl p-4 sm:p-6'>
              <h3 className='text-base sm:text-lg font-semibold mb-3 sm:mb-4'>Credits</h3>
              <div className='space-y-3 sm:space-y-4'>
                {sortedCredits?.map((credit) => (
                  <Link
                    key={`${credit.id}-${credit.credit_id}`}
                    href={`/media/player/${credit.media_type.includes('tv') ? 'show' : 'movie'}/${credit.id}`}
                    className='block glass-effect p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-colors'
                  >
                    <div className='flex items-center gap-3 sm:gap-4'>
                      {credit.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${credit.poster_path}`}
                          alt={credit.title || credit.name}
                          className='w-12 h-18 sm:w-16 sm:h-24 object-cover rounded'
                        />
                      ) : (
                        <div className='w-12 h-18 sm:w-16 sm:h-24 bg-gray-800 flex items-center justify-center rounded'>
                          <span className='text-xl sm:text-2xl'>🎬</span>
                        </div>
                      )}
                      <div className='flex-1 min-w-0'>
                        <h4 className='font-medium text-sm sm:text-base mb-1 truncate'>
                          {credit.title || credit.name}
                        </h4>
                        <p className='text-xs sm:text-sm text-gray-400 mb-1'>
                          {credit.character && `as ${credit.character}`}
                        </p>
                        <div className='flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400'>
                          <span>
                            {new Date(
                              credit.release_date || credit.first_air_date
                            ).getFullYear() || 'N/A'}
                          </span>
                          <div className='flex items-center gap-1 text-yellow-500'>
                            <FaStar size={12} />
                            <span>{credit.vote_average?.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ActorClient;
