"use client";

import { getSeasonInfo } from "@/api/requests/requests";
import { useEffect, useState } from "react";
import MediaPlayer from "./MediaPlayer";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SeasonCard = ({ season, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative cursor-pointer rounded-lg overflow-hidden ${
      isSelected ? 'ring-2 ring-cyan-500' : ''
    }`}
    onClick={onClick}
  >
    <img
      src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
      alt={season.name}
      className={`w-full h-48 object-cover transition-all duration-300 ${
        isSelected ? 'brightness-100' : 'brightness-50'
      }`}
    />
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
      <p className="text-sm font-semibold">{season.name}</p>
      <p className="text-xs text-gray-300">{season.episode_count} Episodes</p>
    </div>
  </motion.div>
);

const HandleSeasons = ({ show }) => {
  const { seasons } = show;
  const [displayedSeason, setDisplayedSeason] = useState();
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [mediaUrl, setMediaUrl] = useState(
    `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=1&episode=1`
  );

  useEffect(() => {
    getSeasonInfo(show.id, 1).then((res) => {
      setDisplayedSeason(res);
    });
  }, []);

  const handleSeasonChange = async (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    const seasonInfo = await getSeasonInfo(show.id, seasonNumber);
    setDisplayedSeason(seasonInfo);
  };

  const handleEpisodeClick = (seasonNumber, episodeNumber) => {
    setMediaUrl(
      `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=${seasonNumber}&episode=${episodeNumber}`
    );
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video">
        <MediaPlayer url={mediaUrl} />
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Seasons</h3>
        <div className="relative">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-slate-800">
            <div className="flex space-x-4 p-2">
              {seasons
                .filter(season => season.name !== "Specials")
                .map((season) => (
                  <SeasonCard
                    key={season.id}
                    season={season}
                    isSelected={selectedSeason === season.season_number}
                    onClick={() => handleSeasonChange(season.season_number)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Episodes</h3>
        <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-slate-800">
          <AnimatePresence mode="wait">
            {displayedSeason?.episodes.map((episode) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-effect rounded-xl overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10"
                onClick={() => handleEpisodeClick(episode.season_number, episode.episode_number)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-64">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                      alt={episode.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <FaPlay className="text-3xl text-white" />
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">
                        {episode.episode_number}. {episode.name}
                      </h4>
                      <span className="text-sm text-cyan-400">
                        {new Date(episode.air_date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-400 line-clamp-3">
                      {episode.overview || "No overview available."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HandleSeasons;