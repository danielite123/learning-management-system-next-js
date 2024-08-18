import React from "react";
import Image from "next/image";
import Layout from "../Layout";
import Hero from "@/app/_component/Hero";
import Success from "@/app/_component/Success";
import AllSection from "@/app/_component/AllSection";
import Features from "@/app/_component/Features";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Success />
      <AllSection />
      <Features />
    </Layout>
  );
};

export default Home;
