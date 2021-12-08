import React from "react";
import Logo from "../assets/images/TG-logo.png";
import CV from "../assets/docs/tom-garrett-cv.pdf"


export default function Sidebar() {
  return (
    <nav className="font-Kreon sidebar bg-offWhite flex flex-col justify-center items-center gap-2 m-0 p-0 w-64 h-screen text-center text-2xl shadow-lg text-teal absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="w-8/12">
       <a href="/"
           onClick={e => {
           let splash = document.querySelector("#splash");
           e.preventDefault();  // Stop Page Reloading
           splash && splash.scrollIntoView({behavior: "smooth"});
           }} 
           >
          <img src={Logo} alt="Tom Garrett" className="max-h-full w-100 transform duration-500 ease-in-out hover:scale-105" />
        </a>
      </div>
      <div className="block">
        <a href="/"
           onClick={e => {
           let about = document.querySelector("#about");
           e.preventDefault();  // Stop Page Reloading
           about && about.scrollIntoView({behavior: "smooth"});
           }}
           className="block m-2 pr-0.5 pl-0.5 transform duration-500 hover:text-teal-light hover:scale-110">
            About
        </a>
        <a href="/"
           onClick={e => {
           let projects = document.querySelector("#projects");
           e.preventDefault();  // Stop Page Reloading
           projects && projects.scrollIntoView({behavior: "smooth"});
           }}
           className="block m-2 pr-0.5 pl-0.5 transform duration-500 hover:text-teal-light hover:scale-110">
            Projects
        </a>
        <a href="/"
           onClick={e => {
           let contact = document.querySelector("#contact");
           e.preventDefault();  // Stop Page Reloading
           contact && contact.scrollIntoView({behavior: "smooth"});
           }}
           className="block m-2 pr-0.5 pl-0.5 transform duration-500 hover:text-teal-light hover:scale-110">
            Contact Me
        </a>
        <a href={ CV }
           className="block m-2 pr-0.5 pl-0.5 transform duration-500 hover:text-teal-light hover:scale-110">
            CV
        </a>
      </div>
    </nav>
  )
}