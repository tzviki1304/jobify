import express from 'express'
const app = express()
import 'express-async-errors'
import dotenv from 'dotenv'
dotenv.config()
const port =  process.env.PORT || 5000

// db connection
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

app.get('/', (req, res) => {
    // throw new Error('error')
    res.send('Hello World!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Example app listening on port ${port}...!`))
    } catch (error) {
        console.log(error);
    }
}

start()