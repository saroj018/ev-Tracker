import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        select:false
    },
    role:{
        type:String,
        default:"user"
    },
    mobile:{
        type:Number,
        required:[true,"Mobile is required"]
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});






UserSchema.methods.comparePassword = async function(password){
    console.log(password);
    console.log(this.password)
}



export const User = mongoose.model("user",UserSchema);
