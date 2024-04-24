import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function AnimalShelterPage() {
    return (
        <section className="bg-slate-200 h-fit flex flex-col lg:flex-row p-2" id="animalshelters">

            <div className="basis-1/2 flex-col items-center justify-center">
                <h1 className="z-30 text-4xl font-semibold lg:font-normal text-center md:text-6xl p-14 text-gray-800 font-serif">
                    Unable to take care of your furry friend?
                </h1>

                <h1 className="z-30 text-2xl text-center md:text-4xl px-14 py-2 text-gray-700 font-serif">
                    It&apos;s alright, we&apos;ll help you relocate him/her.
                </h1>

                <div className="flex items-center justify-center gap-4 z-30">
                    <Button size="lg" className="text-xl px-3 lg:px-10 py-8 z-30 m-8" variant="secondary"><Link
                        href="/">Explore shelters</Link></Button>
                </div>

                {/*    dog image for mobile screens*/}
                <div className="flex items-center justify-center">
                    <Image src="/animal_shelter.jpg" alt="dog" width="400" height="400"
                           className="md:hidden rounded-xl m-2"/>
                </div>
            </div>
            <div className="basis-1/2 hidden lg:block relative">
                <Image src="/animal_shelter.jpg" alt="dog" fill={true} objectFit="cover" className="rounded-md"/>
            </div>

        </section>
    );
}

export default AnimalShelterPage;