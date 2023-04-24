const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/");

const port=8001;

const express=require("express");
const app=express();
app.get("/",function(req,res){
 res.send("This is my home page");
});

app.get("/about",function(req,res){
    res.send("welcome to about us");
});

app.get("/contactus",function(req,res){
    res.send("welcome to contact us");

});





app.listen(8001,function(){
// console.log("Application is running on 8000 port");
console.log("application is running on port no. $(port)"); //using variable
});

