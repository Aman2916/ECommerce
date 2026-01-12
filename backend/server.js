const express=require('express')
const cors=require("cors")
const mongoose=require("mongoose")

const Pizza=require("./model/schema.js")
const Topping=require("./model/toppings.js")

const app=express();


app.use(cors());
app.use(express.json());


mongoose.connect(
    "mongodb://localhost:27017/pizzaDB"
).then(()=>
    console.log("Mongo DB connected")
).catch((err)=>
    console.error("Error connecting DB")
)


app.get("/",(req,res)=>{
    res.send("Response from server");
})


app.get("/api/pizzas",async(req,res)=>{
   const pizza=await Pizza.find();
   res.json(pizza);
})

app.get("/api/pizzas/toppings",async(req,res)=>{
    const topping=await Topping.find();
    res.json(topping);
})

app.listen(3000,()=>{
    console.log("Server works on port 3000")
});
