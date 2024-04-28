import {getServerSession} from "next-auth";
import {NextResponse} from "next/server";
import User from "@/models/user";
import {connectMongoDb} from "@/lib/mongodb";

export async function GET(request : Request, { params }: { params: { id: string }})
{
    const id = params.id;
    try {
        await connectMongoDb()
        const user =await User.findById(id);
        return NextResponse.json(user, {status : 200});
    }
    catch (error : any)
    {
        console.log(error);
        return NextResponse.json(error, {status : 404});
    }

}