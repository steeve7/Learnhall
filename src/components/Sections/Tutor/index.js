import React from 'react'
import Image from 'next/image'
import Tutor from './assest/Tutor and student 1.png'

function index() {
  return (
    <section className='w-full md:mt-[200px] mt-[70px] flex justify-center flex-row'>
       <div className='md:w-[35%] text-center absolute md:left-20 md:mt-14'>
        <h2 className='text-[#070A13] md:text-4xl text-2xl font-semibold'>Want to become a tutor with learnhall?</h2>
        <p className="text-[#070A13] mt-4 px-5">we hire tutors from a variety of backgrounds both in the US and internationally. we pride ourselves
            on our tutor onboarding process and high industry pay. Our tutors work in-person and online. we gamer
            regular inquires for all academic and test prep subject at all age levels.
        </p>
        <p className="text-[#070A13] mt-4 px-5">if you want to work with us please click a button below to fill out a short form and 
        we will be in contact within 24-48 hours for a perspective interview.
        </p>
        <button className='bg-red-900 px-4 py-4 rounded-2xl mt-3 text-white'>Become a Tutor</button>
       </div>
       <div className=" md:w-[540px] h-[400px] absolute mt-3 w-full hidden md:block md:right-0  bg-[#B84B40] rounded-l-xl"/>
       <div className="absolute w-44 h-20 right-0 mt-[420px] hidden md:block bg-orange-400 rounded-tl-full rounded-tr-full" />
            <Image 
                src={Tutor}
                alt="Tutor image"
                className='md:w-[40%] bg-amber-100 absolute w-full md:ml-20 md:right-20 md:mt-14 mt-[420px] rounded-2xl'
            />
    </section>
  )
}

export default index
