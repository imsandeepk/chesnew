import React from 'react'
import team from "../assets/team.jpg"
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div>
    <div className='w-[100%] h-[140%] flex justify-between py-6 content-center bg-gradient-to-r from-slate-500 to-slate-900 drop-shadow-md shadow-md'>
      <img className='  w-[30%] ml-10  drop-shadow-md shadow-md rounded-md' src={team}></img>
        <div className='flex flex-col self-start justify-start pr-20'>
        <h2 className='text-2xl self-center underline underline-offset-2 text-red-500 font-serif'> Chemical Engineering Society, IIT, Delhi</h2>
        
        <h2 className='text-xl font-thin my-6 self-center text-violet-400 underline underline-offset-2'>What We Do?</h2>
        <h2 className=' w-[60%]  mx-5 self-center font-mono  text-white'>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Here, at ChES we conduct intra-departmental events - Initiated Professor-Students interactive talk sessions, an opportunity for students to link with professors outside classroom- Spearheaded the team to ensure smooth conduct of various events: Farewell, ChES Awards, Interactive sessions such as “Intern ke Fundae” and so on.')
      .start();
  }}
/>
          </h2>
        
        </div>
        
    </div>
    </div>
    
  )
}

export default Hero