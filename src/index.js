import express from "express";
import { authMiddleWare } from "../middleware/auth.middleware.js";



const PORT = 8000;
const app = express();

app.use(authMiddleWare);


app.get("/",(req,res)=>{
    res.send("Hello World!!");
})
app.listen(PORT,()=>{
    console.log(`app is listening to port : ${PORT}`);
});
