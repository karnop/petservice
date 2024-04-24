import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function NavigationBar() {
    return (
        <div className="flex items-center bg-slate-100 h-14 justify-between px-8 w-full fixed top-0 z-50 bg-transparent backdrop-blur-md">

            <div className="flex items-center gap-1">
                <Image src="/cat.png" alt="logo" height="35" width="35"/>
                <h1 className="text-xl font-semibold">PetService.co</h1>
            </div>


            <div className="hidden md:block">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="text-md"><Link href="/#services">Services</Link></Button>
                    <Button variant="ghost" className="text-md"><Link href="/#animals">Animals</Link></Button>
                    <Button variant="ghost" className="text-md"><Link href="/#animalshelters">Animal Shelters</Link></Button>
                    <Button variant="ghost" className="text-md"><Link href="/#contactform">Contact Us</Link></Button>
                </div>
            </div>


            <div className="flex items-center gap-1">
                <Button>Sign In</Button>
            </div>
        </div>
    );
}

export default NavigationBar;