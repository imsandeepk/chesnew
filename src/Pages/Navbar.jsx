import React from 'react'
import logo from "../assets/Logo.png"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"



function Navbar() {
  return (
    <div className=' flex bg-gradient-to-r from-slate-500 to-slate-900 flex-row justify-between h-[100%] w-[100%] shadow-md '>
      <div className='flex flex-row'>
      <img src={logo} className=' h-24 px-4 py-4'/>
      <div className='flex flex-col justify-between self-center text-white'>
      <h1 className=' font-semibold text-orange-400 text-3xl'>ChES </h1>
      <h1 className='text-md'>Chemical Engineering Society</h1>
      </div>
      </div>
      
      <div className='flex flex-row justify-between self-center mx-10'>
      <a href='https://www.instagram.com/ches_iitdelhi/' className='flex hover:scale-125 duration-500'>
              <AiOutlineInstagram size={35} color="white"/>
            </a>
            <a href='https://www.linkedin.com/in/ches-chemical-engineering-society-iit-delhi-ba8387142/' className='flex hover:scale-125 duration-500'>
              <AiOutlineLinkedin size={35} color="white"/>
            </a>
            <a href='https://www.facebook.com/chesiitdelhi' className='flex hover:scale-125 duration-500'>
              <AiOutlineFacebook size={35} color="white"/>
            </a>
      </div>
      
    </div>
  )
}

export default Navbar