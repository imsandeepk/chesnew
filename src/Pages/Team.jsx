import React from 'react'
import img from "../assets/Sandeep.jpeg"
import abdul from "../assets/photos/abdur.jpeg"
import anurag from "../assets/photos/anurag.jpeg"
import areeb from "../assets/photos/areeb.jpeg"
import arhan from "../assets/photos/arhan.jpeg"
import arif from "../assets/photos/arif.jpeg"
import ayush from "../assets/photos/ayush.jpeg"
import bhavya from "../assets/photos/bhavya.jpeg"
import gandharva from "../assets/photos/gandharva.jpeg"
import harshita from "../assets/photos/harshita.jpeg"
import neekita from "../assets/photos/neekita.jpeg"
import pankaj from "../assets/photos/pankaj.jpeg"
import rashmita from "../assets/photos/rashmita.jpeg"
import rayeli from "../assets/photos/rayeli.jpeg"
import shaurya from "../assets/photos/shaurya.jpeg"
import shoain from "../assets/photos/shoaib.jpeg"
import tanisha from "../assets/photos/tanisha.jpeg"
import tanya from "../assets/photos/tanya.jpeg"
import vaibhav from "../assets/photos/vaibhav.jpeg"
import vineet from "../assets/photos/vineet.jpeg"
import vikram from "../assets/photos/vikram.jpeg"
import saroha from "../assets/photos/saroha.png"

function Team () {
  return (
    
    <div className=' w-[100%]  h-[100%] flex-col justify-center  '>
      <h1 className='justi-center text-center text-2xl text-red-500 font-serif underline'>Our Team </h1>
            
      <div className='flex flex-col   justify-center bg-gradient-to-b from-slate-700 to-slate-500  '>
        
        <div className=' w-[50%] self-center '>
          <h1 className=' my-5 text-lg text-center font-mono text-violet-400'>Supervision</h1>
          <div className='flex flex-row'>
          <div className='flex flex-col content-center mr-10 w-[50%] text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl bg-cover h-[70%]' src={saroha}/>
                    <h2 className='text-lg'>Prof. A.K Saroha</h2>
                    <h4 >Head Of Department</h4>
                    </div>
                    <div className='flex flex-col w-[50%] content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={vikram}/>
                    <h2 className='text-lg'>Prof. Vikram Singh</h2>
                    <h4 >Faculty Advisor</h4>
                    </div>
          </div></div>
          <div className=' w-[27%] self-center'>
          <h1 className=' my-5 text-lg text-center font-mono text-violet-400'>General Secretary</h1>
          <div className='flex flex-row'>
          
          <div className='flex flex-col content-center mx-10 text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={abdul}/>
                    <h2 className='text-lg'>Abdur Rahman</h2>
                    <h4 >General Secretary</h4>
                    </div>
                   
          </div></div>
            <h1 className="self-center my-5 font-mono text-lg text-violet-400">Co-Ordinaters</h1>
            <div className='grid w-[80%] self-center grid-flow-row grid-cols-3 gap-2  grid-rows-2'>
            
                    <div className='flex h-[80%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={harshita}/>
                    <h2 className='text-lg'>Harshita Jain</h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[80%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={pankaj}/>
                    <h2 className='text-lg'>Pankaj Kumar</h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[80%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={arif}/>
                    <h2 className='text-lg'>Arif Raza</h2>
                    <h4 >Events</h4>
                    </div>
                    <div className='flex h-[80%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={rashmita}/>
                    <h2 className='text-lg'>Rashmita Soni</h2>
                    <h4 >Events</h4>
                    </div>
                    <div className='flex h-[80%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={gandharva}/>
                    <h2 className='text-lg'>Gandharva Walia</h2>
                    <h4 >Research</h4>
                    </div>
                    <div className='flex h-[80%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={bhavya}/>
                    <h2 className='text-lg'>Bhavya Jangid</h2>
                    <h4 >Operations</h4>
                    </div> 

            </div>
        </div>
        <div className='flex flex-col h-[120%] justify-center bg-gradient-to-b from-slate-500 to-slate-700'>
            <h1 className="self-center mb-10 text-lg font-mono text-violet-400">Executives</h1>
            <div className='grid w-[80%] self-center grid-flow-row grid-cols-4 gap-2  grid-rows-4'>
                <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={img}/>
                    <h2 className='text-lg'>Sandeep</h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={tanya}/>
                    <h2 className='text-lg'>Tanya Gupta</h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={rayeli}/>
                    <h2 className='text-lg'>Rayeli Nandy</h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={shoain}/>
                    <h2 className='text-lg'>Shoaib Mobassir </h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={vaibhav}/>
                    <h2 className='text-lg'>Vaibhav Gupta</h2>
                    <h4 >Outreach</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={vineet}/>
                    <h2 className='text-lg'>Vineet Singh</h2>
                    <h4 >Events</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={areeb}/>
                    <h2 className='text-lg'>Areeb Ahmad</h2>
                    <h4 >Events</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={neekita}/>
                    <h2 className='text-lg'>Neekita </h2>
                    <h4 >Events</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={ayush}/>
                    <h2 className='text-lg'>Ayush Agarwal</h2>
                    <h4 >Operations</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={tanisha}/>
                    <h2 className='text-lg'>Tanisha Agrawal </h2>
                    <h4 >Operations</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={anurag}/>
                    <h2 className='text-lg'>Anurag</h2>
                    <h4 >Operations</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={arhan}/>
                    <h2 className='text-lg'>Sayyed Arhan</h2>
                    <h4 >Research</h4>
                    </div>
                    <div className='flex h-[70%] flex-col content-center text-center justify-center bg-white'>
                    <img className='my-1 mx-4 rounded-3xl h-[70%]' src={shaurya}/>
                    <h2 className='text-lg'>Shaurya Govil</h2>
                    <h4 >Research</h4>
                    </div>
                    

            </div>
        </div>
    </div>
  )
}

export default Team