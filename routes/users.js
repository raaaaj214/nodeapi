import express, { Router } from "express";
import { user } from "../models/user.js";
import { getAllUser } from "../controllers/user.js";

const router = express.Router();


router.get("/all" , getAllUser)


router.get("/:id" , async (req,res) => {
    const {id} = req.params
    const userData = await user.findById(id);
    res.json( 
        {
            success : true,
            userData
        }
        );
    })
    


export default router;