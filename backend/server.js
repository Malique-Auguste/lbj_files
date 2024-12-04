const express = require("express")

const app = express()

app.listen(4000, () => {
    console.log("Server running")
})

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get("/", (req, res) => {
    res.json({mssg: "Hi"})
})