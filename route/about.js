const express = require("express");
const route = express.Router();
const path = require("path")

route.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/about.html"))
})

module.exports=route;