import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";

export default function SocialLinksBar() {
  return (
    <div className="bg-teal text-offWhite flex flex-wrap justify-evenly text-5xl gap-5 p-5 flex-grow-0 box-border shadow-lg">
      <SiGithub className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiLinkedin className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
      <SiFrontendmentor className="transform duration-500 ease-in-out hover:scale-110 p-1"/>
    </div>
  )
}