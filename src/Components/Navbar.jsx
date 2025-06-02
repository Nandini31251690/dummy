import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-4 px-10 md:px-20 h-20 bg-[#F3F4F6] text-[#1F2937]">
        <div className="flex h-full items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold">Logo</NavLink>

          {/* Desktop Links */}
          <div className="md:flex hidden gap-6 text-xl font-semibold">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>

          {/* toggle Hamburger Icon */}
          <div className="md:hidden text-3xl cursor-pointer" onClick={() => setisMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>

      {/* Mobile dropdown list */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-[#F3F4F6] text-[#1F2937] px-6 py-4 text-lg font-semibold
               transition-all duration-300 ease-in-out animate-slide-down text-center w-[100%] mx-auto ">
          <NavLink to="/products" onClick={() => setisMenuOpen(false)} className="hover:text-[#7C3AED]">Products</NavLink>
          <NavLink to="/services" onClick={() => setisMenuOpen(false)} className="hover:text-[#7C3AED]">Services</NavLink>
          <NavLink to="/contact" onClick={() => setisMenuOpen(false)} className="hover:text-[#7C3AED]">Contact Us</NavLink>
          <NavLink to="/about" onClick={() => setisMenuOpen(false)} className="hover:text-[#7C3AED]">About Us</NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
