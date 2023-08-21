const express = require("express");

const path = require("path");

const app = express(); 
app.use(express.static(path.join(__dirname,"../public")))
app.listen (3001, ()=>{
    console.log ("Server On");
})
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"));
})

app.get("/product", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/product.html"))
})
app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/register.html"))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"))
})