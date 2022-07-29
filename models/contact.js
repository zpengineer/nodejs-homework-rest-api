const {Schema, model} = require('mongoose');
const Joi = require('joi');

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
  name: Joi.string()
      .min(3)
      .max(30)
      .required(),
  email: Joi.string()
      .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
      .required(),
  phone: Joi.string()
      .min(6)
      .max(10)
      .required(),
  favorite: Joi.boolean(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
};
