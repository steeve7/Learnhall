import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import vector from "./assest/Vector.png";
import Image from "next/image";
import Number from "./number";

const navs = [
  { id: `/`, label: "Home" },
  { id: "bookSession", label: "Book a Session" },
  { id: "tutor", label: "Become a Tutor" },
  { id: "Blog", label: "Blog" },
];

function Index() {
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
      className={`fixed w-full left-0 top-0 w-full z-10 ${
        navbar ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="m-auto flex justify-between items-center p-4 text-black">
        <a href="" className="flex items-center">
          <Image src={vector} alt="header-icon" className="w-8"/>
          <h1 className="text-4xl text-[#A63634]">Learnhall</h1>
        </a>
        <ul className="hidden sm:flex text-gray-700">
          {navs.map((nav, i) => (
            <li key={i} className="p-7 text-[20px]">
              <a href={nav.id} activeClass='active'>{nav.label}</a>
            </li>
          ))}
          <Number />
        </ul>

        {/*  Mobile Button*/}
        <div className="block sm:hidden z-10" onClick={handleOpen}>
          {open ? <AiOutlineClose size={20} className="text-[#A63634]" /> : <AiOutlineMenu size={20} className="text-[#A63634]" />}
        </div>
        {/*Mobile Menu*/}
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-white text-center ease-in duration-700 text-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 w-full h-screen bg-white text-center ease-in duration-700 text-black"
          }
        >
        <div href="" className="flex items-center mt-5 px-3">
          <Image src={vector} alt="header-icon" className="w-8"/>
          <h1 className="text-3xl text-[#A63634]">Learnhall</h1>
        </div>
          <ul className="mt-8">
            {navs.map((nav, i) => (
              <li key={i} className="p-4 text-[15px] hover:text-gray-500 border-b-2 py-4">
                <a href={nav.id}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
