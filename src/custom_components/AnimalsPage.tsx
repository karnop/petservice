import React from 'react';
import Image from "next/image";

function AnimalsPage() {
    return (
        <section className="h-fit bg-slate-100" id="animals">

            <div className="flex justify-center items-center">
                <h1 className="m-5 text-3xl md:text-5xl font-semibold font-serif text-center">Furries We Currently Serve</h1>
            </div>

            <div className="flex justify-center lg:justify-around mx-8 gap-3 p-4">

                {/*dog card*/}
                <div
                    className="h-fit bg-slate-800 p-1 shadow-sm rounded-full hover:shadow-lg cursor-pointer">
                    <div className="relative lg:h-72 lg:w-72 h-28 w-28 rounded-full">
                        <Image src="/dog2.jpg" alt="dog image" fill={true} objectFit="cover" className="rounded-full"/>
                    </div>
                </div>

                {/*cat boarding card*/}
                <div
                    className="h-fit bg-slate-800 p-1 shadow-sm rounded-full hover:shadow-lg cursor-pointer">
                    <div className="relative lg:h-72 lg:w-72 h-28 w-28 rounded-full">
                        <Image src="/cat2.jpg" alt="dog image" fill={true} objectFit="cover" className="rounded-full"/>
                    </div>
                </div>

                {/*pet grooming card*/}
                <div
                    className="h-fit bg-slate-800 p-1 shadow-sm rounded-full hover:shadow-lg cursor-pointer">
                    <div className="relative lg:h-72 lg:w-72 h-28 w-28 rounded-full">
                        <Image src="/rabbit.jpg" alt="dog image" fill={true} objectFit="cover" className="rounded-full"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnimalsPage;