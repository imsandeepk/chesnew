import React from 'react'
import team1 from "../assets/team.jpg"
import team2 from "../assets/team2.jpeg"
import team3 from "../assets/team3.jpeg"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from "react"
import {BiSkipNextCircle} from "react-icons/bi"
import {BiSkipPreviousCircle} from "react-icons/bi"



function Hero() {
  const images = [team1,team2,team3];
  const [image, setimage] = useState(0)
  const autochange = ()=>{
    for(let img=0;img<2;img++){
      setTimeout(()=>{setimage(image+1)},5000);
    }

  }
  useEffect(() => {
    autochange()
  }, [])
  const change = ()=>{
    if(image<2){
    setTimeout(()=>{setimage(image+1)},100);}
  }
  const changeleft = ()=>{
    if(image>0){
    setTimeout(()=>{setimage(image-1)},100);}
  }
  return (
    <div className=' min-h-screen duration-500'>
    <div className='w-[100%] flex flex-col justify-between duration-500 py-6 content-center bg-gradient-to-r from-slate-500 to-slate-900 drop-shadow-md shadow-md'>
      <div className='flex flex-row justify-center duration-500 items-center content-center'>
        <BiSkipPreviousCircle size={45} color="white" onClick={changeleft} className=' mr-5 '/>

      <img className='  w-[30%] h-[100%] self-center  drop-shadow-md shadow-md rounded-md duration-500' src={images[image]}></img>
      <BiSkipNextCircle size={45} color="white" onClick={change} className=" ml-5"/>

      </div>
      
        <div className='flex flex-col text-center justify-center '>
        <h2 className='text-2xl self-center text-center underline mt-10 underline-offset-2 text-red-500'> Chemical Engineering Society, IIT, Delhi</h2>
        
        <h2 className='text-xl font-thin my-6 self-center text-violet-400 underline underline-offset-2'>What We Do?</h2>
        <h2 className=' w-[60%] font-ligh text-center mb-10 self-center text-white'>
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