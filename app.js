const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const user = require("./route/user")
const about = require("./route/about")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,"./public")))

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/login.html"))
})
app.get("/sehrim",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/sehrim.html"))
})

app.use("/api",user)
app.use("/",about)

app.listen(3000,()=>{
    console.log("server on 3000 port")
})
