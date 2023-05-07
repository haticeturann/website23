const express = require("express");
const route = express.Router();





module.exports=route;

route.post("/user",(req,res)=>{

const{username,password} = req.body;

const isim ="hatice";
const sifre="123";
if(username===isim&&sifre===password)
{
 res.send("Hoşgeldiniz :" + username )
}
else{
res.send("Bilgilerinizi Kontrol Ediniz")
 }

    
})
route.get("/goster",(req,res)=>{

const data={
         
isim:"hatice",password:"123"
}
res.send(data);
})

module.exports=route;

