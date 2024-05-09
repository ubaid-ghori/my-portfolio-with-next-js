import React from "react";
import { Code } from "lucide-react";
import { FaDesktop, FaReact, FaArrowAltCircleRight,SiNextdotjs } from "react-icons/fa";

const Services = () => {
  return (
    <div className="mt-20 mx-4 md:mx-20 text-white">
      <h2 className="font-bold text-3xl text-[#73C2FB] font-mono mb-8">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <ServiceCard
          icon={<FaDesktop size={80} />}
          title="Frontend"
          description=" Frontend development is a fascinating aspect of web development. It's the part where the interface of a website or application is created, which users interact with. This involves using HTML, CSS, and JavaScript. Frontend skills are highly valued nowadays because a good frontend developer enhances user experience and keeps users engaged with the website or application."
        />
        <ServiceCard
          icon={<FaReact size={80}   />}
          title="React JS"
          description="React is a JavaScript library for building user interfaces. It simplifies the process of creating interactive web applications by breaking the UI into reusable components. Its virtual DOM and efficient rendering make it fast and scalable. React's component-based architecture promotes code reusability and maintainability. With its extensive ecosystem and community support, React has become a popular choice for frontend development."
        />
        <ServiceCard
          icon={<Code size={80} className=" font-bold" />}
          title="Next JS"
          description="
          Next.js is a React framework for building server-side rendered and statically generated web applications. It simplifies development with features like automatic code splitting and routing. Next.js supports TypeScript, API routes, and built-in CSS and Sass support. It enables developers to create fast, SEO-friendly web applications with ease. With its robust capabilities, Next.js streamlines the process of building modern web applications."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 border-2 border-gray-400 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center justify-center rounded-full   mb-5">
        {icon }
      </div>
      <h2 className="text-2xl font-bold text-[#73C2FB] mb-2">{title}</h2>
      <p className="text-sm font-thin">{description}</p>
      <button className="mt-4 text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
        Learn More
      </button>
    </div>
  );
};

export default Services;
