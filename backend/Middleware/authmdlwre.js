const {verifyToken}=require('./auth')
function checkAuth(req,res,next){
return (req,res,next)=>{
    console.log(req.path)
    if(req.path.includes('signin')||req.path.includes('signup')){
    return next();
    }
   const cookie = req.cookies['token']
   if(!cookie)return res.send('/signin')
const user = verifyToken(cookie)
if(user){
    req.user=user;
  return  next();
}
else return res.render('signin');
}
}
module.exports = {checkAuth}
