import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-full h-[600px] lg:h-[750px] bg-primary3 clip-bottom-curve flex font-sans">
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start gap-7 mt-[100px] lg:mt-[170px] lg:pl-[70px] mb-0">
        <div className="flex flex-col lg:items-start items-center">
          <p className="text-black text-[28px] font-bold">
            <span className="text-yellow-500 font-bold">Studying</span> Online
            is now
          </p>
          <p className="text-black text-[28px] font-bold"> much easier</p>
        </div>
        <div className="flex flex-col lg:items-start items-center">
          <p className="text-white text-[10px]">
            TOTC is an interesting platform that will teach
          </p>
          <p className="text-white text-[10px]">
            you in more an interactive way
          </p>
        </div>
        <div className="flex items-center gap-6 mt-2">
          <button
            type="button"
            className="rounded-full h-[40px] w-[100px] bg-button1 text-white text-[10px] font-bold"
          >
            Join for free
          </button>
          <div className="flex items-center cursor-pointer">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white"></div>
              <div className="w-4 h-4 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-primary3 rotate-90 relative right-[26px]"></div>
            </div>
            <p className="text-[10px] hover:underline">Watch how its works</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:block hidden">
        <Image
          src="/images/lovely-teenage.png"
          width={544}
          height={892}
          alt=""
          className="w-[70%] m-auto ml-8 lg:mt-[119px] xl:mt-[10px] 2xl:mt-[-100px]"
        />
      </div>
    </div>
  );
};

export default Hero;
