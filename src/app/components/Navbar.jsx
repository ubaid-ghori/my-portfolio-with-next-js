import React from "react";
import { Facebook, Github, Instagram, Linkedin, Phone } from "lucide-react";
import Particle from "./Particle";
const Navbar = () => {
  return (
    <div className=" text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center md:block md:px-20  ">
      <div className="block md:flex justify-around p-2 items-center">
        <div className=" md:mx-0 mx-3">
          <h1 className=" text-[25px] font-bold ">
            Ubaid <span className=" text-[27px] font-light ">Ghori</span> <b className=" ">.</b>
          </h1>
        </div>
        <div className="flex items-center gap-5 mt-2">
          <Facebook size={22} />
          <Instagram size={22} />
          <Linkedin size={22} />
          <Github size={22} />
          < Phone size={22} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
