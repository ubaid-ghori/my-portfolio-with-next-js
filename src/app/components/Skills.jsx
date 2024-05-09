import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div className=" mt-28 md:mx-20 m-4">
      <h2 className="font-bold text-[35px] text-[#73C2FB] font-mono">
        Language and Tools
      </h2>
      <div className=" ">
        <div className="block md:flex justify-between flex-wrap gap-5 mt-10 text-white">
          <div
            className=" flex bg-white text-black  hover:bg-[#5a99c7] cursor-pointer hover:text-white hover:border-none items-center justify-between md:w-[40%] w-full mb-5 border-gray-500 
           border-2 p-2 rounded-full "
          >
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Next Js
              </h2>
            </div>
            <div className="flex items-center mx-4 ">
              <Image
                src="/next-js-icon-2048x2048-5dqjgeku.png"
                width={50}
                height={50}
                className=""
              />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                React Js
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image src="/React-icon.svg.png" width={50} height={50} />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Tailwind Css
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image
                src="/tailwind-css-icon-2048x1229-u8dzt4uh.png"
                width={50}
                height={50}
                className=""
              />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Git
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image src="/Git_icon.svg.png" width={50} height={50} />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                HTML
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image src="/html.png" width={50} height={50} />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                CSS
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image src="/css.png" width={50} height={50} />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Javascript
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image src="/javascript.webp" width={50} height={50} />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Code Editor
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image src="/vscode.png" width={50} height={50} />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Express Js
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image
                src="/expressjs_logo_icon_169185.png"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className=" flex bg-white text-black items-center justify-between hover:bg-[#73C2FB] hover:text-white hover:border-none cursor-pointer md:w-[40%] w-full mb-5  border-gray-500  border-2 p-2 rounded-full ">
            <div>
              <h2 className=" font-semibold text-[20px] px-2 font-serif">
                Node Js
              </h2>
            </div>
            <div className="flex items-center mx-4">
              <Image
                src="/node-js-icon-454x512-nztofx17.png"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
