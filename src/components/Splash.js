import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Splash() {
  return (
    <header id="splash" className="h-screen bg-splashImage bg-cover w-auto text-offWhite">
      <div className="bg-teal-dark bg-opacity-60 h-full w-full flex flex-col justify-center p-16 relative">
        <div className="divide-y divide-offWhite">
          <h1 className="font-Kreon text-6xl md:text-7xl">Tom Garrett</h1>
          <h2 className="font-NotoSans text-1xl tracking-widest md:text-2xl">SOFTWARE DEVELOPER</h2>
        </div>
        <div className="flex justify-center w-full">
        <a href="/"
           onClick={e => {
           let about = document.querySelector("#about");
           e.preventDefault();  // Stop Page Reloading
           about && about.scrollIntoView({behavior: "smooth"});
           }} 
           className="absolute bottom-16">
          <FaChevronDown className="text-5xl animate-bounce transform duration-500 hover:text-teal-light hover:scale-110"/>
        </a>
        </div>
      </div>
    </header>
  )
}