import {connectMongoDb} from "@/lib/mongodb";
import User from "@/models/user";
import {NextResponse} from "next/server";

export async function POST(request : any) {
    const {name, email} = await request.json();
    await connectMongoDb();
    try
    {
        const userExists = await User.findOne({email : email});
        if(!userExists) { const user = await User.create({name : name, email : email, user : "user", active : true});}
        else {User.updateOne({email: email}, {active : true})}
        return NextResponse.json({message : "User Signed In"} , {status : 201});

    }
    catch (error : any)
    {
        return NextResponse.json({message : error} , {status : 500})
    }
}