const express = require('express')
require('dotenv').config();
// error handler
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const connectDB = require('./connetDB/connect');
 
const app = express();

app.use(express.json())

app.use('/', (req, res)=>{
    res.send('oya jumole ya jo looorrr baby wa joo lor')
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 3000

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`listening at port ${port}...`)
        })
    } catch (error) {
        console.log(err) 
    } 
} 

start();