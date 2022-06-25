var nodemailer = require('nodemailer');
 var  transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
       user:'manojkotini@gmail.com',
       pass :'*******7'
    }

 })
 var options ={
    from :'manojkotini@gmail.com',
    to : 'kotinibrothers@gmail.com',
    subject:'testing mail',
    text:'hello how are '
 }
  transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('mail sent sucessfully'+info.response)
    }
  })