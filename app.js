import express from "express"
import adminRouter from "./controllers/admins/index.js";
import foodRouter from "./controllers/foods/index.js";
import termRouter from "./controllers/terms/index.js";
import userRouter from "./controllers/users/index.js";

const app = express();

const PORT = 4500;

app.get("/server",(req,res)=>{
    try {
        res.status(200).send("Hello samid")
    } catch (error) {
        console.log(error);
    }
})

app.use("/users",userRouter);
app.use("/admins",adminRouter);
app.use("/foods",foodRouter);
app.use("/terms",termRouter);
app.use("/users",userRouter);

app.listen(PORT,()=>{
console.log(`Yor server is running ${PORT}`);
})