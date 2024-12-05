require('dotenv').config()

//imports modules
const express = require("express")
const mongoose = require("mongoose")
const router = require("./router")

const app = express()
console.log(process.env.PORT)

app.use(router)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to db and listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })