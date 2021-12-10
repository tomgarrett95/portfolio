import React from "react";
import EmailForm from "./EmailForm";
import SocialLinksBar from "./SocialLinksBar";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col md:h-screen justify-between bg-offWhite no-scrollbar text-teal-dark overflow-y-scroll no-scrollbar">
      <SocialLinksBar />   
      <div className="lg:grid grid-cols-2 content-center p-10 md:p-20 flex-1 gap-16">
        <div className="divide-y divide-teal-dark col-start-1 col-end-2 self-center">
          <h1 className="text-3xl">Contact Me</h1>
          <p className="pt-2">If you would like to work with me, I would love to hear from you! You can use the social links above, but I prefer to be contacted via email, which you can do through the form <span className="hidden md:inline">to the right</span><span className="inline md:hidden">below</span>.</p>
        </div>
        <EmailForm className="col-start-2 col-end-3"/>
      </div>   
    </section>
  )
}