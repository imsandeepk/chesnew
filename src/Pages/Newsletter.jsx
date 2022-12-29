import React from 'react'
import logo from "../assets/Logo.png"

function Newsletter() {
  return (
    <div className='w-[100%] h-[140%] flex flex-col justify-center py-6 content-center   drop-shadow-md'>
        <h2 className='self-center text-2xl font-serif underline text-red-500 '>Newsletter</h2>
        
        <div className='px-10 py-5 flex flex-col w-[90%] border-2 mx-1 align-middle self-center rounded-md bg-newsletter bg-cover hover:scale-[103%] duration-500 '>
        <h1 className=' text-center text-lg text-violet-400'>For the month of November</h1>
          <div className='flex flex-row font-serif font-medium'>
          <div>
        <h1>The term “forever chemicals” refers to a class of molecules that are pervasive in our daily life, including food packaging and household cleaning products. They are so named because of their propensity to persist in water and soil. Due to the fact that these chemicals don’t decompose and end up in our water and food, they may result in health issues like cancer or reduced fertility. This month</h1>
        <a href='https://chesiitd.medium.com/ches-newsletter-ac70f1bd7bc3'><h1 className=' font-semibold text-blue-500'>read more</h1></a></div>
        <img className='h-20' src={logo}></img></div>
        </div>

    </div>
  )
}

export default Newsletter