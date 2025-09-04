import validator from 'validator';
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

//api for adding doctor
const addDoctor=async(req,res)=>{
    try{
  const {name,email,password,speciality,degree,experience,about,fees,address}=req.body
  const imagefile=req.file
 //checking for all data to add doctor
 if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imagefile){
return res.json({success:false,message:'all fields are required'})

 }
 //validating email format
if(!validator.isEmail(email)){
return res.json({success:false,message:"invalid email format"})
}
//validating strong password
if(password.length<8){
    return res.json({success:false,message:"password must be at least 8 characters"})
}
//hashing doctor password
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)
//uploading image to cloudinary
const imageupload=await cloudinary.uploader.upload(imagefile.path,{resource_type:"image"})
const imageurl=imageupload.secure_url

const doctordata={
    name,
    email,
    image:imageurl,
    password:hashedPassword,
    speciality,
    degree,
    experience:Number(experience),
    about,
    fees: Number(fees),
    address:JSON.parse(address),
    date:Date.now()
}
const newDoctor=new doctorModel(doctordata)
await newDoctor.save()
return res.json({success:true,message:"doctor added successfully"})


    }
    catch(error){
        console.log(error)
        res.json({success:false,messgae:error.message})

    }

}

//api for the admin login

const loginAdmin=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
           
        }
        else{
            res.json({success:false,message:"invalid admin credentials"})
        }

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export { addDoctor,loginAdmin }