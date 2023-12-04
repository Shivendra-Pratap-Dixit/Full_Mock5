const express=require("express")
// const bodyParser=require("body-parser");
const cors=require("cors");
const { connection } = require("./db");
const { router } = require("./Routes/userRoutes");
const app=express();
app.use(express.json())
app.use(cors())
app.use('/',router)
app.listen(8080,async()=>{
    try {
        await connection
        console.log(`Connected to DB at 8080`)
    } catch (error) {
       console.log(error) 
    }
})