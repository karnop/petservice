"use client"
import Image from "next/image";
import {useSession} from "next-auth/react";
import {MoonLoader} from "react-spinners";
import SignedInProfilePage from "@/custom_components/SignedInProfilePage";
import VisitingProfilePage from "@/custom_components/VisitingProfilePage";

function Page({params}: { params: { id: string } }) {

    const {status, data} = useSession();
    // @ts-ignore
    const id = data?.user?.id!;


    return (
        <section className="min-h-screen h-fit flex flex-col pt-14">

            {status === "loading" &&
                <div className="h-full w-full flex items-center justify-center">
                    <MoonLoader color="black" size="40px"/>
                </div>
            }

            {status === "authenticated" && id === params.id &&
                <SignedInProfilePage/>
            }

            {status === "authenticated" && id !== params.id &&
                <VisitingProfilePage pageId={params.id}/>
            }

            {status === "unauthenticated" &&
                <VisitingProfilePage pageId={params.id}/>
            }


        </section>
    );
}

export default Page;