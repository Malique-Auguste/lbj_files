//imports mongoose package
const mongoose = require("mongoose")

//defines a person object as having a unique id, name, and notes
const PersonSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
}, {timestamps: true})

//makes PersonSchema accessible outside of this file
module.exports = mongoose.model("Person", PersonSchema)