import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="pr-10 pl-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      ></input>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
