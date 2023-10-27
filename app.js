//libraires
import express from "express";
import {config} from "dotenv";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

//app creation
export const app =express();
config({
    path:"./data/config.env",
});


//Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

//Using Routes
app.use("/api/v1/users",userRouter); //On the 1st parameter we added "/users",that means in the route file all the address have the prefix as "/users".
app.use("/api/v1/task",taskRouter);


 
app.get("/",(req,res)=>{
    res.send("Nice Working!")

});

//using error middleware
app.use(errorMiddleware);




