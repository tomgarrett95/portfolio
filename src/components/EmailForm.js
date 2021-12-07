import React from "react"

export default function EmailForm() {
  return (
    // <form className="w-80 bg-offWhite shadow rounded px-8 pt-6 pb-8 mb-4" id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mpzbaole" method="post">
    //   <fieldset id="fs-frm-inputs">
    //     <div className="block">
    //       <label className="block" for="full-name">Full Name</label>
    //       <input className="block" type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
    //     </div>
    //     <div className="block">
    //       <label className="block" for="email-address">Email Address</label>
    //       <input className="block" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
    //     </div>
    //     <div className="block">
    //       <label className="block" for="message">Message</label>
    //       <textarea className="block" rows="5" name="message" id="message" placeholder="Write your message here..." required=""></textarea>
    //       <input className="block" type="hidden" name="_subject" id="email-subject" value="Porfolio Contact Form Submission"/>
    //     </div>
    //   </fieldset>
    //   <button type="submit" value="Submit">Submit</button>
    // </form>

    <div className="w:full mt-4">
            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mpzbaole" method="post">
                <div className="md:flex">
                    <div className="w-full flex flex-col">
                        <label htmlFor="full-name" className="font-semibold leading-none">Full Name</label>
                        <input type="text" name="name" id="full-name" placeholder="Ada Lovelace" required="" className="mt-2 leading-none text-gray-900 p-3 focus:outline-none focus:ring-2 bg-gray-100 border rounded border-teal focus:ring-teal-light focus:shadow-none" />
                    </div>
                </div>
                <div className="md:flex items-center mt-4">
                  <div className="w-full flex flex-col">
                      <label htmlFor="email-address" className="font-semibold leading-none">Email Address</label>
                      <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="" className="mt-2 leading-none text-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-teal-light bg-gray-100 border rounded border-teal" />
                  </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-4">
                        <label htmlFor="message" className="font-semibold leading-none">Message</label>
                        <textarea type="text" name="message" id="message" placeholder="Write your message here..." required="" className="mt-2 h-40 font-NotoSans text-gray-900 p-3 resize-none focus:ring-2 focus:ring-teal-light bg-gray-100 border rounded border-teal focus:outline-none"></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Porfolio Contact Form Submission"/>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-4">
                    <button className="leading-none text-offWhite py-4 px-10 bg-teal-dark rounded hover:bg-teal focus:ring-2 focus:ring-offset-2 focus:ring-teal-dark focus:outline-none">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    )
}
