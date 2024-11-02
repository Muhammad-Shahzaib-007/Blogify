const express = require('express')
const router = express.Router();
const User = require('../Models/User')
router.get('/signin',(req,res)=>{
res.render('signin')
})
router.get('/signup',(req,res)=>{
res.render('signup')
})
router.post('/signup',async(req,res)=>{
const {name,email,password} = req.body;
if(!email || !name ||!password){
    return res.status(204).send({error:"Input all fields"})
}
try {
    const user = await User.create({
        name,
        email,
        password,
    })
    if(user)res.status(200).send('Success');
} catch (error) {
    res.send(error, "error occurred")
}
})
router.post('/signin',async(req,res)=>{
    const {email,password} = req.body;
if(!email  ||!password){
    return res.status(204).send({error:"Input all fields"})
}
try {
    const user = await User.findOne({
        email
    })
    if(user)
        {
            if(user.password===password)
            res.status(200).send('Success');
        }else{res.send({error:"invalid credentils"})}
} catch (error) {
    res.send({error: "error occurred"})
}
})
module.exports = router;