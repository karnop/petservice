import React from 'react';
import ContactForm from "@/custom_components/ContactForm";
import Image from "next/image";

function ContactPage() {
    return (
        <div className="flex flex-col lg:flex-row bg-slate-200" id="contactform">

            <div className="basis-1/2 overflow-x-hidden">
                <h1 className="z-30 text-4xl font-semibold lg:font-normal text-center md:text-6xl p-14 pb-4 text-gray-800 font-serif">
                   Query? Contact Us!
                </h1>

                <div className="flex overflow-x-hidden justify-center">
                    <Image src="/pawprint.png" width="400" height="400" className="hidden lg:block" alt="rabbit"/>
                </div>
            </div>
            <div className="basis-1/2">
                <ContactForm/>
            </div>
        </div>
    );
}

export default ContactPage;