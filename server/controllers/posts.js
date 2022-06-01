import mongoose from "mongoose"
import Postmodel from "../Models/Postmodel.js"
export const getPost= async (req,res)=>{
try{
    const getfrom = await Postmodel.find()

    res.status(200).json(getfrom)
    
}
catch(error){
    console.log(error)
}
}



export const createPost= async (req,res)=>{
const {Name, message, File, creator, tags}  =req.body
const newPost=new Postmodel({Name, message, File, creator, tags})
try{
    await newPost.save()
    res.status(200).json(newPost)
}catch(error){
    res.status(404).json({message:error.message})
}
}
export const updatePost=async (req,res)=>{
    const {id}=req.params
   const {Name, message, File, creator, tags}  =req.body
   if(!mongoose.Types.ObjectId.isValid(id)) return req.status(404).send("no post find with id")
   const updatePost={Name, message, File, creator, tags,_id:id}

   await postMessage.findByIdAndUpdate(id,updatePost,{new:true})
   resjson(updatePost)
}