import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav((prev) => !prev);
  };
  

  return (
    <div
      className="flex justify-between items-center 
           h-24  max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold px-4 text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#">Home</a>{" "}
        </li>
        <li className="p-4">
          <a href="#">Company</a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#">Resources</a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#">About</a>{" "}
        </li>{" "}
        <li className="p-4">
          <a href="#">Contact</a>{" "}
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed z-[10] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        <h1 className="text-3xl font-bold pl-0 m-8 px-4 text-[#00df9a]">
          React.
        </h1>

        <ul className="p-2 uppercase">
          <li className="p-4  border-b border-b-green-900">
            {" "}
            <a href="#">Home</a>{" "}
          </li>
          <li className="p-4  border-b border-b-green-900">
            {" "}
            <a href="#">Company</a>{" "}
          </li>
          <li className="p-4  border-b border-b-green-900">
            {" "}
            <a href="#">Resources</a>{" "}
          </li>
          <li className="p-4  border-b border-b-green-900">
            {" "}
            <a href="#">About</a>{" "}
          </li>
          <li className="p-4  border-b border-b-green-900">
            <a href="#">Contact</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
