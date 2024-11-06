const nodemailer = require('nodemailer')
const transport = nodemailer.createTransport({
    service:'gmail',
    secure:true,
    port:465,
    auth:{
        user:"mshizzi141@gmail.com",
        pass:"enaw aeec wuvm kndl",
    }
})
const sendM = (emailOpts,res)=>{
transport.sendMail(emailOpts,(err,success)=>{
if(err){return res.json({err})}
return res.status(200).json({success})
})
}
module.exports = {sendM}
// pass:"cwhv qszb fcds bzmk"
