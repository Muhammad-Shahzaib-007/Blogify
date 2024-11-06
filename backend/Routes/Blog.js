const Blog = require('../Models/Blogs')
const express = require('express')
const router = express.Router()
const upload = require('../Controllers/Upload/multer');
const cloudinary = require('../Controllers/Upload/cloudinary');
router.get('/',async(req,res)=>{
    
})
router.get('/add',(req,res)=>{
    res.render('addBlog')
})
router.post('/add',upload.single('image'),async(req,res)=>{
    const {title,description} = req.body;
    let imgURL;
    try {
     await   cloudinary.uploader.upload(req.file.path,function(err,result){
            if(err){
                console.log(err)
                return res.status(500).json(({message:"Error",err}))
            }
            imgURL=result.url;
        })
       
const blog = await Blog.create({
    title:title,
    description:description,
    createdBy:req.user._id,
    imageURL:imgURL,
    createdBy:req.user,    
})
return res.redirect('/');
    } catch (error) {
      return  res.json(error)
    }

})
module.exports = router;