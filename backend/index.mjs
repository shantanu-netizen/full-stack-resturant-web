import mongoose from "mongoose";
import express from "express"
import router from "./src/router.mjs";
import config from "./config.mjs";
import cors from "cors"
const app =express()
app.use(cors({ exposedHeaders: ["authorization"] }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(config.uri).then(() => {
    console.log("Connected to Mongoose")
}).catch((err) => {
    console.log(err)
})
app.use('/', router)
app.listen(config.port, () => {
    console.log(`your port is ${config.port}`)
})
