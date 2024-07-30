"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import menu and close icons

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:px-24 flex justify-between items-center px-5 h-[60px] bg-primary3 relative">
      <div className="flex lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <div className="flex items-center">
        <div className="w-8 h-8 border-2 rounded-sm border-primary4 rotate-45"></div>
        <p className="font-bold text-[20px] text-white z-0 relative right-5">
          TOTC
        </p>
      </div>

      <div
        className={`flex flex-col lg:flex-row lg:items-center justify-start lg:gap-16 pl-12 gap-6 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "menu-transition-enter-active h-screen items-start pt-10"
            : "menu-transition-exit-active h-screen items-start pt-10"
        } fixed top-[60px] left-0 w-full bg-primary3 lg:relative lg:top-0 lg:left-[600px] lg:w-auto lg:h-auto lg:flex-row lg:gap-16 lg:items-center lg:pt-0`}
      >
        <Link href="/" className="lg:text-white text-[14px] font-normal">
          Home
        </Link>
        <Link href="/" className="lg:text-white text-[14px] font-normal">
          Courses
        </Link>
        <Link href="/" className="lg:text-white text-[14px] font-normal">
          Careers
        </Link>
        <Link href="/" className="lg:text-white text-[14px] font-normal">
          Blog
        </Link>
        <Link href="/" className="lg:text-white text-[14px] font-normal">
          About Us
        </Link>
      </div>

      <div className="flex gap-8 justify-center items-center">
        <button className="w-[100px] h-[35px] bg-white rounded-full hidden lg:inline md:hidden">
          Login
        </button>
        <button className="w-[90px] h-[35px] bg-button1 rounded-full">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
