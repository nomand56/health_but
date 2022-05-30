import express from "express"
import { getPost } from "../controllers/posts.js"
import { createPost } from "../controllers/posts.js"
const route =express.Router()



route.get ("/", getPost)
route.post('/', createPost);
export default  route;