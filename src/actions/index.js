import * as api from "../api/index"

export const getPost= ()=>async (dispatch)=>{
try{
    const {data}=await api.fetchPost()

    dispatch({type:"FETCH_All",payload:data})
}
catch(error){
    console.log(error)
}
}


export const createPost=(post)=>async (dispatch)=>{
try{
const{data}=await api.createPost(post)
dispatch({type:"CREATE", payload:data})
} catch(error){
    console.log(error.message)
}
}