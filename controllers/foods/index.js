import express from "express";
const router = express.Router();

router.get("/api/getalldelevery",(req,res)=>{
    try {
        res.status(200).json({msg:"getall users food delevery"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})
export default router