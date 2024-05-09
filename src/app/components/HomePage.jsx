import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'

const HomePage = () => {
  return (
 <div className=' mt-36 mx-20 '>
  
  <div className=' flex flex-col justify-center items-center' >
  <h1 className='text-[35px] md:text-[90px] text-white text-center  font-bold'>
        Hi,I AM  <span className='text-[#73C2FB]'>UBAID</span>
      </h1>
     <TextEffect />
      
  </div>
 </div>
  )
}

export default HomePage
