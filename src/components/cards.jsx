import React, { Component } from "react";
import user from "../Assets/user.png";
import users from '../Assets/2 users.png';
import users3 from '../Assets/3 users.png'


const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-[4.5rem] mx-auto mt-[-3rem] bg-white" src={user} alt="" />
          <h2 className="text-center font-bold text-2xl py-8">Single User</h2>
          <p className="text-center font-bold text-4xl m-4">$149</p>
          <div className="text-center font-medium">
          <p className="py-2 border-b max-8 mt-8">500 GB Storage</p>
          <p className="py-2 border-b max-8">1 granted User</p>
          <p className="py-2 border-b max-8">Send up to 2 GB</p>
          </div>
          <button className="flex justify-center bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:text-white hover:bg-[#01a773]">
            Start Trail
          </button>
        </div>

        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={users} alt="" />
          <h2 className="text-center font-bold text-2xl py-8"></h2>
          <p className="text-center font-bold text-4xl m-4">$149</p>
          <div className="text-center font-medium">
          <p className="py-2 border-b max-8 mt-8">500 GB Storage</p>
          <p className="py-2 border-b max-8">1 granted User</p>
          <p className="py-2 border-b max-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black flex justify-center text-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:text-white hover:bg-[#01a773]">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white " src={users3} alt="" />
          <h2 className="text-center font-bold text-2xl py-8">Single User</h2>
          <p className="text-center font-bold text-4xl m-4">$149</p>
          <div className="text-center font-medium">
          <p className="py-2 border-b max-8 mt-8">500 GB Storage</p>
          <p className="py-2 border-b max-8">1 granted User</p>
          <p className="py-2 border-b max-8">Send up to 2 GB</p>
          </div>
          <button className="flex justify-center bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:text-white hover:bg-[#01a773]">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
