"use client";

import { motion } from "framer-motion";
import { FaStar, FaCalendar, FaGlobe, FaTv } from "react-icons/fa";
import HandleSeasons from "./HandleSeasons";

const ShowPlayerClient = ({ showInfo }) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
          <img
            src={`https://image.tmdb.org/t/p/original${showInfo.backdrop_path}`}
            alt={showInfo.name}
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
              src={`https://image.tmdb.org/t/p/w500${showInfo.poster_path}`}
              alt={showInfo.name}
              className="w-full rounded-xl shadow-xl shadow-cyan-500/10"
            />
            
            <div className="glass-effect rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-500" />
                <span>{showInfo.vote_average?.toFixed(1)} / 10</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTv className="text-cyan-500" />
                <span>{showInfo.number_of_seasons} Seasons</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-cyan-500" />
                <span>{new Date(showInfo.first_air_date).getFullYear()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-cyan-500" />
                <span>{showInfo.original_language.toUpperCase()}</span>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {showInfo.genres?.map((genre) => (
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
              <h1 className="text-4xl font-bold mb-2">{showInfo.name}</h1>
              {showInfo.tagline && (
                <p className="text-xl text-cyan-400 italic">"{showInfo.tagline}"</p>
              )}
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{showInfo.overview}</p>
            </div>

            <HandleSeasons show={showInfo} />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ShowPlayerClient;