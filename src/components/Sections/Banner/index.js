import React from "react";
import Image from "next/image";
import girl from "./assest/Girl with Notebook 1.png";

function index() {
  return (
    <div className="w-full">
      <div className="absolute w-[235px] rounded-full h-[235px] hidden md:block left-[-158px] top-[70px] bg-orange-400" />
      <div className="absolute md:left-20 md:top-60 top-40 md:text-justify text-center">
        <h1 className="font-bold text-5xl md:w-[25%] w-full md:leading-[60px] leading-[50px]">
          Tutoring Done Right
        </h1>
        <h5 className="md:text-[25px] text-gray-500 md:leading-[50px] text-[19px] mt-5">
          private in-person & online tutoring
        </h5>
        <div className="md:w-[30%] w-full mt-8 px-4 md:px-0">
          <p className="">
            If you want to learn an academic subject or study for an exam, we
            want to be the company you choose. our tutors are bright and
            enthusiastic and seek to bring out the best of the individual
            learners potential in both academics as well as life
          </p>
        </div>
        <div className="bg-[#C04C40] text-white text-center md:w-[12%] w-[50%] py-4 px-4 rounded-md mt-12 absolute left-24 md:left-0">
          <button>Book a Session</button>
        </div>
      </div>
      <div className="absolute md:w-[560px] h-[450px] mt-3 w-full hidden md:block md:right-0 md:top-[179px] top-[600px] bg-[#B84B40] rounded-l-xl"/>
      <div className="absolute w-44 h-20 right-0 top-[650.21px] hidden md:block bg-orange-400 rounded-tl-full rounded-tr-full" />
       <Image
          src={girl}
          alt="picture of a girl"
          className="bg-amber-100 md:w-[519px] w-full absolute h-[450px] md:top-[240px] md:mt-0 mt-[-470px] md:right-20 rounded-2xl"
        />
    </div>
  );
}

export default index;
