"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ToggleButton = ({ active }: { active: "login" | "register" }) => {
  return (
    <div className="relative flex justify-around items-center bg-primary1 w-[180px] h-[25px] p-4 rounded-full">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.8,
        }}
        className={`absolute w-[80px] h-[20px] bg-primary3 rounded-full ${
          active === "login" ? "left-2" : "left-[90px]"
        }`}
      />
      <Link
        href="/login"
        className={`text-white text-[12px] font-medium cursor-pointer z-10 ${
          active === "login" ? "text-white" : "text-white"
        }`}
      >
        Login
      </Link>
      <Link
        href="/register"
        className={`text-white text-[12px] ml-8 font-medium cursor-pointer z-10 ${
          active === "register" ? "text-white" : "text-white"
        }`}
      >
        Register
      </Link>
    </div>
  );
};

export default ToggleButton;
