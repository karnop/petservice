import React from 'react';
import {Button} from "@/components/ui/button";

function ContactForm() {
    return (
        <div className="flex items-center justify-center p-12 bg-slate-200">
            <div className="mx-auto w-full max-w-[550px]">
                <form method="POST">
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@domain.com"
                            className="w-full rounded-md bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="subject"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter your subject"
                            className="w-full rounded-md bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="message"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Message
                        </label>
                        <textarea
                            rows={4}
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            className="w-full resize-none rounded-md bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <Button
                            className="hover:opacity-90 rounded-md py-3 px-8 w-full text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;