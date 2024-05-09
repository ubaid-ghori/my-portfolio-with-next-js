import React from "react";
import { Facebook, Github, Instagram, Linkedin, Phone } from "lucide-react";
import Particle from "./Particle";
const Navbar = () => {
  return (
    <div className=" text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center md:block md:px-20  ">
      <div className="block md:flex justify-around p-2 items-center">
        <div className=" md:mx-0 mx-3">
          <h1 className=" text-[25px] font-bold ">
            Ubaid <span className=" text-[27px] font-light ">Raza</span>{" "}
            <b
              className="
             text-[#73C2FB] text-4xl font-bold "
            >
              .
            </b>
          </h1>
        </div>
        <div className="flex items-center gap-5 mt-2">
          <a href="https://www.facebook.com/profile.php?id=100071688919652">
            {" "}
            <Facebook size={22} />{" "}
          </a>
          <a href="https://www.instagram.com/ghori6765/">
            {" "}
            <Instagram size={22} />{" "}
          </a>
          <a href="https://www.linkedin.com/in/ubaid-raza-24b61127a/">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com/ubaid-ghori">
            {" "}
            <Github size={22} />
          </a>

          <a href="">
            <Phone size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
