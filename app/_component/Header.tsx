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
    <div className="lg:px-[85px] flex justify-between items-center px-5 h-[60px] bg-primary3 font-sans">
      <div className="flex items-center">
        <div className="w-8 h-8 border-2 rounded-sm border-primary4 rotate-45"></div>
        <p className="font-bold text-[20px] text-white z-0 relative right-5">
          TOTC
        </p>
      </div>

      <div
        className={`md:static absolute bg-primary3 md:min-h-fit min-h-[60vh] left-0 ${
          isOpen ? "top-14" : "top-[-120%]"
        } md:w-auto w-full z-10 flex items-center px-5 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex md:flex-row flex-col md:items-center lg:gap-[70px] md:gap-[55px] gap-[20px]">
          <li>
            <Link href="/" className="text-white text-[12px] font-normal">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white text-[12px] font-normal">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white text-[12px] font-normal">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white text-[12px] font-normal">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white text-[12px] font-normal">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <Link href="/login">
          <button className="w-[100px] h-[35px] bg-white rounded-full hidden lg:inline md:hidden text-[12px]">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="w-[90px] h-[35px] bg-button1 rounded-full text-[12px]">
            Register
          </button>
        </Link>
        <div className="flex md:hidden lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
