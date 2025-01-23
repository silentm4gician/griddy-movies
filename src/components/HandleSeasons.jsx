'use client';

import { getSeasonInfoClient as getSeasonInfo } from '@/api/requests/requests';
import { useEffect, useState, useRef } from 'react';
import MediaPlayer from './MediaPlayer';
import SeasonSelector from './SeasonSelector';
import EpisodeNavigator from './EpisodeNavigator';
import EpisodeList from './EpisodeList';
import { motion } from 'framer-motion';
import { FaList, FaTimes } from 'react-icons/fa';

const HandleSeasons = ({ show }) => {
  const { seasons } = show;
  const [displayedSeason, setDisplayedSeason] = useState();
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [showEpisodeList, setShowEpisodeList] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(
    `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=1&episode=1`
  );
  const episodeListRef = useRef(null);

  useEffect(() => {
    getSeasonInfo(show.id, 1).then((res) => {
      setDisplayedSeason(res);
    });
  }, [show.id]);

  const handleSeasonChange = async (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    setCurrentEpisode(1);
    const seasonInfo = await getSeasonInfo(show.id, seasonNumber);
    setDisplayedSeason(seasonInfo);
    setMediaUrl(
      `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=${seasonNumber}&episode=1`
    );
  };

  const handleEpisodeChange = (seasonNumber, episodeNumber) => {
    setCurrentEpisode(episodeNumber);
    setMediaUrl(
      `https://vidsrc.xyz/embed/tv?tmdb=${show.id}&season=${seasonNumber}&episode=${episodeNumber}`
    );
  };

  const toggleEpisodeList = () => {
    setShowEpisodeList(!showEpisodeList);
    if (!showEpisodeList && episodeListRef.current) {
      setTimeout(() => {
        episodeListRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const currentEpisodeInfo = displayedSeason?.episodes[currentEpisode - 1];

  return (
    <div className='space-y-6 max-w-xs mx-auto container px-4 pb-8 w-[90vw] sm:w-[600px] md:w-[45vw] lg:w-[55vw]'>
      <SeasonSelector
        seasons={seasons}
        selectedSeason={selectedSeason}
        onSeasonChange={handleSeasonChange}
      />

      <div className='glass-effect rounded-xl p-4'>
        <div className='aspect-video'>
          <MediaPlayer url={mediaUrl} />
        </div>

        <div className='mt-4 space-y-4'>
          <EpisodeNavigator
            currentSeason={selectedSeason}
            currentEpisode={currentEpisode}
            totalEpisodes={displayedSeason?.episodes.length}
            onEpisodeChange={handleEpisodeChange}
            episodeInfo={currentEpisodeInfo}
          />

          <button
            onClick={toggleEpisodeList}
            className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors'
          >
            {showEpisodeList ? (
              <>
                <FaTimes /> Hide Episode List
              </>
            ) : (
              <>
                <FaList /> View All Episodes ({displayedSeason?.episodes.length}
                )
              </>
            )}
          </button>
        </div>
      </div>

      {showEpisodeList && (
        <div ref={episodeListRef}>
          <EpisodeList
            episodes={displayedSeason?.episodes}
            currentEpisode={currentEpisode}
            onEpisodeSelect={(episodeNumber) =>
              handleEpisodeChange(selectedSeason, episodeNumber)
            }
          />
        </div>
      )}
    </div>
  );
};

export default HandleSeasons;