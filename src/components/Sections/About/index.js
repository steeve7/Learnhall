import React from "react";
import {IoDiamondOutline,IoTriangleSharp } from 'react-icons/io';
import {FaRegStar} from 'react-icons/fa';
import {GiSelfLove} from 'react-icons/gi';
import Diamond from './assest/Vector(1).png';
import Triangle from './assest/Vector(2).png';
import Star from './assest/Vector(3).png';
import Love from './assest/Vector(4).png';
import Image from 'next/image'


export const items = [
    {
        image: Diamond,
        color: '#C13584',
        tittle: 'Well-Vetted Tutors',
        desc: 'Oue tutors are highly qualified, passionate, and well-educated at top universities.',
    },
    {
        image: Triangle,
        color: '#00acee',
        tittle: 'We Come to You',
        desc: "We meet at the pupil's home or local library and we also offer online lessons.",
    },
    {
        image: Star,
        color: '#C13584',
        bgColor: "bg-[rgba(255,123,176,0.1)]",
        tittle: 'Your Future',
        desc: "We share knowledge that can help in all areas of life, not just the subject's we are focusing on.",
    },
    {
        image: Love,
        color: '#C13584',
        bgColor: "bg-[rgba(255,123,176,0.1)]",
        tittle: 'We Love Effort',
        desc: "The growth mindset is a lifelong asset. The result isn't nearly as important as the effort.",
    },
]

function index() {
  return (
    <>
    <div className="w-full md:mt-[900px] mt-[1100px] flex justify-center items-center flex-col">
      <div className="md:w-[50%] text-center">
        <h1 className="text-[#070A13] md:text-4xl text-2xl">Why you should choose us</h1>
        <p className="text-[#070A13] mt-4">
          we love tutoring and we value the student's process. Our tutors focus
          on each individual student and tailor the lessons around how she
          learns best.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-[90%] md:mx-20 mx-20 justify-center">
        {items.map((item, i) => (
        <div key={i} className=" bg-white shadow-md rounded-lg text-center w-full
        flex-1 text-center md:mt-10 px-[1.25rem] py-10 space-y-[0.6rem]">
        
        <Image 
        src={item.image}
        bgColor={item.bgColor}
        style={{color:item.color}}
        alt='images'
        className="bg-orange-300 text-center md:ml-28 ml-44"
        />
        <h5>{item.tittle}</h5>
        <p>{item.desc}</p>
        </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default index;
