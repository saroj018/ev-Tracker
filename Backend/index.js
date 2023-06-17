import express from 'express';
import bcrypt from 'bcrypt'
import {User} from "./db/Model/UserModel.js"
import { connectDB } from './db/connectDB.js';
import generateToken from './utils/generateToken.js';

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json());
connectDB();


app.get("/",(req,res)=>{
    res.send("Hello");
})
// Sign In
app.post("/sign-in",async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) return res.status(400).json({
        success:false,
        message:"Email and password is required"
    });

    const user = await User.findOne({email,}).select("+password");
    if(!user) return res.status(400).json({
        success:false,
        message:"Email doesn't exists"
    })
    const isMatched =   await bcrypt.compare(password,user.password);

    if(!isMatched) return res.status(400).json({
        success:false,
        message:"Email and Password didn't matched"
    });
    const token = generateToken(user._id);
    res.cookie("auth_token",token,{
        httpOnly:true,
        maxAge:120*60*60*60*1000
    })
   return res.status(200).json({
        success:true,
        user,
    })
});
//Sign Up
app.post("/sign-up",async(req,res)=>{
    const {name,email,password,cpassword,mobile} = req.body;
    if(!name || !email || !password || !cpassword || !mobile){
       return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    if(password !== cpassword){
       return res.json(400).json({
            success:false,
            message:"Password are confirm password can't be same"
        });
    }
    const user  = await User.findOne({email,});
    if(user) return res.status(400).json({
        success:false,
        message:"User already exists"
    })
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      mobile: Number(mobile),
    });
    return res.status(201).json({
      success: true,
      user: newUser,
    });
});

// Charging Station Details
app.get("/get-details",(req,res)=>{
    

})



app.listen(PORT,()=>{
    console.log("Server is running at ",PORT);
})