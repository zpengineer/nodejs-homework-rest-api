const {User} = require('../../models');

const jwt = require('jsonwebtoken');

const {tryCatchWrapper} = require('../../middlewares');

const {SECRET} = process.env;

const login = tryCatchWrapper(async ({email, password}) => {
  const user = await User.findOne({email});

  if (!user || !user.validPassword(password)) {
    return null;
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET, {expiresIn: '1h'});

  await User.findByIdAndUpdate(user._id, {token});

  return {user, token};
});

module.exports = login;
