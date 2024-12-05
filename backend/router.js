//imports modules
const express = require("express")

//defines router
const router = express.Router()

router.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

//establishes routes
router.get("/", (req, res) => {
    res.json({msg: "Response 200"})
})

//makes router accessible outside file
module.exports = router