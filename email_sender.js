var nodemailer = require('nodemailer');var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aaaa.bbb@gmail.com',
    pass: 'aaaa bbbb cccc'
  }
});

var mailOptions = {
  from: 'riadh.khtr91@gmail.com',
  to: 'maheralessandro@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});