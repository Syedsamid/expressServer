import express from "express";
const router = express.Router();

router.get("/getallterms",(req,res)=>{
    try {
        res.status(200).json({msg:"getall users your terms and conditions"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})
export default router