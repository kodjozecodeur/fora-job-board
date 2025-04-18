import React from "react";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-4">
        <div className="">
          <img src={logo} alt="Logo Fora job" />
        </div>
        <nav>
          <ul className="flex gap-4 space-x-4 items-center">
            <li>Find a job</li>
            <li>Find a candidate</li>
          </ul>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-800 font-medium hover:text-purple-600">
            Apply as a candidate{" "}
          </button>
          <button className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-2 rounded hover:bg-purple-700">
            Apply as a company
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
