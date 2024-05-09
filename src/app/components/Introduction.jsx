import Image from "next/image";
const Introduction = () => {
 
  return (
    <div className=' md:mt-48 mt-20 md:mx-20 mx-4'>
      <div  >
       <Image src="/437104538_450567847342842_6434418363123287842_n.jpg" alt="" className=" w-[300px] h-[300px] border-2 rounded-full mx-auto" />
      </div>
      <div className=" mt-10  ">
        <h1 className=" font-bold text-[35px] text-[#73C2FB] font-mono">Introduction</h1>
        <p className="text-[20px] space-x-2 font-serif text-white mt-6 font-medium">Hey, I am Ubaid Raza, a dedicated <b className=" text-[#73C2FB] mx-2 mr-2 font-bold text-[23px]">web enthusiast</b> who thrives on the ever-evolving landscape of digital creativity. My focus is on crafting intuitive and visually striking websites that leave a lasting impression. With a keen eye for design and a passion for clean code, I love bringing ideas to life in the digital realm. Lets collaborate and turn your vision into a captivating online experience!</p>
      </div>
      <div>
        <ul className=" text-white mt-8 flex flex-col justify-center md:items-center gap-2 text-[17px] ">
            <li>  🏆 Currently learning Web 3 Development</li>
            <li>  💞️ Always Looking to forward collaborate on projects</li>
            <li>   💻 Dedicated to work and seeking experience</li>
            <li>  ⛳️ My 2024 goal is mastering in Next js</li>
            <li> - 🌱 I am interested in Data analysic and machine learning</li>
            <li>  👀 working in Gatekod</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
