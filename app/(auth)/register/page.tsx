"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ToogleButton from "@/app/_component/ToogleButton";

const Register = () => {
  const [active, setActive] = useState("register");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex">
      <div className="hidden md:block w-1/2">
        <Image
          src="/images/register.png"
          width={713}
          height={825}
          alt=""
          className="w-[70%] m-auto mt-[60px]"
        />
      </div>

      <div className="w-full md:w-1/2 flex lg:justify-start lg:m-auto lg:ml-[50px] justify-center items-center mx-auto lg:mt-[110px] mt-[130px]">
        <div className="w-[300px] h-[500px] flex flex-col justify-center mt-[-45px] gap-6">
          <p className="text-[12px] flex justify-center w-auto">Welcome TOTC</p>
          <div className="flex justify-center">
            <ToogleButton active="register" />
          </div>
          <p className="text-primary2 text-[12px] font-normal flex justify-center p-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex flex-col ml-[10px]">
            <label className="mb-3 text-[10px]">Email Address</label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="border w-[280px] h-[33px] rounded-full p-2 pl-4 mb-6 outline-none border-primary3 placeholder:text-[10px] text-[10px] italic"
            />
            <label className="mb-3 text-[10px]">User Name</label>
            <input
              type="name"
              placeholder="Enter your User Name"
              className="border w-[280px] h-[33px] rounded-full p-2 pl-4 mb-6 outline-none border-primary3 placeholder:text-[10px] text-[10px] italic"
            />
            <label className="mb-3 text-[10px]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="border w-[280px] h-[33px] rounded-full p-2 pl-4 outline-none border-primary3 placeholder:text-[10px] text-[10px] italic"
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
          </div>
          <div className="flex justify-end pr-4">
            <button
              type="submit"
              className="border border-primary3 bg-primary3 w-[125px] h-[26px] rounded-full text-white text-[12px] font-normal"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
