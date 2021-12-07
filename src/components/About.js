import React from "react";
import TechStackBar from "./TechStackBar";
// import FavThings from "../assets/images/tg-things.png";
import FavThings from "./FavThings";


export default function About() {
  return (
    <section id="about" className="flex flex-col justify-between bg-offWhite no-scrollbar text-teal-dark">
      <div className="lg:flex grid-cols-2 items-center m-10 lg:m-20 flex-1">
        <div className="divide-y divide-teal-dark">
          <h1 className="text-3xl">About me</h1>
          <div>
            <p className="pt-2">I’m Tom, Bath-based but Kent-born, and I’m making moves to begin my career as software developer with a particular flair for the front-end.
              With a lifelong love of technology, I began learning to code in my free time whilst working as a teacher. 
              It was at the start of 2021 that I made the decision to pursue a career change by enrolling on the Full-Stack Track course at <a className="text-teal hover:text-teal-light"  href="https://io-academy.uk/">iO Academy</a>.</p>
            <p className="pt-2">During this intense 16 week learning experience, I studied and gained experience with a wide range of technologies (as can be seen below) through learning the fundamentals and working on a variety of projects, 
              while also becoming a <a className="text-teal hover:text-teal-light" href="https://badgecert.com/bc/html/groupbadges.html?k=Lzl1MmV2OTd2Zng0MldKWUtwZWZoams0cTkybW0yb2Q">Certified Scrum Master</a>. Across many projects, I learned what it means to work as part of a development team, following the Scrum Principles to overcome challenges as we created successful applications or improved legacy code.</p>
            <p className="pt-2">Outside of developing software, I have a wide range of interests including exploring new cities, drinking coffee, getting lost in RPGs, and watching sports, such as football and Formula 1. I also really like cats.</p>
          </div>
        </div>
        <FavThings />
      </div>
      <TechStackBar />      
    </section>
  )
}