require('dotenv').config();
const Blog = require('./Models/Blogs')
const cors = require('cors')
const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const path = require('path')
const { checkAuth } = require('./Middleware/authmdlwre');
const userRoute = require('./Routes/User');
const BlogRoute = require('./Routes/Blog')
const port =process.env.PORt || 4000
app.use(cors({origin:"http://localhost:3000"}))
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(checkAuth())
// app.use(checkAuth())
app.set('view engine','ejs');
app.set('views',path.resolve('views'))

mongoose.connect('mongodb://localhost:27017/BlogifyG').then(()=>{
    console.log('Mongo DB connected')
})
app.use('/users',userRoute)
app.use('/blogs',BlogRoute)
app.get('/',async(req,res)=>{
  console.log(req.user)
  const blogs =await Blog.find({})
    res.render('home',{
        user:req.user,
        blogs:blogs
    });
})
app.get('/blogs/add',(req,res)=>{
    res.render('addBlog',{
        user:req.user,
    })
})
app.listen(port,()=>{
    console.log(`Server started ${port}`)
})
