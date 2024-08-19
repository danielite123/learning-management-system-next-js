import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllSection = () => {
  return (
    <div>
      {/* {All-In-One Section} */}
      <div className="w-full min-h-[500px] font-sans">
        <div className=" flex flex-col items-center justify-center pt-[50px] gap-3">
          <p className="text-[18px] font-bold text-primary3 font-sans">
            <span className="text-primary7">All-In-One</span> Cloud Software.
          </p>
          <p className="max-w-[450px] text-[10px] lg:text-[12px] text-center text-gray-500 px-11">
            TOTC is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-[40px] mt-[50px] mb-[50px] lg:mb-0">
          <div className="w-[230px] h-[220px] rounded-xl shadow-2xl shadow-gray-200">
            <div className="relative left-[90px] bottom-5 inline-block">
              <div className="h-10 w-10 opacity-98 rounded-full bg-primary8"></div>
              <Image
                src="/images/vector1.png"
                width={14}
                height={14}
                alt=""
                className="relative bottom-[30px] left-[13px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center">
                <p className="text-[14px] font-medium text-primary7">
                  Online Billing,
                </p>
                <p className="text-[14px] font-medium text-primary7">
                  Invoicing, & Contracts
                </p>
              </div>
              <div className="flex justify-center items-center px-6">
                <p className="text-[10px] font-medium text-gray-500 text-center">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>
            </div>
          </div>
          <div className="w-[230px] h-[220px] rounded-xl shadow-2xl shadow-gray-200">
            <div className="relative left-[90px] bottom-5 inline-block">
              <div className="h-10 w-10 opacity-98 rounded-full bg-primary9"></div>
              <Image
                src="/images/vector2.png"
                width={16}
                height={16}
                alt=""
                className="relative bottom-[28px] left-[12px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center">
                <p className="text-[14px] font-medium text-primary7">
                  Easy Scheduling &
                </p>
                <p className="text-[14px] font-medium text-primary7">
                  Attendance Tracking
                </p>
              </div>
              <div className="flex justify-center items-center px-6">
                <p className="text-[10px] font-medium text-gray-500 text-center">
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance
                </p>
              </div>
            </div>
          </div>
          <div className="w-[230px] h-[220px] rounded-xl shadow-2xl shadow-gray-200">
            <div className="relative left-[90px] bottom-5 inline-block">
              <div className="h-10 w-10 opacity-98 rounded-full bg-primary8"></div>
              <Image
                src="/images/vector3.png"
                width={20}
                height={20}
                alt=""
                className="relative bottom-[27px] left-[10px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center">
                <p className="text-[14px] font-medium text-primary7">
                  Customer Tracking
                </p>
              </div>
              <div className="flex justify-center items-center px-6">
                <p className="text-[10px] font-medium text-gray-500 text-center">
                  Automate and track emails to individuals or groups. Skilline’s
                  built-in system helps organize your organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {What is Toc Section} */}
      <div className="w-full min-h-[700px] font-sans">
        <div className=" flex flex-col items-center justify-center pt-[50px] gap-3">
          <p className="text-[18px] font-bold text-primary3">
            <span className="text-primary7">What is</span> TOTC?
          </p>
          <p className="max-w-[610px] text-[8px] lg:text-[12px] text-center text-gray-500 px-11">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-[40px] mt-[50px] mb-[50px] lg:mb-0">
          <div className="relative w-[320px] h-[200px] rounded-xl shadow-2xl shadow-gray-200 bg-[url('/images/image1.png')] bg-cover">
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
            <div className="flex flex-col justify-center items-center gap-3 mt-[70px]">
              <p className="z-0 text-white text-[15px] font-semibold">
                FOR INSTRUCRTORS
              </p>
              <button className="z-0 border border-white w-[130px] h-[35px] rounded-full text-[10px] text-white">
                Start a class today
              </button>
            </div>
          </div>
          <div className="relative w-[320px] h-[200px] rounded-xl shadow-2xl shadow-gray-200 bg-[url('/images/image2.png')] bg-cover">
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

            <div className="flex flex-col justify-center items-center gap-3 mt-[70px]">
              <p className="z-0 text-white text-[15px] font-semibold">
                FOR STUDENTS
              </p>
              <button className="z-0 w-[130px] h-[35px] rounded-full text-[10px] text-white bg-primary11 ">
                Start a class today
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-[40px] mt-[100px] mb-[50px] lg:mb-0">
          <div className="relative w-[320px] h-[200px] rounded-xl md:mt-[15px] mt-0 flex flex-col gap-3">
            <div className="h-8 w-8 bg-primary12 rounded-full inline-block absolute top-[-5px] left-[-9px] -z-10"></div>
            <p className="text-primary13 w-[300px] text-[17px] font-medium">
              <span className="text-primary7">
                Everything you can do in a physical classroom,
              </span>{" "}
              you can do with TOTC
            </p>
            <div className="h-3 w-3 bg-primary12 rounded-full inline-block absolute bottom-[105px] right-[14px]"></div>
            <p className="w-[310px] text-[12px] text-gray-400">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <Link href="/" className="text-[12px] text-gray-400 underline">
              Learn more
            </Link>
          </div>
          <div className="relative w-[320px] h-[200px] rounded-xl">
            <div className="relative w-full h-[200px] bg-[url('/images/video.png')] bg-contain bg-no-repeat ">
              <div className="h-[70px] w-[80px] bg-primary14 rounded-xl inline-block absolute top-[-6px] left-[-6px] -z-10"></div>
              <div className="h-[70px] w-[80px] bg-primary12 rounded-xl inline-block absolute bottom-[-5px] right-[15px] -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSection;
