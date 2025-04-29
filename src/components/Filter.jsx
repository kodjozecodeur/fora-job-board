import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 mt-4">
      <div className="flex space-x-3">
        <button className="bg-black text-white py-2 px-6 font-bold rounded-full">
          All Jobs
        </button>
        <button className="bg-white text-gray-700 py-2 px-6 font-medium border border-gray-200 rounded-full hover:bg-gray-50">
          Trending Jobs
        </button>
        <button className="bg-white text-gray-700 py-2 px-6 font-medium border border-gray-200 rounded-full hover:bg-gray-50">
          Most Recent Jobs
        </button>
      </div>

      <div className="flex space-x-3">
        <button className="bg-white text-gray-700 py-2 px-6 font-medium border border-gray-200 rounded-full hover:bg-gray-50">
          Full-time
        </button>
        <button className="bg-white text-gray-700 py-2 px-6 font-medium border border-gray-200 rounded-full hover:bg-gray-50">
          Remote
        </button>
      </div>
    </div>
  );
};

export default Filter;
