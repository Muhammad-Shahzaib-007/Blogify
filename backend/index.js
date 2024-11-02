const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const port = 3000

const userRoute = require('./Routes/User')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs');
app.set('views',path.resolve('views'))

mongoose.connect('mongodb://localhost:27017/BlogifyG').then(()=>{
    console.log('Mongo DB connected')
})
app.get('/',(req,res)=>{
    res.render('home')
})
app.use('/users',userRoute)
app.listen(port,()=>{
    console.log(`Server started ${port}`)
})
