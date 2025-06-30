import express from "express"
import cors from "cors"
import { ENV } from "./config/env.js"
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from "./config/db.js"

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())



const startServer = async () => {
    try {
        await connectDB();
        if (ENV.NODE_ENV !== "production") {
            app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
        }
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
}

startServer();

export default app