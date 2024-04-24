import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
    return (
        <section className="bg-slate-100 h-screen flex mt-14  overflow-x-hidden">

            <div className="basis-1/2 flex-col items-center justify-center">
                <h1 className="z-30 text-7xl text-center md:text-8xl p-14 text-gray-700 font-medium">One stop solution to all your Pet Needs</h1>

                <div className="flex items-center justify-center gap-4 z-30">
                    <Button size="lg" className="text-lg px-3 lg:px-10 py-8 z-30"><Link href="/#services">Browse Services</Link></Button>
                    <Button size="lg" className="text-lg px-3 lg:px-10 py-8 z-30" variant="secondary"><Link href="/#contactform">Contact Us</Link></Button>
                </div>

            {/*    dog image for mobile screens*/}
                <Image src="/dog.png" alt="dog" width="400" height="400" className="absolute bottom-0 right-0 opacity-70"/>
            </div>
            <div className="basis-1/2 hidden lg:block">
                <Image src="/dog.png" alt="dog" height="400" width="600" className="absolute right-0 bottom-0"/>
            </div>

        </section>
    );
}

export default HomePage;