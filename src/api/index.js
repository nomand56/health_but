import Axios from "axios";


const url ="http://localhost:5000/post"


export const fetchPost=()=> Axios.get(url)  
export const createPost=(newPost)=> Axios.post(url,newPost)