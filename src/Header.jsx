import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <>
      <header className="fixed top-0 left-0 z-50 w-full mb-20 bg-gradient-to-bl from-[#42737B] via-[#467C85] to-[#49828E]">

        <div className="flex justify-between items-center p-4 text-red-500 border-b-2 border-black">
          <div className="flex items-center">
            <Link to="/">
            <svg
              className="transition w-8 h-8 text-black hover:text-[#fc0d0d]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M3 12l9-9 9 9v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z"
              />
            </svg>
            </Link>
          
          </div>
<<<<<<< HEAD
          <h1 className="text-5xl font-ecbold font-caveat bg-gradient-to-b from-[#ffffff] to-[#3EB0C3] bg-clip-text text-transparent">
=======
          <h1 className="text-5xl font-bold  bg-gradient-to-b from-[#ffffff] to-[#3EB0C3] bg-clip-text text-transparent" style={{fontFamily: "'Qwitcher Grypen', cursive"}}>
>>>>>>> 8f648ff2a10b01ac364512ea12f74b8f4fc7871e
            Settle In
          </h1>
          {/* Use Link for navigation instead of <a> */}
          <Link
            to="/login"
            className="text-white text-2xl font-serif p-1 rounded-xl"
          >
            Login
          </Link>
        </div>
      </header>

    </>
  );
};

export default Header;