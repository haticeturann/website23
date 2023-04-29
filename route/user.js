const express = require("express");
const route = express.Router();

route.post("/user",(req,res)=>{
    const{username,password} = req.body;

    res.send("Hoşgeldiniz :" + username )
    
})

