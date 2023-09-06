const express  = require("express"); 
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();





const MONGODB_CONNECT_URI  = process.env.MONGODB_CONNECT_URI
const PORT  = process.env.PORT




app.use(express.json());
app.use(cors({
    origin:["https://vercel-deploy-1-pi.vercel.app"],
    methods : ["POST","GET"],
    credentials: true

}));




try{

    mongoose.connect(MONGODB_CONNECT_URI);

}catch(err){

    if(err){
        console.log("mongoose connection error");
    }

}


const userSchema = mongoose.Schema({
    name : String 
})

const User = mongoose.model("db1",userSchema);




app.get("/", async (req,res)=>{
    
     try{
        const data = await User.find();
        res.json(data);
     }catch(err){
        if(err){
            console.log("data failed")
        }
     }
   
})



app.listen(PORT,(err)=>{

    if(err){
        console.log("app started error");
    }else{
        console.log("app started")
    }

})