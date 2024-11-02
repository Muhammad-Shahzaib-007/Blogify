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
// createdBy:{
//     type:
// }
})
const Blog = mongoose.model('blog',BlogSchema);
module.exports = User;
