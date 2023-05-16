const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const user = require("./route/user")
const api = require("./route/api")

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,"./public")))


app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/login.html"))
})
app.get("/sehrim",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/sehrim.html"))
})
app.get("/mirasimiz",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/mirasimiz.html"))
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/about.html"))
})
app.get("/ilgi_alanlarim",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/ilgi_alani.html"))
})
app.get("/iletisim",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/iletisim.html"))
})


app.use("/",user)
app.use("/",api)


app.listen(process.env.PORT|| 3000,()=>{
    console.log("server on 3000 port")
})
