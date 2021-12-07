import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiExpress } from "react-icons/si";


export default function TechStackBar() {
  return (
    <div className="bg-teal text-offWhite flex flex-wrap justify-evenly text-5xl gap-5 p-5 flex-grow-0 box-border shadow-lg">
      <SiHtml5 className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiCss3 className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiJavascript className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiPhp className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiReact className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiNodedotjs className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiExpress className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiTypescript className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiSass className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiBootstrap className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiTailwindcss className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiMysql className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiMongodb className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiGraphql className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
    </div>
  )
}