import React, { Component } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold pl-0 m-8 px-4 text-[#00df9a]">
          React.
        </h1>
        <p className="py-4 m-4 px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa harum
          dolore nulla perspiciatis id dignissimos eius quia modi, illum itaque.
        </p>
        <div className="flex md:w=[75%] my-6 justify-between m-4 px-4">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-12 px-8">
        <div>
          <h6 className="font-medium text-gray-400 ">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 ">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guide</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 ">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 ">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
