"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-12 md:mt-3">
          <h2 className="font-bold text-[16px] text-[#002D74]">Register</h2>
          <p className="text-[10px] mt-2 text-[#002D74]">Welcome to TOTC</p>
          <form action="" className="flex flex-col gap-4 mt-3">
            <input
              type="text"
              name="name"
              placeholder="Fullname"
              className="border h-[33px] rounded-xl p-2 pl-4 outline-none border-primary3 placeholder:text-[10px] text-[10px] italic bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border h-[33px] rounded-xl p-2 pl-4 outline-none border-primary3 placeholder:text-[10px] text-[10px] italic bg-transparent"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="border w-full h-[33px] rounded-xl p-2 pl-4 outline-none border-primary3 placeholder:text-[10px] text-[10px] italic bg-transparent"
              />
              <span
                className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-[11px]"
                />
              </span>
            </div>
            <button className="bg-[#002D74] rounded-lg text-white text-[10px] py-2">
              Register
            </button>
          </form>

          <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-xs">OR</p>
            <hr className="border-gray-500" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 text-[12px]">
            Register with Google
          </button>

          <p className="mt-2 text-[10px] border-b border-gray-400 py-3">
            Forgot Password?
          </p>

          <div className="mt-3 text-[10px] flex justify-between items-center">
            <p>Already have an account?</p>
            <Link href="/login">
              <button className="py-2 px-5 bg-white border rounded-xl">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 md:block hidden mt-3">
          <img src="/images/register.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Register;
