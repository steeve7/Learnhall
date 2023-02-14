import React from "react";
import Header from "../components/HomeLayout/Header";
import Footer from "../components/HomeLayout/Footer";
import { MdWork } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { GiGraduateCap } from "react-icons/gi";

const tutor = () => {
  const items = [
    {
      icon: (
        <TbCurrencyDollar className="bg-[#FB8E42] text-white w-14 rounded-full h-14 px-3 py-2" />
      ),
      tittle: "Earn a steady income",
    },
    {
      icon: (
        <MdWork className="bg-[#233C7E] text-white w-14 rounded-full h-14 px-3 py-2" />
      ),
      tittle: "Work from anywhere",
    },
    {
      icon: (
        <GiGraduateCap className="bg-[#B84B40] text-white w-14 rounded-full h-14 px-3 py-2" />
      ),
      tittle: "Help student succeed",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex md:flex-row flex-col w-full items-center mt-40 md:mb-[-550px] mb-[-750px]">
        <div className="md:w-[70%] md:m-24 md:shadow-md md:border-2">
          <h1 className="text-3xl font-bold md:ml-5 md:mt-10 text-center md:text-left">
            Become a Tutor
          </h1>
          <p className="md:ml-5 mt-5 md:w-[90%] px-7 md:px-0 w-full text-center md:text-left">
            Please fill out the form below and submit, we will get back to you
            about tutoring with learnhall within 24-48 business hours.
          </p>
          <form action="">
            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  First Name*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
              </div>
            </div>

            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  Email*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Phone*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
              </div>
            </div>
            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  Location*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  Zip Code*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
              </div>
            </div>
            <div className="flex md:items-center md:ml-5 mt-5 m-7 md:m-0 md:space-x-32 flex-col md:flex-row">
              <div className="">
                <label htmlFor="" className="block">
                  Highest Education Level*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow py-1 w-full md:w-[150%] mt-2"
                />
              </div>
              <div className="">
                <label htmlFor="" className="block mt-2">
                  School*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border shadow w-full md:w-[150%] py-1 mt-2"
                />
              </div>
            </div>
            <div className="md:ml-5 mt-10 m-7 md:m-0">
              <label htmlFor="" className="block">
                Tell us about yourself?*
              </label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                className="border shadow w-full md:w-[95%] mt-2 "
              ></textarea>
            </div>
            <div className="md:ml-5 mt-10 m-7 md:m-0">
              <label htmlFor="" className="block">
                Tell us about your experience tutoring and what subject you
                teach?*
              </label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                className="border shadow w-full md:w-[95%] mt-2 "
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#C04C40] py-3 w-[50%] md:w-[20%] rounded-md mt-10 my-10 m-auto text-white flex justify-center inline-block"
            >
              Submit
            </button>
          </form>
        </div>
        <section className="md:mt-[-170px] mt-20 md:w-[30%] w-full md:m-14 md:shadow-md md:border-2">
          <h1 className="text-2xl font-bold mt-5 text-center">Why Join Us?</h1>
          <p className="mt-5 px-10 text-center">
            Make money while making a difference in student lives.
          </p>

          <div className="p-7 text-[20px] flex flex-col items-center">
            {items.map((item, i) => (
              <div key={i} className="my-10 flex-1 justify-center text-center">
                <p className="inline-block">{item.icon}</p>
                <h2 className="text-[20px]">{item.tittle}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default tutor;
