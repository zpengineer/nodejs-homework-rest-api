const express = require('express');

const router = new express.Router();

const contactSchema = require('../../schemas/contact');

const {
  getAll,
  getById,
  postContact,
  deleteContact,
  putContact,
} = require('../../controllers/contacts');

const ctrlWrapper = require('../../helpers/ctrlWrapper');

router.get('/', ctrlWrapper(getAll));

router.get('/:contactId', ctrlWrapper(getById));

router.post('/', contactSchema, ctrlWrapper(postContact));

router.delete('/:contactId', ctrlWrapper(deleteContact));

router.put('/:contactId', contactSchema, ctrlWrapper(putContact));

module.exports = router;
