const mongoose=require("mongoose");
const studSchema=mongoose.Schema({
name: String,
email:String,
mob:Number,
course: String,
section:String,
active:boolean
});

const studExport=mongoose.model("Student Details", studSchema);

module.exports=studExport;

