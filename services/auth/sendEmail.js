const nodemailer = require('nodemailer');

const {EMAIL_PASS} = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'cashberyinvest@gmail.com',
    pass: EMAIL_PASS,
  },
});

const sendEmail = async (email, verificationToken) => {
  console.log(email, verificationToken);

  await transporter
      .sendMail({
        from: 'cashberyinvest@gmail.com',
        to: email,
        subject: 'Verification email',
        html: `<a target="_blank" href="http://localhost:8888/api/users/verify/${verificationToken}">Verify your Email.</a>`,
      })
      .then(()=> console.log('Email send success'))
      .catch((error) => console.log(error.message));
};

module.exports = sendEmail;
