const gravatar = require('gravatar');
const {v4} = require('uuid');

const {User} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const signup = tryCatchWrapper(async ({username, email, password}) => {
  const user = await User.findOne({email});

  if (user) {
    return null;
  }

  const verificationToken = v4();

  const avatarURL = gravatar.url(email);
  const newUser = new User({username, email, avatarURL, verificationToken});
  newUser.setPassword(password);

  const savedUser = await newUser.save();

  return savedUser;
});

module.exports = signup;
