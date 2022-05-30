import React from 'react'
import {  useSelector } from 'react-redux/es/exports'
import Post from './Post/Post'
function Posts() {
    const selector =useSelector((state)=>state.Post)
    console.log(selector)
  return (              
    
        !selector.length? "loading": <div>
{selector.map((item)=>{
<Post Post={item    } />
})}

        </div>  

  )
}

export default Posts