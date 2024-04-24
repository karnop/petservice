import React from 'react';
import Image from "next/image";

function Footer() {
    return (
        <footer className="p-6 flex bg-slate-800 justify-between items-center">

            <div className="flex items-center gap-1">
                <Image src="/cat.png" alt="logo" height="35" width="35" color="white"/>
                <h1 className="text-xl font-semibold text-slate-100">PetService.co</h1>
            </div>

            <div className="flex gap-2">
                <Image src="/instagram_logo.png" alt="new delhi" height="20" width="20" className="w-6 h-6 hover:opacity-80"/>
            </div>

        </footer>
    );
}

export default Footer;