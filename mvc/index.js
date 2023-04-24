const mongoose=require("mongoose");
const app=mongoose.connect("mongodb://127.0.0.1:27017/studentMVC");

const express=require("express");
const app1=express();

app.set("templating","ejs");
app.set("./views");

app.listen(5000,function(){
    console.log("port number 5000");
});

