import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
if(!ENV.MONGO_URI) throw new Error("MONGODB_URI is not defined in the file correctly by you");
  try {
    
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Connected to DB SUCCESSFULLY ✅");
  } catch (error) {
    console.log("Error connecting to MONGODB");
    process.exit(1);
  }
};