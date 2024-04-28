import React from 'react';
import Image from "next/image";

function PetCard() {
    return (
        <div className="bg-slate-100 p-2 rounded-md px-6">
            <div className="flex gap-5 flex-col lg:flex-row items-center justify-between">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl">Buddy</h1>
                    <p className="text-md">Dog</p>
                </div>
                {/*Image of dog*/}
                <div
                    className="h-32 w-32 bg-secondary rounded-full flex items-center justify-center overflow-x-hidden">
                    <Image src="/cat.png" alt="dofd" height="80" width="80" className=""/>
                </div>
            </div>

            <div className="flex items-center justify-between py-3 ">
                <p className="text-slate-600 font-bold">Breed </p>
                <p className="font-semibold">Labrador</p>
            </div>

            <div className="flex items-center justify-between py-3 ">
                <p className="text-slate-600 font-bold">Gender </p>
                <p className="font-semibold">Male </p>
            </div>


            <div className="flex items-center justify-between py-3 ">
                <p className="text-slate-600 font-bold">Color</p>
                <p className="font-semibold">Golden </p>
            </div>

            <div className="flex items-center justify-between py-3 ">
                <p className="text-slate-600 font-bold">BirthDate</p>
                <p className="font-semibold">2024-10-23 </p>
            </div>

            <div className="flex items-center justify-between py-3 ">
                <p className="text-slate-600 font-bold">Age</p>
                <p className="font-semibold">9 </p>
            </div>

        </div>
    );
}

export default PetCard;