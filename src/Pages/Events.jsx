import React from 'react'
import logo from "../assets/forex.jpeg"
import logo2 from "../assets/forex2.jpeg"
import convo from "../assets/convo1.jpeg"
import convo2 from "../assets/convo2.jpeg"

function Events() {
  return (
    <div className='w-[100%] h-[140%] flex flex-col justify-center py-6 mx-2 content-center drop-shadow-md'>

        <h2 className='self-center text-2xl underline'>Events</h2>
        <a>
        <div className='px-10 py-5 flex flex-row h-[20%] border-2 mx-1 hover:scale-105 duration-500 '>
        <div className='flex flex-col'>
                <h1 className=' text-center text-lg'>Foreign Intern ke Fundae</h1>
        <h1>On 17th October 2022, the ChES team successfully organised a session on “Forex and Foreign Intern ke Fundae” for second-year undergraduates interested in bagging a research internship or an exchange programme at the institute of their dreams. The talented panelists were all seniors of our very own department who had secured foreign internships themselves in the last summer. They cleared all doubts and provided clarity to their enthusiastic juniors by detailing their own experience with the same. Some important points covered in the session were:-</h1><h1>
1. Importance of CV and cover letter – and what it must contain</h1><h1><h1>
2. Applying for internships and mailing professors – who, when, where, how</h1><h1>
3. CGPA, POR, ECA requirements</h1><h1>
4. A brief discussion on SURA</h1>
5. Statement of Purpose, Letter of Recommendation etc</h1></div>
<div className='flex flex-col w-[40%]'>
<img className='h-[50%] w-[150%] pb-5' src={logo}></img>
<img className='h-[40%]' src={logo2}></img>
</div>
        
        </div></a>
        <a href='https://www.instagram.com/p/Ckpwv6TtDji/'>
                
        <div className='px-10 py-5 flex flex-row h-[20%] border-2 mx-1 hover:scale-105 duration-500 '>
        
        
        <div className='flex flex-col w-[40%]'>
        
<img className='h-[50%] w-[150%] pb-5' src={convo}></img>
<img className='h-[40%]' src={convo2}></img>
</div>
        <div className='flex flex-col pl-4'>
        <h1 className=' text-center text-lg'>Convocation</h1>
        <h1>On November 5, 2022, 2100 students received degrees and diplomas in front of guests, faculty members, dignitaries, family members, and friends at the IIT Delhi's 53rd Annual Convocation ceremony.
The Chief Guest for the Convocation was Prof. Abhijeet Banerjee, Nobel Laureate (Economic Sciences, 2019), and Ford Foundation International Professor of Economics at the Massachusetts Institute of Technology (MIT).
IIT Delhi is proud to be able to add another group of successful students who chose to pursue their academic ambitions and grow successfully in their respective fields as it celebrates its 53rd Annual Convocation this year.</h1></div>
        
        </div></a>
        
        
      

        </div>
        
        
  )
}

export default Events