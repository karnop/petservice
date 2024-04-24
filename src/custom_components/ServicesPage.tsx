import React from 'react';
import Image from "next/image";

function ServicesPage() {
    return (
        <section className="h-fit bg-slate-100" id="services">

            <div className="flex justify-center">
                <h1 className="m-5 text-3xl md:text-5xl font-semibold font-serif">Our Pet Care Services</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">

                {/*dog boarding card*/}
                <div className="h-fit flex flex-col bg-slate-200 rounded-xl p-1 shadow-sm hover:shadow-lg cursor-pointer">
                    <div className="relative h-56">
                        <Image src="/dogs.jpg" alt="dog image"  fill={true} className="rounded-xl" />
                    </div>

                    <div className="">
                        <h1 className="flex justify-center m-3 text-2xl font-semibold">Dog Boarding</h1>
                        <p className="p-3 text-lg text-center text-slate-700">provides a loving environment for your furry companion while you’re away, ensuring they get the attention and care they deserve! 🐾</p>
                    </div>
                </div>

                {/*cat boarding card*/}
                <div className="h-fit flex flex-col bg-slate-200 rounded-xl p-1 shadow-sm hover:shadow-lg cursor-pointer">
                    <div className="relative h-56">
                        <Image src="/cats_bg.jpg" alt="dog image"  fill={true} className="rounded-xl" />
                    </div>

                    <div className="">
                        <h1 className="flex justify-center m-3 text-2xl font-semibold">Cat Boarding</h1>
                        <p className="p-3 text-lg text-center text-slate-700">offer a nurturing haven while you are away. We ensure that they receive the same love, attention, and care they rightfully deserve! 🐾</p>
                    </div>
                </div>

                {/*pet grooming card*/}
                <div className="h-fit flex flex-col bg-slate-200 rounded-xl p-1 shadow-sm hover:shadow-lg cursor-pointer">
                    <div className="relative h-56">
                        <Image src="/pet_grooming.jpg" alt="dog image"  fill={true} objectFit="cover" className="rounded-xl" />
                    </div>

                    <div className="">
                        <h1 className="flex justify-center m-3 text-2xl font-semibold">Pet Grooming</h1>
                        <p className="p-3 text-lg text-center text-slate-700">provides a loving environment for your furry companion while you’re away, ensuring they get the attention and care they deserve! 🐾</p>
                    </div>
                </div>

                {/*vet card*/}
                <div className="h-fit flex flex-col bg-slate-200 rounded-xl p-1 shadow-sm hover:shadow-lg cursor-pointer">
                    <div className="relative h-56">
                        <Image src="/vet_bg.jpg" alt="dog image"  fill={true} objectFit="cover" className="rounded-xl" />
                    </div>

                    <div className="">
                        <h1 className="flex justify-center m-3 text-2xl font-semibold">Explore Vets</h1>
                        <p className="p-3 text-lg text-center text-slate-700">provides a loving environment for your furry companion while you’re away, ensuring they get the attention and care they deserve! 🐾</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ServicesPage;