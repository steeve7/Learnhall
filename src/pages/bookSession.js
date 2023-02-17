import React from "react";
import Header from "../components/HomeLayout/Header";
import Footer from "../components/HomeLayout/Footer";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const bookSession = () => {
  return (
    <>
      <Header />
      <div className="flex md:flex-row flex-col w-full items-center mt-40 md:mb-[-550px] mb-[-750px]">
        <div className="md:w-[70%] md:m-24 md:shadow-md md:border-2">
          <h1 className="text-3xl font-bold md:ml-5 md:mt-10 text-center md:text-left">
            Book a Session
          </h1>
          <p className="md:ml-5 mt-5 md:w-[90%] px-7 md:px-0 w-full text-center md:text-left">
            Please fill out the form below and submit, we will get back to you
            about your tutoring needs within 24 business hours.
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
                  Student Grade*
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
                  Student Subject*
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
                Why does student need tutoring?(optional)
              </label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                className="border shadow w-full md:w-[95%] py-1 mt-2 "
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
        <section className="md:mt-[-310px] mt-20 md:w-[30%] w-full md:m-14 md:shadow-md md:border-2 h-96">
          <h1 className="text-2xl font-bold md:ml-10 mt-5 text-center md:text-left">
            Get in Touch
          </h1>
          <p className="md:ml-10 mt-5 md:px-0 px-10 text-center md:text-left">
            You can also contact us with any question via phone or email
          </p>

          <div className="p-7 text-[20px] flex items-center bg-gray-200 mx-12 mt-5 rounded-lg cursor-pointer">
            <BsFillTelephoneFill className="mt-2 mr-2" />
            <p>503-342-7214</p>
          </div>
          <div className="p-7 text-[20px] flex items-center bg-gray-200 mx-12 mt-5 rounded-lg cursor-pointer">
            <FaRegEnvelope className="mt-2 mr-2" />
            <p>info@learnhall.com</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default bookSession;
