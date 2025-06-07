import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed p-4 w-[100%] px-4 md:px-8 lg:px-16 h-20 bg-white text-[#1F2937] border-b shadow-sm z-20">
        <div className="flex h-full items-center justify-between">
          {/* Left - Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-700">
            Kr<span className="text-gray-800">itika</span> Enterprises
          </NavLink>

          {/* Center - Search Bar (hidden on small screens) */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right - Login + SignUp */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/Login" className="text-sm font-medium text-[#040273] hover:underline">
              Login
            </NavLink>
            <NavLink to="/SignUp" className="text-sm font-medium bg-[#040273] text-white px-4 py-1.5 rounded-md hover:bg-[#040273]">
              SignUp
            </NavLink>
          </div>

          {/* Hamburger - Mobile only */}
          <div className="md:hidden text-3xl cursor-pointer" onClick={() => setisMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>

      {/* Mobile dropdown list */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-gray-100 text-[#1F2937] px-6 py-4 text-lg font-semibold transition-all duration-300 ease-in-out animate-slide-down text-center w-full mx-auto">
          <NavLink to="/Login" onClick={() => setisMenuOpen(false)} className="hover:text-blue-600">Login</NavLink>
          <NavLink to="/SignUp" onClick={() => setisMenuOpen(false)} className="hover:text-blue-600">SignUp</NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;