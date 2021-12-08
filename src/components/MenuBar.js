import React from "react";
import { Popover, Transition } from '@headlessui/react';
import { FiMenu } from "react-icons/fi";
import { Fragment } from 'react';
import Logo from '../assets/images/TG-logo.png';
import CV from "../assets/docs/tom-garrett-cv.pdf"

export default function MenuBar() {
  return (
    <div className="w-full px-4 fixed h-12 top-0 bg-offWhite shadow md:hidden text-teal z-10">
      <Popover className="relative h-full flex justify-center align-center">
        {({ open }) => (
          <>
          <div className="w-screen flex justify-between">
          <a href="/"
           onClick={e => {
           let splash = document.querySelector("#splash");
           e.preventDefault();  // Stop Page Reloading
           splash && splash.scrollIntoView({behavior: "smooth"});
           }} 
           >
              <img src={Logo} alt="T/G logo" className="p-2 h-full max-w-full" />
            </a>
              <Popover.Button
                className={`
                  ${open ? '' : 'text-opacity-90'}
                  group rounded-md inline-flex items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <FiMenu
                  className={`${open ? '' : 'text-opacity-70'}
                    h-7 w-7 mx-2 group-hover:text-teal-dark transition ease-in-out duration-500`}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-12 z-10 w-screen px-4 mt-3">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-offWhite p-7 justify-items-center">
                    <a href="/"
                      onClick={e => {
                      let about = document.querySelector("#about");
                      e.preventDefault();  // Stop Page Reloading
                      about && about.scrollIntoView({behavior: "smooth"});
                      }}
                      className="font-Kreon text-xl text-teal transform duration-500 hover:scale-110 hover:text-teal-dark">
                        About
                    </a>
                    <a href="/"
                      onClick={e => {
                      let projects = document.querySelector("#projects");
                      e.preventDefault();  // Stop Page Reloading
                      projects && projects.scrollIntoView({behavior: "smooth"});
                      }}
                      className="font-Kreon text-xl text-teal transform duration-500 active:text-teal hover:scale-110 hover:text-teal-dark">
                        Projects
                    </a>
                    <a href="/"
                      onClick={e => {
                      let contact = document.querySelector("#contact");
                      e.preventDefault();  // Stop Page Reloading
                      contact && contact.scrollIntoView({behavior: "smooth"});
                      }}
                      className="font-Kreon text-xl text-teal transform duration-500 hover:scale-110 hover:text-teal-dark">
                        Contact Me
                    </a>
                    <a href={ CV }
                      className="font-Kreon text-xl text-teal transform duration-500 hover:scale-110 hover:text-teal-dark">
                        CV
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}