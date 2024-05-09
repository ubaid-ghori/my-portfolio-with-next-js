import React from "react";
import { Facebook, Github, Instagram, Linkedin, Phone } from "lucide-react";
import Particle from "./Particle";

const Navbar = () => {
  return (
    <div>
      <div className="md:fixed w-full top-0 md:mx-4 md:top-40 md:w-14 p-4 md:right-0 md:rounded-full md:z-50 text-white bg-[#73C2FB] ">
      <div className="">
        
        <div className="  flex md:flex-col  justify-between items-center md:gap-5 mt-2">
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
    </div>
  );
};

export default Navbar;
