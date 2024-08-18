import React from "react";

const Success = () => {
  return (
    <div className="w-full h-[550px] md:h-[430px] mt-[-250px] pt-[200px] font-sans">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[20px] font-bold">Our Success</p>
        <p className="text-[10px] w-[290px] lg:w-[400px] text-center">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-[52px] gap-[50px] lg:gap-[130px] lg:mb-0 mb-4">
        <div className="flex flex-col items-center">
          <p className="text-bold text-[28px] bg-gradient-to-r from-primary6 to-primary3 bg-clip-text text-transparent">
            15K+
          </p>
          <p className="text-[10px]">Students</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-bold text-[28px] bg-gradient-to-r from-primary6 to-primary3 bg-clip-text text-transparent">
            75%
          </p>
          <p className="text-[10px]">Total Success</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-bold text-[28px] bg-gradient-to-r from-primary6 to-primary3 bg-clip-text text-transparent">
            35
          </p>
          <p className="text-[10px]">Main Questions</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-bold text-[28px] bg-gradient-to-r from-primary6 to-primary3 bg-clip-text text-transparent">
            26
          </p>
          <p className="text-[10px]">Chief Expert</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-bold text-[28px] bg-gradient-to-r from-primary6 to-primary3 bg-clip-text text-transparent">
            16
          </p>
          <p className="text-[10px]">Years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
