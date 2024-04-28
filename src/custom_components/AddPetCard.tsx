import React, {useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { useRouter } from "next/navigation";

function AddPetCard({userId}: { userId: String }) {

    const router = useRouter();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const [color, setColor] = useState("");
    const [birthdate, setBirthdate] = useState(2012);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    function addPetImage() {
    }

    function addPet() {
        setLoading(true);
        setError("");
        setSuccess("")
        const d = new Date();
        let year = d.getFullYear();
        const petName = name, petType = type, petBreed = breed, petGender = gender, petColor = color, petBirthYear = birthdate;
        if(!petName || !petType || !petBreed || !petGender || !petColor || !petBirthYear)
        {
            setError("All fields are necessary !");
        }
        else if(petType.trim().toLowerCase() != "dog" && petType.trim().toLowerCase() != "cat" && petType.trim().toLowerCase() != "rabbit")
        {
            setError("Currently we only support Dogs, Cats and Rabbits !");
        }

        else if(petGender.trim().toLowerCase() != "male" && petGender.trim().toLowerCase() != "female")
        {
            setError("Currently we only support male and female genders !");
        }
        else if(petBirthYear < 2000 || petBirthYear > year)
        {
            setError("Currently we only support birth years in the range 2000 - " + year);
        }
        else
        {
            setName(""); setType(""); setBreed(""); setGender(""); setColor(""); setBirthdate(2012);
            console.log(petName, petType, petBreed, petGender, petColor, petBirthYear);
            setSuccess("Pet Added Successfully!")
            router.refresh();
        }

        setLoading(false);


    }

    return (

        <div className="bg-slate-100 p-2 rounded-lg px-6 my-2">
            <h1 className="font-semibold text-3xl text-center p-4">Add a Pet</h1>


            <div className="flex gap-5 flex-col">

                {/*race of Pet*/}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg">Type</h1>
                    <input className="font-semibold outline-none text-center bg-slate-100 w-52 p-2" value={type}
                           placeholder="Dog / Cat / Rabbit"
                           onChange={(e) => setType(e.target.value)}/>
                </div>

                {/*Name of Pet*/}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg">Name</h1>
                    <input className="font-semibold outline-none text-center bg-slate-100 w-52 p-2" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>

                {/*Image of Pet*/}
                <div className="flex flex-col justify-center items-center gap-4">
                    <div
                        className="h-32 w-32 bg-secondary rounded-full flex items-center justify-center overflow-x-hidden">
                        <Image src="/cat.png" alt="dofd" height="80" width="80" className=""/>
                    </div>
                    <Button variant="secondary" className="font-semibold" onClick={() => {
                        addPetImage()
                    }}>AddImage</Button>
                </div>


                {/*Breed of Pet*/}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg">Breed</h1>
                    <input className="font-semibold outline-none text-center bg-slate-100 w-52 p-2" value={breed}
                           onChange={(e) => setBreed(e.target.value)}/>
                </div>

                {/*gender of Pet*/}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg">Gender</h1>
                    <input className="font-semibold outline-none text-center bg-slate-100 w-52 p-2" value={gender}
                           onChange={(e) => setGender(e.target.value)}/>
                </div>

                {/*color of Pet*/}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg">Color</h1>
                    <input className="font-semibold outline-none text-center bg-slate-100 w-52 p-2" value={color}
                           onChange={(e) => setColor(e.target.value)}/>
                </div>

                {/*birth year of Pet*/}
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg">BirthYear</h1>
                    <input className="font-semibold outline-none text-center bg-slate-100 w-52 p-2" value={birthdate}
                           type="number"
                           onChange={(e) => setBirthdate(parseInt(e.target.value))}/>
                </div>

                <Button variant="secondary" disabled={loading} className="font-semibold" onClick={() => {
                    addPet()
                }}>Add pet</Button>

                {error && <p className="text-red-700 font-semibold text-center">{error}</p>}
                {success && <p className="text-green-700 font-semibold text-center">{success}</p>}

            </div>


        </div>

    );
}

export default AddPetCard;