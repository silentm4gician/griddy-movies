'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>
{ 
  const [search,setSearch] = useState()

  const collapse =()=>
  {
    const x = document.getElementById("myTopnav")

    if(x.className === "topnav")
    {
      x.className += " responsive nashe"
    }
    else 
    {
      x.className = "topnav"
    }
  }

  const find =(e)=>
  {
    e.preventDefault()
    window.location.href = `/media/results/${search}`
  }

  return (
    <nav className="topnav" id="myTopnav">
      <Link className="active hover:bg-slate-800 p-2 rounded-md mt-1 ml-1" href="/">
        <h3 className="text-bold text-2xl ml-4 mt-1">Griddy Movies</h3>
      </Link>
        <Link
          href="/media/trending"
          className="mx-1 mt-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          Trending
        </Link>
        <Link
          href="/media/movies"
          className="mx-1 my-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          Movies
        </Link>
        <Link
          href="/media/shows"
          className="mx-1 my-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          TV Shows
        </Link>
        <Link
          href="/contact"
          className="mx-1 my-3 hover:bg-slate-800 p-1 rounded-md menu"
        >
          About
        </Link>

        <form onSubmit={find} action="">
        <input
          type='text'
          className="bg-slate-700 text-xl py-2 focus:outline-none rounded-md px-2 mx-6 my-2 text-white search"
          placeholder="Search"
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
        </form>

      <a  className="icon hover:bg-slate-800 p-3 rounded-md" onClick={collapse}>&#9776;</a>
    </nav>
  );
};

export default Navbar;
