const {generateToken}=require('../Middleware/auth')
const {createHmac,randomBytes} = require('crypto');
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name:{
type:String,
required:true,
    },
    email:{
type:String,
required:true,
    },
    password:{
    type:String,
    required:true
    },
    salt:{
type:String,
required:false,
    }
})
UserSchema.pre('save',async function(next){
const user = this;
const salt = randomBytes(16).toString();
const hashedPassword =await  createHmac('sha256',salt).update(user.password).digest('hex')
this.password = hashedPassword;
this.salt = salt;
next();
})
UserSchema.static('matchPassword',async function(email,password){
    const user = await this.findOne({email});
    const hashed = user.password;
    const salt = user.salt;
    if(!user){return false}
    const hashedPassword =await  createHmac('sha256',salt).update(password).digest('hex');
    if(hashedPassword===hashed){
     const token =generateToken(user)
    return token;
    }
    return false;
})
const User = mongoose.model('user',UserSchema);
module.exports = User;