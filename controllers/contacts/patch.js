const {contacts: services} = require('../../services');

const updateFavorite = async (req, res, next) => {
  const {contactId} = req.params;
  const {favorite} = req.body;

  const result = await services.updateFavorite(contactId, {favorite});

  if (!result) {
    return res.status(400).json({
      message: 'Missing field favorite',
    });
  }

  res.status(200).json({
    data: result,
  });
};

module.exports = updateFavorite;
