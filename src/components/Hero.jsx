import React from "react";
import texture from "../assets/texture.png";
const Hero = () => {
  return (
    <div className="mb-4">
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl overflow-hidden text-white text-center py-16 px-4">
        <img
          src={texture}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />

        <h1 className="relative z-10 text-4xl font-bold mb-4">
          Find your next Tech Mission
        </h1>
        <p className="relative z-10 max-w-xl mx-auto">
          Discover exciting opportunities and connect with top companies in the
          tech industry. Join us today and take your career to the next level!
        </p>
        <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] max-w-3xl z-20">
          <div className="flex items-center bg-white shadow-lg rounded-full px-4 py-2">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <input
              type="text"
              placeholder="Type to search..."
              className="flex-grow outline-none text-gray-700"
            />
            <button className="bg-gray-800 text-white px-4 py-1 rounded-full font-semibold hover:bg-gray-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
