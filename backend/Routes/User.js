const {sendM}=require('../Controllers/nodemailer')
const express = require('express')
const {verifyToken,generateToken}=require('../Middleware/auth')
const router = express.Router();
const User = require('../Models/User');
router.get('/signin',(req,res)=>{
res.render('signin')
})
router.get('/signup',(req,res)=>{
res.render('signup')
})
router.get('/updatePass',(req,res)=>{
    res.render('signup')
    })
router.post('/signup',async(req,res)=>{
const {name,email,password} = req.body;
const user= await User.findOne({email})
if(user){throw new Error("already signed up with this email")}
console.log(req.body)
try {
    const user = await User.create({
        name,
        email,
        password,
    })
    
 if(user){
    const emailOpts ={
        from:"mshizzi141@gmail.com",
        to:user.email,
        subject:"Login Success",
text:`Congratualation ${user.name} you have successfully signed up in this site`
    }
    sendM(emailOpts)
return res.status(200).redirect('/users/signin')}
} catch (error) {
    res.send( error)
}
})
router.post('/signin',async(req,res)=>{
    const {email,password} = req.body;
if(!email  || !password){
    return res.send("Input all fields")
}
try {
    const token = await User.matchPassword(email,password)
    if(token){   
      const user = verifyToken(token)
        return res.cookie('token',token).redirect('/')
  }
 else  return  res.render('signin')
}catch (error) {
    return res.json(error.message)
 }
})
// router.post('/updatePass',())
module.exports = router;