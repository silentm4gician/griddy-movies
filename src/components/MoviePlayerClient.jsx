"use client";

import { motion } from "framer-motion";
import { FaStar, FaClock, FaCalendar, FaGlobe } from "react-icons/fa";
import MediaPlayer from "./MediaPlayer";

const MoviePlayerClient = ({ movieInfo, movieURL }) => {
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
          <img
            src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
            alt={movieInfo.title}
            className="w-full h-[40vh] object-cover rounded-xl opacity-50"
          />
        </div>

        <div className="grid md:grid-cols-[350px,1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.title}
              className="w-full rounded-xl shadow-xl shadow-cyan-500/10"
            />
            
            <div className="glass-effect rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-500" />
                <span>{movieInfo.vote_average?.toFixed(1)} / 10</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-cyan-500" />
                <span>{formatRuntime(movieInfo.runtime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-cyan-500" />
                <span>{new Date(movieInfo.release_date).getFullYear()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-cyan-500" />
                <span>{movieInfo.original_language.toUpperCase()}</span>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movieInfo.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">{movieInfo.title}</h1>
              {movieInfo.tagline && (
                <p className="text-xl text-cyan-400 italic">"{movieInfo.tagline}"</p>
              )}
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{movieInfo.overview}</p>
            </div>

            <div className="aspect-video">
              <MediaPlayer url={movieURL} />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default MoviePlayerClient;