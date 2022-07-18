const express = require('express');

const router = new express.Router();

const contactSchema = require('../../schemas/contact');

const {contacts: ctrl} = require('../../controllers');

const ctrlWrapper = require('../../helpers/ctrlWrapper');

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', contactSchema, ctrlWrapper(ctrl.post));

router.delete('/:contactId', ctrlWrapper(ctrl.deleted));

router.put('/:contactId', contactSchema, ctrlWrapper(ctrl.update));

module.exports = router;
