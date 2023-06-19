import mongoose from "mongoose";

export const connectDB =  () => {mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName : "backend"
}).then( () =>{
    console.log("db is connected")
}).catch(err => console.log(err))
}
