import React from "react";
import Image from "next/image";
import vector from "./assest/Vector.png";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import { MdCall, MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";

function index() {
  return (
    <footer className="bg-[#1F3158] w-full h-[470px]">
      <div className="flex md:flex-row md:mt-[500px] mt-[760px] w-full ">
        <section className="md:m-20">
          <a href="" className="flex items-center m-2 md:m-0 mt-2">
            <Image src={vector} alt="header-icon" className="w-8 bg-white" />
            <h1 className="text-3xl text-white">Learnhall</h1>
          </a>
          <div className="flex md:flex-col flex-row space-x-2 md:space-x-0">
            <h2 className="mt-6 text-white hidden md:block">Lets Connect</h2>
            <div className="flex mt-5 space-x-2">
              <a href="&apos;">
                <CgFacebook className="bg-white w-8 rounded-full h-8 text-blue-500 p-2" />
              </a>
              <a href="&apos;">
                <CgInstagram className="bg-white w-8 rounded-full h-8 text-blue-500 p-2" />
              </a>
              <a href="&apos;">
                <TiSocialTwitter className="bg-white w-8 rounded-full h-8 text-blue-500 p-2" />
              </a>
            </div>
            <h2 className="mt-6 text-white hidden md:block">Contact Us</h2>
            <div className="flex mt-5 space-x-2">
              <a href="">
                <MdCall className="bg-white w-8 rounded-full h-8 text-blue-500 p-2" />
              </a>
              <a href="">
                <MdOutlineMailOutline className="bg-white w-8 rounded-full h-8 text-blue-500 p-2" />
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-row md:mt-20 mt-40 md:space-x-28 text-white absolute md:right-40 space-x-4 ml-4 md:ml-0">
          <div>
            <h2 className="font-bold">About Us</h2>
            <ul>
              <a href='hel&#39;lo'>
                <li>FAQs</li>
              </a>
              <a href='hel&#39;lo'>
                <li>Blog</li>
              </a>
              <a href='hel&#39;lo'>
                <li>Reviews</li>
              </a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Learn With Us</h2>
            <ul>
              <a href="">
                <li>Request a Tutor</li>
              </a>
              <a href="">
                <li>Learning Resources</li>
              </a>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Work With Us</h2>
            <ul>
              <a href="">
                <li>Careers at Learnhall</li>
              </a>
              <a href="">
                <li>Apply To Tutor</li>
              </a>
            </ul>
          </div>
        </section>
        <section className="md:mt-[230px] absolute md:right-[220px] mt-80">
          <div>
            <h2 className="font-bold text-white ml-4 md:ml-0">
              Subscribe to our free e-newsletter
            </h2>
            <div className="flex space-x-2 ml-4 md:ml-0">
              <input
                type="text"
                placeholder="Email address"
                className="md:w-[400px] w-full py-2 mt-4 border-none px-2"
              />
              <button
                type="submit"
                className="bg-red-900 md:ml-3 px-3 rounded font-bold text-white mt-3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
      <hr className="md:w-[90%] md:ml-10 w-full md:mt-[-20px] hidden md:block" />
      <div className="py-2 mt-[300px] md:mt-0">
        <p className="text-white md:ml-10 ml-4 md:mt-4">
          Copyright 2016-2022 Learnhall LLC
        </p>
        <p className="text-white md:ml-[1100px] ml-4 md:mt-[-30px]">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
}

export default index;
