'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>
{ 
  const [search,setSearch] = useState()

  return (
    <nav className="flex p-4 fixed w-full z-20 bg-slate-900 justify-between text-white items-center">
      <Link className="flex" href="/">
        <h3 className="text-bold text-3xl ml-4 mt-1">Griddy Movies</h3>
      </Link>
      <div className="text-lg text-slate-300">
        <Link
          href="/media/trending"
          className="mx-3 hover:bg-slate-800 p-3 rounded-md text-xl"
        >
          Trending
        </Link>
        <Link
          href="/media/movies"
          className="mx-3 hover:bg-slate-800 p-3 rounded-md text-xl"
        >
          Movies
        </Link>
        <Link
          href="/media/shows"
          className="mx-3 hover:bg-slate-800 p-3 rounded-md text-xl"
        >
          TV Shows
        </Link>
        <Link
          href="/contact"
          className="mx-3 hover:bg-slate-800 p-3 rounded-md text-xl"
        >
          About
        </Link>
      </div>
      <div className="relative mx-4">
        <Link
        href={`/media/results/${search}`}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-[2.3rem] h-[2.3rem] absolute bottom-[6px] right-[8px] ml-2 opacity-[.5] hover:bg-slate-700 p-2 rounded-full cursor-pointer"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
        </svg>
            </Link>
        <input
          type='text'
          className="bg-slate-800 text-xl py-2 focus:outline-none rounded-md px-4 h-[50px]"
          placeholder="Search"
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
      </div>
    </nav>
  );
};

export default Navbar;
