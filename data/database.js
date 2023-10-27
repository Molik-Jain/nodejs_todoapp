import mongoose from "mongoose";
import {config} from "dotenv";


config({
    path:"./data/config.env",
});
//database connection
export const connectDB = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbname:"backendapi",
    })
    .then(()=>console.log("Database Connected"))
    .catch((e)=>console.log(e));
};