import mongoose from "mongoose";

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("Database connection successful! (libs/mongodb.ts)");
    }
    catch (error : any)
    {
        console.log("Database connection failed! (libs/mongodb.ts) : " + error);
    }
}