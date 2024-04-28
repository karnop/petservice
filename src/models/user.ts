import mongoose, {models, Schema} from "mongoose";

const userSchema =  new Schema({
    email : {
        type : String,
        required : [true , "email is required"],
    },
    name : {
        type : String,
        required :  [true , "name is required"],
        minLength : [3, "minimum 3 characters required"],
        maxLength : [25, "maximum 25 character allowed"]
    },
    image : {
        type : String,
    },
    user : {
        type : String,
        enum: ['user', 'vet', 'shelter', 'groomer', 'dog boarder', 'cat boarder'],
    },
    active : {
        type : Boolean,
    }
},
    {timestamps : true}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;