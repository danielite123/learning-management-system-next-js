"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "@/app/_component/ToogleButton";

const Register = () => {
  return (
    <div className="p-6 flex">
      <div className="hidden md:block w-1/2 ">
        <Image
          src="/images/register.png"
          width={713}
          height={825}
          alt=""
          className="h-full"
        />
      </div>

      <div className=" w-full md:w-1/2 p-8 flex justify-center items-center">
        <div className="w-[454px] h-[674px] flex flex-col justify-center items-center gap-6">
          <p className="text-[14px]">Welcome TOTC</p>
          <ToggleButton active="register" />
          <p className="text-primary2 text-[12px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and
            <br /> typesetting industry.
          </p>
          <div className="flex flex-col">
            <label className="mb-3 text-[12px]">Email Address</label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="border w-[335px] h-[37px] rounded-full p-2 pl-6 mb-6 outline-none border-primary3 placeholder:text-[12px] text-[12px] italic"
            />
            <label className="mb-3 text-[12px]">User Name</label>
            <input
              type="name"
              placeholder="Enter your User Name"
              className="border w-[335px] h-[37px] rounded-full p-2 pl-6 mb-6 outline-none border-primary3 placeholder:text-[12px] text-[12px] italic"
            />
            <label className="mb-3 text-[12px]">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="border w-[335px] h-[37px] rounded-full p-2 pl-6 mb-1 outline-none border-primary3 placeholder:text-[12px] text-[12px] italic"
            />
          </div>
          <button
            type="submit"
            className="border border-primary3 bg-primary3 w-[131px] h-[35px] rounded-full ml-[210px] text-white text-[16px] font-normal"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
