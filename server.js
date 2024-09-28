const express = require('express')
const Port = 3000;

const app = express()

app.get("/",(req,res)=>{
    res.send("<p>Hello Server</p>")
})
app.get("/about",(req,res)=>{
    res.send("<p>Hello About</p>")
})
app.get("/contact",(req,res)=>{
    res.send("<p>Hello Contact</p>")
})
app.get("/View",(req,res)=>{
    res.send("<p>This is your View Pages</p>")
})


app.listen(Port,()=>console.log
(`server is running on port ${Port}`))