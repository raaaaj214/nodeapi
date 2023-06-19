import {connectDB}from "./data/database.js";
import { app } from "./app.js";
import  dotenv, { config } from "dotenv"

dotenv.config({
    path : "./data/config.env"
})

connectDB();

app.listen(process.env.PORT , () =>{
    console.log("server is working")
});

