import { config } from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./data/database.config.js";



connectDB();

config({
    path:"./data/config.env "
}) 

const PORT=process.env.PORT;
console.log(PORT);

app.listen(PORT,()=>{
    
    console.log(`server running at ${PORT} in ${process.env.NODE_ENV} Mode`);
})