const {contacts: services} = require('../../services');

const putContact = async (req, res, next) => {
  const {contactId} = req.params;

  const result = await services.update(contactId, req.body);

  if (!result) {
    return res.status(404).json({
      message: `Not found contact with id: '${contactId}'`,
    });
  }

  res.status(200).json({
    data: result,
  });
};

module.exports = putContact;
