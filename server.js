//install express- for backend server,
// mongoose to connect with mongodb
// jsonwebtoken for authontication
// cors for giving permission to fronend to connect with backend
// bcrypt for incrypt user data
// dotenv to use invironment variable
// body-parser to parse data coming form user
// nodemon it automaticaly restart the server when we save the code

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";

//app config
const app=express();
const port=process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//dbconnection
connectDB();

//api end point
app.use("/api/food",foodRouter)

app.use("/api/user",userRouter)

app.use("/api/cart",cartRouter)

// app.use("/api/order",orderRouter)