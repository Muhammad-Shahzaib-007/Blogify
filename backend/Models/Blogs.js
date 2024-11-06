const mongoose = require('mongoose')
const BlogSchema = mongoose.Schema({
    title:{
type:String,
required:true,
    },
    description:{
type:String,
required:true,
    },
    imageURL:{
        type:String,
    },
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user',
    }
})
const Blog = mongoose.model('blog',BlogSchema);
module.exports = Blog;
