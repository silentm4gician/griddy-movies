"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-700 text-white h-full flex flex-col">
      <button
        className={`${
          isOpen ? "bg-gray-600" : "bg-gray-700"
        } p-3 duration-300 text-lg text-start focus:outline-none flex items-center`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>Categories</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-4 h-6 ml-1 transition duration-200 ${
            isOpen && "rotate-90"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "show scale-y-100" : "scale-y-0"
        } bg-gray-600 flex flex-col align-center duration-200 origin-top`}
      >
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
        <div className="p-2 hover:bg-slate-800 duration-300">Terror</div>
      </div>
    </div>
  );
};

export default Sidebar;
