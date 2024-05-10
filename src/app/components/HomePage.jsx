import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import { MoveRight,ArrowBigDownDash  } from 'lucide-react';
const HomePage = () => {
  return (
 <div className=' mt-36 md:mx-20 mx-10 '>
  
  <div className=' flex flex-col justify-center items-center' >
  <h1 className='text-[35px] md:text-[90px] text-white text-center  font-bold'>
        Hi,I AM  <span className='text-[#73C2FB]'>UBAID</span>
      </h1>
     <TextEffect />

     <div className='mt-[4rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 '>
      
        <button className='px-[2rem] hover:bg-[#008080] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#008080] text-white flex items-center space-x-2'>
        <a href="file:///C:/Users/texon/Downloads/CV%20(2).pdf">
            <p>Download CV</p>
        </a>

            <ArrowBigDownDash  className='w-[1.6rem] h-[1.8rem] text-white'/>
          </button>
      </div>
  </div>
 </div>
  )
}

export default HomePage
