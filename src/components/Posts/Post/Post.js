import React from 'react'

function Post({Post}) {
  return (
    <div>

        <h1 >{Post.creators}</h1>
    <img src={Post.File} alt="" />
        
    </div>
  )
}

export default Post