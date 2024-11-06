const {verifyToken}=require('./auth')
function checkAuth(req,res,next){
return (req,res,next)=>{
    if(req.path.includes('signin')||req.path.includes('signup')){
    return next();
    }
   const cookie = req.cookies['token']
   if(!cookie){return res.redirect('/users/signin')}
let user = verifyToken(cookie)
   user=JSON.stringify(user.payload);
if(user){
  req.user=user;
  req.user = JSON.parse(req.user);
  return next();
}
else return res.render('signin');
}
}
module.exports = {checkAuth}
