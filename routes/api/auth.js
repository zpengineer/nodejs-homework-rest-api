const express = require('express');

const router = new express.Router();

const {
  validation,
  ctrlWrapper,
  checkAuth,
  upload,
} = require('../../middlewares');

const {
  joiRegisterSchema,
  joiLoginSchema,
  joiResendEmailSchema,
} = require('../../models/user');

const {user: ctrl} = require('../../controllers');

router.post('/signup', validation(joiRegisterSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get('/logout', checkAuth, ctrlWrapper(ctrl.logout));

router.get('/current', checkAuth, ctrlWrapper(ctrl.current));

router.patch('/', checkAuth, ctrlWrapper(ctrl.patch));

router.patch(
    '/avatars',
    checkAuth,
    upload.single('avatar'),
    ctrlWrapper(ctrl.uploadAvatar),
);

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));

router.post(
    '/verify',
    validation(joiResendEmailSchema),
    ctrlWrapper(ctrl.resendEmail),
);

module.exports = router;
