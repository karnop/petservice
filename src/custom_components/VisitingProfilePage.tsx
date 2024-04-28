"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import PetCard from "@/custom_components/PetCard";
import {MoonLoader} from "react-spinners";

function VisitingProfilePage({pageId} : {pageId : any}) {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    let userName, userEmail, userCreationDate, userLastActive;

    const baseUrl = process.env.PROJECT_URL!;
    const url = baseUrl + `api/get_profile/${pageId}`;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const newData = await response.json();
            setUserData(newData)
            setLoading(false);
        };
        fetchData();
    }, []);

    // @ts-ignore
    userName = userData?.name!
    // @ts-ignore
    userEmail = userData?.email!
    // @ts-ignore
    userCreationDate = userData?.createdAt!.substring(0, 10);
    // @ts-ignore
    userLastActive = userData?.updatedAt!.substring(11, 16) + ", " + userData?.updatedAt!.substring(0, 10);


    return (
        <section>

            {loading && <div className="h-screen w-full flex items-center justify-center">
                <MoonLoader color="black" size="40px"/>
            </div>}

            {!loading &&
                <div className="flex flex-col">
                    {/*<p>page id : {pageId}</p>*/}
                    {/*<p>data : {JSON.stringify(userData)}</p>*/}

                    <div className="h-36 bg-slate-100 w-full flex items-center justify-center">
                        <div
                            className="h-32 w-32 bg-secondary rounded-full flex items-center justify-center overflow-x-hidden">
                            <Image src="/cat.png" alt="dofd" height="80" width="80" className=""/>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:basis-1/3 bg-slate-100 m-1 rounded-md border-2 border-slate-200 px-6 ">

                            <div className="flex items-center justify-between py-3">
                                <p className="text-slate-600 font-bold">Name </p>
                                <p className="font-semibold">{userName} </p>
                            </div>

                            <div className="flex items-center justify-between py-3">
                                <p className="text-slate-600 font-bold">Email </p>
                                <p className="font-semibold">{userEmail} </p>
                            </div>

                            <div className="flex items-center justify-between py-3">
                                <p className="text-slate-600 font-bold">Member since </p>
                                <p className="font-semibold">{userCreationDate} </p>
                            </div>

                            <div className="flex items-center justify-between py-3">
                                <p className="text-slate-600 font-bold">Last Active </p>
                                <p className="font-semibold">{userLastActive} </p>
                            </div>

                        </div>


                        <div className="basis-2/3 bg-slate-100 m-1 rounded-md border-2 border-slate-200 px-2">
                            <h2 className="font-semibold text-2xl text-center p-2">Furries</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

                                {/*Individual pet card*/}
                                <PetCard/>
                                <PetCard/>
                                <PetCard/>
                                <PetCard/>
                                <PetCard/>

                            </div>
                        </div>
                    </div>


                </div>}
        </section>


    );
}


export default VisitingProfilePage;