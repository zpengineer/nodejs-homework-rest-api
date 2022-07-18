const {contacts: services} = require('../../services');

const postContact = async (req, res, next) => {
  const result = await services.add(req.body);

  res.status(201).json({
    data: result,
  });
};

module.exports = postContact;
