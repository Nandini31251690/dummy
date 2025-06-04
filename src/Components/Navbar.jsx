import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-4 px-10 md:px-20 h-20  text-[#1F2937]">
        <div className="flex h-full items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold">Logo</NavLink>

          {/* Desktop Links */}
          <div className="md:flex hidden gap-6 text-xl font-semibold">
            <NavLink to="/products" style={(e)=>{
              return {
                color:e.isActive?"crimson":""
              }
            }}>Products</NavLink>
            <NavLink to="/services" style={(e)=>{
              return {
                color:e.isActive?"crimson":""
              }
            }}>Services</NavLink>
            <NavLink to="/Login" style={(e)=>{
              return {
                color:e.isActive?"crimson":""
              }
            }} >Login</NavLink>
            <NavLink to="/SignUp" style={(e)=>{
              return {
                color:e.isActive?"red":""
              }
            }} className="bg-[#040273] text-white rounded px-2" >SignUp</NavLink>
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
          <NavLink to="/Login" onClick={() => setisMenuOpen(false)} className="hover:text-[#7C3AED]" >Login</NavLink>
          <NavLink to="/SignUp" onClick={() => setisMenuOpen(false)} className="hover:text-[#7C3AED]">SignUp</NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
