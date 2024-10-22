import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

const app = express()
const PORT = process.env.PORT || 4001

connectDB();
connectCloudinary();

app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send('API Working')
})


app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
})