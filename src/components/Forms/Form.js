import React from "react"
import FileBase from"react-file-base64"
import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { createPost } from "../../actions"
export  const Form =()=>{
    const dispatch=useDispatch()
    const [postData,setPostData]=useState({creator:"",Message:"",Name:"",Tags:"",File:""})
    const handleSubmit=(e)=>{
    e.preventDefault()
        console.log(createPost(postData))
            dispatch(createPost(postData))
        }
        
    
return <div >
<form onSubmit={handleSubmit}>
<label htmlFor=""></label>
<input type="text"  value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}  />
<label htmlFor=""></label>
<input type="text" value={postData.Message} onChange={(e)=>setPostData({...postData,Message:e.target.value})} />
<label htmlFor=""></label>
<input type="text" value={postData.Name} onChange={(e)=>setPostData({...postData,Name:e.target.value})} />
<label htmlFor=""></label>
<input type="text" value={postData.Tags} onChange={(e)=>setPostData({...postData,Tags:e.target.value})} />
<div><FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData, File: base64})}/></div>
<button type="submit" >Submit</button>


</form>

</div>
} 