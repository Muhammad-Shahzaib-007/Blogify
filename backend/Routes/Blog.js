const Blog = require('../Models/Blogs')
const express = require('express')
const router = express.Router()
router.post('/update',async(req,res)=>{
const recievedBlog = req.body;
const blog = await Blog.create({
    title:blog.title,
    description:blog.description,
    // createdBy:req.user,
    
})
})

module.exports = router;