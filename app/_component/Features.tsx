import React from "react";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <div className="min-w-full h-[1000px] font-sans mt-[50px]">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[18px] text-primary12 font-bold">
          <span className="text-primary7">Our</span> Features
        </p>
        <p className="text-[12px] font-sans text-gray-400 px-[20px] text-center">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      {/* {Feateure 1} */}
      <div className="flex justify-center flex-wrap flex-shrink gap-[150px] mt-[50px] mb-[50px] lg:mb-0">
        <div className="relative w-[570px] h-[350px] rounded-xl hidden lg:block">
          <div className="relative w-full h-[350px] bg-[url('/images/screen.png')] bg-cover">
            <div className="h-[100px] w-[100px] bg-primary12 rounded-full inline-block absolute top-[-30px] left-[60px] -z-10"></div>
            <div className="h-[20px] w-[20px] bg-primary14 rounded-full inline-block absolute top-[-18px] left-[180px] -z-10"></div>
            <div className="h-[150px] w-[150px] bg-primary8 rounded-full inline-block absolute bottom-[-60px] right-[-60px] -z-10"></div>
          </div>
        </div>

        <div className="relative w-[320px] h-[200px] rounded-xl md:mt-[15px] mt-0 flex flex-col gap-3">
          <p className="text-primary7 w-[300px] text-[24px] font-bold">
            A <span className="text-primary13">user interface</span> designed
            for the classroom
          </p>
          <div className="flex flex-col gap-7 mt-[30px]">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-10 h-10 bg-white shadow-md shadow-gray-300 rounded-full inline-block"></div>
                <Image
                  src="/images/menu.png"
                  width={16}
                  height={16}
                  alt=""
                  className="inline-block absolute bottom-5 right-3"
                />
              </div>
              <p className="text-[15px] text-gray-500 w-[400px]">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-10 h-10 bg-white shadow-md shadow-gray-300 rounded-full inline-block"></div>
                <Image
                  src="/images/copy.png"
                  width={16}
                  height={16}
                  alt=""
                  className="inline-block absolute bottom-5 right-3"
                />
              </div>
              <p className="text-[15px] text-gray-500 w-[300px]">
                TA’s and presenters can be moved to the front of the class.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-10 h-10 bg-white shadow-md shadow-gray-300 rounded-full inline-block"></div>
                <Image
                  src="/images/user.png"
                  width={16}
                  height={16}
                  alt=""
                  className="inline-block absolute bottom-5 right-3"
                />
              </div>
              <p className="text-[15px] text-gray-500 w-[300px]">
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {Feateure 2} */}
      <div className="flex justify-center flex-wrap flex-shrink gap-[150px] mt-[50px] mb-[50px] lg:mb-0">
        <div className="relative w-[320px] h-[200px] rounded-xl md:mt-[15px] mt-0 flex flex-col gap-3">
          <p className="text-primary7 w-[300px] text-[24px] font-bold">
            <span className="text-primary13">Tools</span> For Teachers and
            Learner
          </p>
          <p className="text-gray-500 text-[13px] w-[290px]">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
        <div className="relative w-[570px] h-[350px] rounded-xl hidden lg:block">
          <div className="relative w-full h-[350px] bg-[url('/images/screen.png')] bg-cover">
            <div className="h-[100px] w-[100px] bg-primary12 rounded-full inline-block absolute top-[-30px] left-[60px] -z-10"></div>
            <div className="h-[20px] w-[20px] bg-primary14 rounded-full inline-block absolute top-[-18px] left-[180px] -z-10"></div>
            <div className="h-[150px] w-[150px] bg-primary8 rounded-full inline-block absolute bottom-[-60px] right-[-60px] -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
