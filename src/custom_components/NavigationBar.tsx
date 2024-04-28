"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {BeatLoader} from "react-spinners";
import {useRouter} from 'next/navigation'
import {updateSessionFromResponse} from "mongodb/src/sessions";

function NavigationBar() {
    // status : variable for checking if register_user is logged in or not
    // data : variable for getting the data of logged-in register_user
    const {status, data, update} = useSession();
    const userImage = data?.user?.image;
    const userEmail = data?.user?.email;
    // @ts-ignore
    const userId = data?.user?.id!;

    // router
    const router = useRouter();
    const baseUrl = process.env.PROJECT_URL!;

    // fetching the user image
    return (
        <div
            className="flex items-center bg-slate-100 h-14 justify-between px-8 w-full fixed top-0 z-50 bg-transparent backdrop-blur-md">

            <div className="flex items-center gap-1">
                <Image src="/cat.png" alt="logo" height="35" width="35"/>
                <h1 className="text-xl font-semibold"><Link href={baseUrl}>PetService.co</Link></h1>
            </div>


            <div className="hidden md:block">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="text-md"><Link href="/#services">Services</Link></Button>
                    <Button variant="ghost" className="text-md"><Link href="/#animals">Animals</Link></Button>
                    <Button variant="ghost" className="text-md"><Link href="/#animalshelters">Animal
                        Shelters</Link></Button>
                    <Button variant="ghost" className="text-md"><Link href="/#contactform">Contact Us</Link></Button>
                </div>
            </div>


            {status === "loading" &&
                (
                    <div className="flex items-center justify-center gap-1">
                        <Button><BeatLoader color="white" size="6px"/></Button>
                    </div>
                )
            }

            {status === "unauthenticated" &&
                (
                    <div className="flex items-center gap-1">
                        <Button onClick={() => signIn("google")}>Sign In</Button>
                    </div>
                )
            }

            {status === "authenticated" &&
                (
                    <div className="flex items-center justify-center gap-3">
                        <Image src={userImage || ""} alt="" width="40" height="40"
                               className="rounded-full hover:shadow-xl cursor-pointer" onClick={() => {router.push(`${baseUrl}/profile/${userId}`)}}/>
                        <Button onClick={() => signOut()}>Sign Out</Button>
                    </div>
                )
            }
        </div>
    );
}

export default NavigationBar;