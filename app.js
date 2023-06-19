import express from "express";
import {user} from "./models/user.js";
import router from "./routes/users.js";



export const app = express();


// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use("/users",router);

app.get("/" , (req,res) =>{
    res.send("First")
})



app.get("/upload" , (req,res) =>{
    res.render("upload.ejs");
}) 
app.post("/upload" , async(req,res) =>{
    console.log(req.body) 
    const {name,age} = req.body;
    await user.create({name,age});  
    res.redirect("/upload");
})
