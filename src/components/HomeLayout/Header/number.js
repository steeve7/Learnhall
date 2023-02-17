import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'

const navs = [
    { id: "number", label: "503-342-7214" },
  ];

function number() {
  return (
    <div>
    <ul className='hidden sm:flex'>
    {navs.map((nav, i) => (
      <li key={i} className="p-7 text-[20px] flex items-center">
        <BsFillTelephoneFill className='text-[#C04C40]'/>
        <a href={nav.id}>{nav.label}</a>
      </li>
    ))}
   </ul>
    </div>
  )
}

export default number
