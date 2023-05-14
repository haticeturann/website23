const express = require("express");
const route = express.Router();


route.post("/user",(req,res)=>{

    const{username,password} = req.body;
    res.render("about.ejs",{username})

})
route.get("/goster",(req,res)=>{

const data={
         
isim:"hatice",password:"123"
}
res.send(data);
})

module.exports=route;

