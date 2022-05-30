import Postmodel from "../Models/Postmodel.js"
export const getPost= async (req,res)=>{

    const getfrom = await Postmodel.find()

    res.status(200).json(getfrom)
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