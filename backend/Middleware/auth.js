const jwt = require('jsonwebtoken')
const secret = "$Smart"
const generateToken=(payload)=>{
return jwt.sign({payload},secret)
}
const verifyToken=(token)=>{
    try {
        if(!token){return res.redirect('/user/signin')}
        const user = jwt.verify(token,secret)
        return user;
    } catch (error) {
      console.log(error)
        return false;
    }
    }
module.exports = {generateToken,verifyToken}