const mongoose=require("mongoose");

const ToppingSchema=new mongoose.Schema({
      id:{
        type:Number,
        required:true,
        unique:true
      },
      tname:{
        type:String,
        required:true,
        unique:true
      },
      price:{
        type:Number,
        required:true,
        unique:true
      },
      image:{
        type:String,
      }
     
},
{
timestamps:true
});

module.exports=mongoose.model("Topping",ToppingSchema);