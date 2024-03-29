import React, { Component } from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div
        className="max-w-[800px] mt-[-96px]  w-full h-screen
        mx-auto text-center flex flex-col justify-center">
        <p className="uppercase font-bold p-2 text-[#00df9a]">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
        </div>
        <p className="p-2 md:text-2xl text-xl font-bold text-gray-500 ">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:text-white hover:bg-[#01a773]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
