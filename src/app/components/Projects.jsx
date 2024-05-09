import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[1rem] md:mx-20 mx-4'>
      <h2 className="font-bold text-[35px] text-[#73C2FB] font-mono">
        Projects
      </h2> 
      <div className='w-[100%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div >
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                 <Image
                   src='/p1.jpg'
                   alt='portfolio'
                   layout='fill'
                   className='object-contain'/>
            </div>
        </div>
        <div>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                 <Image
                   src='/p2.jpg'
                   alt='portfolio'
                   layout='fill'
                   className='object-contain'/>
            </div>
        </div>
        <div >
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                 <Image
                   src='/p3.jpg'
                   alt='portfolio'
                   layout='fill'
                   className='object-contain'/>
            </div>
        </div>
        <div >
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                 <Image
                   src='/p4.jpg'
                   alt='portfolio'
                   layout='fill'
                   className='object-contain'/>
            </div>
        </div>
        <div>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                 <Image
                   src='/p5.jpg'
                   alt='portfolio'
                   layout='fill'
                   className='object-contain'/>
            </div>
        </div>
        <div >
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                 <Image
                   src='/p1.jpg'
                   alt='portfolio'
                   layout='fill'
                   className='object-contain'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project