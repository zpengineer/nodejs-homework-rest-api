const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const patch = require('./patch');
const uploadAvatar = require('./uploadAvatar');
const verifyEmail = require('./verifyEmail');
const resendEmail = require('./resendEmail');

module.exports = {
  signup,
  login,
  logout,
  current,
  patch,
  uploadAvatar,
  verifyEmail,
  resendEmail,
};
