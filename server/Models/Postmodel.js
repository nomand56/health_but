import mongoose from "mongoose";


const post =mongoose.Schema({
Name:String,
message:String,
tags:[String],
creator:String,
File:String,
likeCount:{
    type:Number,
    default:0

},
createdAt:{
    type:Date,
    default:new Date()
}

})


const Postmodel=mongoose.model("post",post)
export default Postmodel;