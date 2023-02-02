import React from 'react'
import Image from 'next/image'
import girl from './assest/Girl with notebook 2 1.png'

export default function index() {
  const items = [
    {
      number: '1',
      tittle: 'Step One',
      desc: "inquire about our tutoring services by filling-out and submitting the 'Book a Session' form "
    },
    {
      number: '2',
      tittle: 'Step Two',
      desc: "Within 24 hours an advisor will contact you to go over the student's tutoring goal and needs."
    },
    {
      number: '3',
      tittle: 'Step Three',
      desc: "The advisor will find an ideal tutor match and set up a free session to ensure she is the right fit."
    },
  ]


  return (
    <div className="w-full md:mt-[200px] mt-[100px] flex justify-center items-center flex-col">
    <div className='absolute w-[100px] h-[200px] right-0 hidden md:block rounded-r-2xl rounded-full top-[1400.05px] bg-red-800'/>
    <div className="md:w-[50%] text-center">
    <h1 className="text-[#070A13] md:text-4xl text-2xl font-semibold">How our service works</h1>
    <p className="text-[#070A13] mt-4">
     follow the three steps below to book your first session and get started with a tutor
    </p>
  </div>
  <div className="absolute w-[300px] h-[140px] left-[-17px] md:top-[1900px] hidden md:block bg-red-800 rounded-tl-full rounded-tr-full"></div>
  <Image 
    src={girl}
    alt="second girl"
    className='bg-amber-100 md:w-[500px] absolute h-[370px] md:top-[1640px] mt-[-300px] md:mt-0 md:left-0 rounded-2xl'
    />

    <div className="flex flex-col md:flex-col md:mt-0 md:w-[30%] justify-center mt-[450px]">
    <div className='md:ml-80 absolute hidden md:block mt-28'>
      <p className='bg-orange-500 w-12 h-12 rounded-full text-center text-white text-4xl md:mt-[20px]'>1</p>
      <p className='rotate-90 font-bold mt-5 ml-1 text-[#ADAFB3]'>.............</p>
      <p className='bg-blue-900 w-12 h-12 rounded-full text-center text-white text-4xl md:mt-[20px]'>2</p>
      <p className='rotate-90 font-bold mt-5 ml-1 text-[#ADAFB3]'>.............</p>
      <p className='bg-red-800 w-12 h-12 rounded-full text-center text-white text-4xl md:mt-[20px]'>3</p>
    </div>
      {items.map((item, i) => (
        <div key={i}  className="bg-white shadow-md rounded-lg text-center w-full
        flex-1 text-center md:mt-20 md:ml-96 px-[1.25rem] md:py-2 py-8 md:my-[-60px] ">
        <h1 className='text-left'>{item.tittle}</h1>
        <p className='text-left'>{item.desc}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
