import express from "express"
import { getPost } from "../controllers/posts.js"
import { createPost,updatePost } from "../controllers/posts.js"
const route =express.Router()



route.get ("/", getPost)
route.post('/', createPost);
route.patch("/:id" ,updatePost)
export default  route;