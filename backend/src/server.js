import express from "express"
import cors from "cors"
import "dotenv/config"
import { clerkMiddleware } from '@clerk/express'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.use('/api/users',userRoutes)
app.listen(3000, () => {
    console.log("Server running on port 3000")
})