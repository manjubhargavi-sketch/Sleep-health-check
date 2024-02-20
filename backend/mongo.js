const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/sleep")
.then(()=>{
    console.log("mongodb connected");
}).catch(()=>{
    console.log("Connection failed");
})

const newschema=new mongoose.Schema({
   age:{
    type:Number,
    required:true
   },
   gender:{
    type:Number,
    required:true
   },
   weight:{
    type:String,
    required:true
   },
   height:{
    type:String,
    required:true
   },
   Diabetic:{
    type:Number,
    required:true
   },
   bloodPressure:{
    type:Number,
    required:true
   },
   cholesterol:{
    type:Number,
    required:true
   }
   

});
const Collection=mongoose.model("sleep",newschema);
module.exports=Collection