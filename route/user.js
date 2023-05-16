const express = require("express");
const route = express.Router();


route.post("/user",(req,res)=>{

    const{username,password} = req.body;
    res.render("about.ejs",{username})

})

module.exports=route;

