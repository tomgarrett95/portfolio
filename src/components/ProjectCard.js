import React from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard(props) {
  return (
  <div className="shadow-md rounded-md overflow-hidden w-80 bg-offWhite text-teal-dark transform duration-500 ease-in-out hover:scale-105">
    <img
      src={ props.img }
      className=""
      alt={ props.alt } 
    />

    <div className="p-4">
      <h5 className="text-xl font-semibold mb-2">{ props.title }</h5>
      <p className="mb-2 italic"> { props.tech } </p>
      <p className="mb-4">
        { props.description }
      </p>
      <div className="flex gap-4 text-2xl">
        <a href={ props.github } className="transform duration-500 ease-in-out hover:scale-110"><SiGithub /></a>
        <a href={ props.live } className="transform duration-500 ease-in-out hover:scale-110"><HiOutlineExternalLink /></a>
      </div>
    </div>
  </div>
  )
}