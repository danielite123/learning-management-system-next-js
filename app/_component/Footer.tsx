import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer w-full h-[390px] pt-[19px] flex flex-col gap-14 justify-center items-center font-sans">
      <div className="flex gap-7 justify-center">
        <div className="flex items-center">
          <div className="w-8 h-8 border-2 rounded-sm border-primary4 rotate-45"></div>
          <p className="font-bold text-[20px] text-white z-0 relative right-5">
            TOTC
          </p>
        </div>
        <div className="border-l outline-none border-gray-500"></div>
        <p className="text-white text-[14px] font-semibold]">
          Virtual Class
          <br />
          for Zoom
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[14px] text-gray-400 font-medium">
          Subscribe to get our Newsletter
        </p>
        <div className="flex justify-center gap-5">
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-full border border-gray-500 outline-none bg-transparent pl-3 h-[40px] w-[190px] md:w-[250px] placeholder:text-[12px] text-[12px] text-white"
          />
          <button
            type="button"
            className="text-[12px] text-white rounded-full w-[100px]  bg-primary3"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-5">
          <p className="text-[12px] md:text-[14px] text-gray-400">Carrers</p>
          <div className="border-l h-4 outline-none border-gray-500"></div>
          <p className="text-[12px] md:text-[14px] text-gray-400">
            Privacy Policy
          </p>
          <div className="border-l h-4 outline-none border-gray-500"></div>
          <p className="text-[12px] md:text-[14px] text-gray-400">
            Terms & Conditions
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className="border h-3 w-3 rounded-full"></div>
            <p className="text-[10px] text-white relative right-[9px]">c</p>
          </div>
          <p className="text-[10px] md:text-[12px] text-gray-400">
            2024 Class Technologies Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
