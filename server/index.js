import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import nodemon from "nodemon";
import cors from 'cors'
import route from "./Routes/post.js";
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))




app.use(cors())
app.use("/post", route)
const connectionURl = "mongodb+srv://Nomand56:Hassan1314@cluster0.dik8q3z.mongodb.net/?retryWrites=true&w=majority"
const Port = process.env.PORT || 5000
mongoose.connect(connectionURl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(Port, () => console.log("SERVER IS RUNING")))
    .catch((error) => console.log(error.message))

// mongoose.set("useFindAndModify",false)