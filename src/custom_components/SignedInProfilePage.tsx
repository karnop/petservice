import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import PetCard from "@/custom_components/PetCard";
import {useSession} from "next-auth/react";
import AddPetCard from "@/custom_components/AddPetCard";
import {MoonLoader} from "react-spinners";

function SignedInProfilePage() {

    const {status, data} = useSession();
    // @ts-ignore
    const userId = data?.user?.id!;
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    let userName, userEmail, userCreationDate, userLastActive;
    // @ts-ignore
    userName = userData?.name!
    // @ts-ignore
    userEmail = userData?.email!
    // @ts-ignore
    userCreationDate = userData?.createdAt!.substring(0, 10);
    // @ts-ignore
    userLastActive = userData?.updatedAt!.substring(11, 16) + ", " + userData?.updatedAt!.substring(0, 10);

    const baseUrl = process.env.PROJECT_URL!;
    const url = baseUrl + `api/get_profile/${userId}`;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const newData = await response.json();
            setUserData(newData)
            setName(newData.name)
            setLoading(false);
        };
        fetchData();
    }, []);

    const [name, setName] = useState(userName);


    function changeName() {
        console.log("Name changed")
    }

    function changeImage() {
        console.log("Image changed")
    }


    return (

        <section>

            {loading && <div className="h-screen w-full flex items-center justify-center">
                <MoonLoader color="black" size="40px"/>
            </div>}

            {!loading && <div className="flex flex-col">
                <div className="h-48 bg-slate-50 w-full flex flex-col items-center justify-center gap-2">
                    <div
                        className="h-32 w-32 bg-secondary rounded-full flex items-center justify-center overflow-x-hidden">
                        <Image src="/cat.png" alt="dofd" height="80" width="80" className="cursor-pointer"/>
                    </div>
                    <Button variant="secondary" className="font-semibold" onClick={() => {
                        changeImage()
                    }}>Change Image</Button>
                </div>


                <div className="flex flex-col lg:flex-row">
                    <div
                        className="lg:basis-1/3 bg-slate-50 m-1 rounded-md border-2 border-slate-100 shadow-md h-fit px-6 ">

                        <div className="flex items-center justify-between py-3">
                            <p className="text-slate-600 font-bold">Name </p>
                            <input className="font-semibold outline-none text-right bg-slate-100" value={name}
                                   onChange={(e) => setName(e.target.value)}/>
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

                        <div className="flex items-center justify-center py-3">
                            <Button variant="secondary" size="lg" className="font-semibold" onClick={() => {
                                changeName()
                            }}>Change Name</Button>
                        </div>


                        {/*Add a pet*/}
                        <AddPetCard userId={userId}/>


                    </div>


                    <div className="basis-2/3 bg-slate-50 m-1 rounded-md border-2 border-slate-100 px-2">
                        <h2 className="font-semibold text-2xl text-center p-2">Furries</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">


                            {/*Individual pet card*/}
                            {/*<PetCard/>*/}
                            {/*<PetCard/>*/}
                            {/*<PetCard/>*/}
                            {/*<PetCard/>*/}
                            {/*<PetCard/>*/}

                        </div>
                    </div>
                </div>
            </div>
            }
        </section>

    );
}

export default SignedInProfilePage;