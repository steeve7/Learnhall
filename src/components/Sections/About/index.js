import React from "react"; 
import { RxPlay } from "react-icons/rx";
import { SlDiamond } from 'react-icons/sl';
import { FaRegStar } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
// import { HiPuzzle } from 'react-icons/hi'

function Index () {

 const items = [
    {
        icon: <SlDiamond className="bg-[#FB8E42] text-white w-14 rounded-full h-14 px-3 py-2"/>,
        tittle: 'Well-Vetted Tutors',
        desc: 'Oue tutors are highly qualified, passionate, and well-educated at top universities.',
    },
    {
        icon: <RxPlay className="bg-[#233C7E] text-white w-14 rounded-full h-14 px-3 py-2"/>,
        tittle: 'We Come to You',
        desc: "We meet at the pupil's home or local library and we also offer online lessons.",
    },
    {   icon: <FaRegStar className="bg-[#B84B40] text-white w-14 rounded-full h-14 px-3 py-2"/>,
        tittle: 'Your Future',
        desc: "We share knowledge that can help in all areas of life, not just the subject's we are focusing on.",
    },
    {
        icon: <GiSelfLove className="bg-[#A1A2A6] text-white w-14 rounded-full h-14 px-3 py-2"/>,
        tittle: 'We Love Effort',
        desc: "The growth mindset is a lifelong asset. The result isn't nearly as important as the effort.",
    },
]

  return (
    <>
    <div className="w-full md:mt-[900px] mt-[1100px] flex justify-center items-center flex-col">
      <div className="md:w-[50%] text-center">
        <h1 className="text-[#070A13] md:text-4xl text-2xl font-semibold mt-20 md:mt-0">Why you should choose us</h1>
        <p className="text-[#070A13] mt-4 px-5 md:px-0">
          We love tutoring and we value the students process. Our tutors focus
          on each individual student and tailor the lessons around how she
          learns best.
        </p>
      </div>

      <div className="flex flex-col mt-10 md:flex-row w-full md:px-32 mx-20 justify-between md:space-x-8 space-y-5 px-4">
        {items.map((item, i) => {
          const {icon, tittle, desc } = item
          return (
            <div key={i} className=" bg-white shadow-lg rounded-lg text-center w-full
        flex-1 justify-center text-center md:px-4 px-5 md:mt-10 py-10">
        
        <p className="inline-block">{icon}</p>
        <h5 className="font-semibold">{tittle}</h5>
        <p className="px-5">{desc}</p>
        </div>
          )
        })}
        
      </div>
    </div>
    </>
    
  );
}
export default Index;