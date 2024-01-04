'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>
{ 
  const [search,setSearch] = useState('naruto')

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
          className="h-[3rem] mr-2 p-2 rounded-full cursor-pointer color-800"
          href={`/media/results/${search}`}
          >
          🔍
        </Link>
          </div>

      <a  className="icon hover:bg-slate-800 p-3 rounded-md" onClick={collapse}>&#9776;</a>
    </nav>
  );
};

export default Navbar;
