const nodemailer  = require('nodemailer')
const transport = nodemailer.createTransport({
    service:'gmail',
    secure:true,
    port:656,
    auth:{
        user:"mshizzi141@gmail.com",
        pass:"cwhv qszb fcds bzmk",
    },
})
function sendMail(req,res){
    const {to,subject,text} = req.body;
  const mailOptions={
        from:"mshizzi141@gmail.com",
        to:to,
        subject:subject,
        text:text,
    }
    transport.sendMail(mailOptions,(error,success)=>{
        if(error){
        return    res.send(error.message)
        }
return res.send(success.message)
    })
}
module.exports = {sendMail}
