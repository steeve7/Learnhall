import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import vector from "./assest/Vector.png";
import Image from "next/image";
import Number from "./number";

const navs = [
  { id: `Home`, label: "Home" },
  { id: "Book", label: "Book a Session" },
  { id: "Become", label: "Become a Tutor" },
  { id: "Blog", label: "Blog" },
];

function index() {
  const [open, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleOpen = () => {
    setIsOpen(!open);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ${
        navbar ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black">
        <a href="" className="flex items-center">
          <Image src={vector} alt="header-icon" className="w-8"/>
          <h1 className="text-4xl text-[#A63634]">Learnhall</h1>
        </a>
        <ul className="hidden sm:flex text-gray-700">
          {navs.map((nav, i) => (
            <li key={i} className="p-7 text-[20px]">
              <a href={nav.id}>{nav.label}</a>
            </li>
          ))}
          <Number />
        </ul>

        {/*  Mobile Button*/}
        <div className="block sm:hidden z-10" onClick={handleOpen}>
          {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/*Mobile Menu*/}
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-700 text-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-700 text-black"
          }
        >
          <ul>
            {navs.map((nav, i) => (
              <li key={i} className="p-4 text-2xl hover:text-gray-500">
                <a href={nav.id}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
