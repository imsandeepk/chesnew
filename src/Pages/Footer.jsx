import React from 'react'
import logo from "../assets/Logo.png"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

function Footer() {
  return (
    <div className='flex-col text-white bg-gradient-to-r from-slate-600 to-slate-900 drop-shadow-md shadow-md mt-10'>
    <div className='w-[100%] h-[100%] justify-evenly
     flex align-middle flex-row bg-gradient-to-r from-slate-600 to-slate-900 '>
        <div className='py-10'>
        <img src={logo} className='h-24 py-4'/>

        <h1 className=' font-semibold text-orange-400 '>When Passion is first,anything is possible</h1>
      <h1 className=' font-thin'>
        Developed and Maintained by ChES Technical Team
      </h1>

        </div>
        <div className='py-20 justify-center align-middle content-center '>
            <h1 className='self-center align-middle'>Reach US:</h1>
            <div className='flex flex-row hover:scale-125 duration-500 font-serif font-semibold'>
              <AiOutlineMail size={28} color="white"/>
            <h2><a href="mailto:chemeiitdelhi@gmail.com">chemeiitdelhi@gmail.com</a></h2></div>
        </div>
        <div className='py-20 justify-center align-middle content-center '>
            <h1>Connect:</h1>
            <div className='flex flex-row'>
            <a href='https://www.instagram.com/ches_iitdelhi/' className='flex hover:scale-125 duration-500'>
              <AiFillInstagram size={28} color="white"/>
            </a>
            <a href='https://www.linkedin.com/in/ches-chemical-engineering-society-iit-delhi-ba8387142/' className='flex hover:scale-125 duration-500'>
              <AiFillLinkedin size={28} color="white"/>
            </a>
            <a href='https://www.facebook.com/chesiitdelhi' className='flex hover:scale-125 duration-500'>
              <AiFillFacebook size={28} color="white"/>
            </a>

            </div>
            
        </div>
        
    </div>
    <h1 className='text-center py-3'>© Copyright 2021 ChES Technical Team</h1>
    </div>
  )
}

export default Footer