const {User} = require('../../models');

const {sendEmail} = require('../../helpers');

const resendEmail = async (req, res) => {
  const {email} = req.body;
  const {verify, verificationToken} = await User.findOne({email});

  if (verify) {
    return res.status(400).json({
      message: 'Verification has already been passed',
    });
  }

  await sendEmail(email, verificationToken);

  res.status(200).json({
    message: 'Verification email sent',
  });
};

module.exports = resendEmail;
