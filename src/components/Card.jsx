"use client";

import Link from "next/link";
// import { useEffect, useState } from "react";

const Card = ({ media }) => {
  // const [statusValue, setStatusValue] = useState(null);
  
  const imageUrl = `https://image.tmdb.org/t/p/w300${media.poster_path}`;
  
  const linkUrl = media.first_air_date
  ? `/media/player/show/${media.id}`
  : `/media/player/movie/${media.id}`;
  
  
  // useEffect(() =>
  // {
  //   const corsURL = 'https://proxy-ibmasyzzya-uc.a.run.app/'
  //   const urlToCheck = media.first_air_date
  //   ? `${corsURL}https://vidsrc.xyz/embed/tv?tmdb=${media.id}`
  //   : `${corsURL}https://vidsrc.xyz/embed/movie?tmdb=${media.id}`

  //   const fetchData = async () => 
  //   {
  //     const response = await fetch(urlToCheck);
  //     setStatusValue(response.status);
  //   };

  //   fetchData();
  // }, []);
  

  return (
    <>
        <Link legacyBehavior href={linkUrl}>
          <a className="relative moviecards m-0 p-0 group">
            <div className="overflow-hidden rounded-md">
              <img
                src={imageUrl}
                alt="Media Image"
                className="object-cover group-hover:blur-[4px] group-hover:brightness-50 brightness-[0.85] rounded-md duration-300"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[50px] h-[50px] bg-yellow-200 rounded-full p-2 absolute right-[20px] bottom-[20px] opacity-[0] group-hover:opacity-[.8] brightness-90 hover:bg-yellow-300 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>

            <div className="absolute top-[10px] mx-4">
              <p className="text-white text-3xl font-bold group-hover:text-yellow-200">
                {media.title ? media.title : media.name}
              </p>
            </div>
          </a>
        </Link>
      )
    </>
  );
};

export default Card;
