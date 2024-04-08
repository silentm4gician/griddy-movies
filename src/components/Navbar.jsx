'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>
{ 
  const [search,setSearch] = useState('')

  const collapse =()=>
  {
    const x = document.getElementById("myTopnav")

    if(x.className === "topnav")
    {
      x.className += " responsive"
    }
    else 
    {
      x.className = "topnav"
    }
  }

  return (
    <nav className="topnav" id="myTopnav">
      <Link className="active hover:bg-slate-800 p-1 rounded-md mt-1 ml-1" href="/">
        <h3 className="text-bold text-2xl ml-1 mt-1">Griddy Movies</h3>
      </Link>
        <Link
          href="/media/trending"
          className="mt-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          Trending
        </Link>
        <Link
          href="/media/movies"
          className="my-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          Movies
        </Link>
        <Link
          href="/media/shows"
          className="my-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          TV Shows
        </Link>
        <Link
          href="/contact"
          className="my-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          About
        </Link>

        <input
          required
          type='text'
          className="bg-slate-700 text-xl py-2 focus:outline-none rounded-md px-2 mx-4 my-2 text-white search"
          placeholder="search"
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
        <div className="float-left mt-3">  
        <Link
          className="h-[3rem] rounded-full cursor-pointer color-800 shadow hover:shadow-slate-300"
          href={`/media/results/${search}`}
          >
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"/>
          <path fillRule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z" clipRule="evenodd"/>
          </svg>
        </Link>
          </div>

      <a  className="icon hover:bg-slate-800 p-3 rounded-md" onClick={collapse}>&#9776;</a>
    </nav>
  );
};

export default Navbar;
