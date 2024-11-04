const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const path = require('path')
const { checkAuth } = require('./Middleware/authmdlwre');

const userRoute = require('./Routes/User');

const port = 3000
app.use(cookieParser())
app.use(checkAuth())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(checkAuth())
app.set('view engine','ejs');
app.set('views',path.resolve('views'))

mongoose.connect('mongodb://localhost:27017/BlogifyG').then(()=>{
    console.log('Mongo DB connected')
})
app.use('/users',userRoute)
app.get('/',(req,res)=>{
    res.render('home');
})
app.listen(port,()=>{
    console.log(`Server started ${port}`)
})
