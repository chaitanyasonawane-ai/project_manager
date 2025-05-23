// db connect

import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("monogdb connected")
        
    } catch (error) {
        console.error("mongodb connection failed", error)

        // exit code 
        process.exit(1)
    }
}


export default connectDB