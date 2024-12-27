import express from "express";
import cors from "cors";

const app=express();
app.use(cors());

app.get('/getData',(req,res)=>{
    res.send("HI I AM KAVIN B FROM CSE DEPARTMENT AND MY LIES IS MERN STACK DEVELOPER");
    
});
app.listen(3000,()=>
{
    console.log("kavin")
})