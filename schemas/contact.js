const Joi = require('joi');

const contactSchema = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        phone: Joi.string()
            .min(6)
            .max(10)
            .required(),
    });

    const {error} = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "missing required name field"
        });
    }

    next();
}

module.exports = contactSchema;