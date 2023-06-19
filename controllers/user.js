import { user } from "../models/user.js"

export const getAllUser = async (req,res) =>{

    const users = await user.find({})
    res.json({
        success: true,
       users,
    })
}