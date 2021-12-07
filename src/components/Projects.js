import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardNotLive from "./ProjectCardNotLive"
import Transformers from "../assets/images/transformers-app.png"
import NOTLD from "../assets/images/notld.png"
import AcademyPortal from "../assets/images/academy-portal.png"
import AptitudeTest from "../assets/images/academy-aptitude-test.png"

export default function Projects() {
  return (
    <section id="projects" className="bg-offWhite p-10 md:p-20 text-teal-dark divide-y divide-teal-dark">
      <h1 className="text-3xl">Projects</h1>
      <div className="pt-5 flex gap-6 flex-wrap justify-evenly">
        <ProjectCard 
          title="Transformers Collection App" 
          description="By methodically planning our architecture, we applied the SOLID principles of object orientated design to create an app which could display the contents of a database. 
            I worked on handling the connection to the database and hydrators for pages, as well as a user search function, which generates results using MySQL statements, all of which was successfully unit tested." 
          tech="PHP Bootstrap CSS" 
          github="https://github.com/iO-Academy/2021-aug-oopTransformers" 
          live="https://dev.io-academy.uk/projects/2021-aug/2021-aug-oopTransformers/" 
          img={Transformers} 
          alt="Transformers app screenshot" />
        <ProjectCard 
          title="Night of the Living Dev"
          tech="HTML JavaScript CSS" 
          description="In this a whack-a-mole style game built with JavaScript, a wide range of custom functions were design to create a scoreboard, countdown timer and sound effects. Additionally, a difficulty level was added to provide extra challenge." 
          github="https://github.com/iO-Academy/2021-aug-whackamole" 
          live="https://dev.io-academy.uk/projects/2021-aug/2021-aug-whackamole/" 
          img={NOTLD} 
          alt="'Night of the Living Dev' app screenshot" />
        <ProjectCardNotLive 
          title="iO Academy Portal"
          tech="PHP Bootstrap"
          description="Using MVC design pattern, I was tasked with fixing bugs in legacy code to improve user experience. Unit testing was a crucial part of this build and I gained experience using CircleCI." 
          github="https://github.com/iO-Academy/AcademyPortal" 
          img={AcademyPortal} 
          alt="iO Academy Portal screenshot" />
          <ProjectCardNotLive 
          title="iO Academy Aptitude Test"
          tech="React Bootstrap Sass"
          description="Through the use of an API and legacy code, we used React to recreate an existing application used by iO Academy to test applicants’ aptitude. I worked on the administration page, where I created a form for new applicants to be added to a database. Through the use of the useEffect hook and custom regex, I was able to sanitise and validate user input against the API to prevent duplicate entries." 
          github="https://github.com/iO-Academy/aptitude-test-react" 
          img={AptitudeTest} 
          alt="iO Academy Aptitude Test screenshot" />
      </div>
    </section>
  )
}