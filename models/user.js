import mongoose from "mongoose"


const schema = mongoose.Schema({
    name : String,
    age : Number
})

export const user = mongoose.model("users", schema)
