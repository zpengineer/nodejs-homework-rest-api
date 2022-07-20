const {Contact} = require('../../models');

const updateFavorite = async (id, body) => {
  try {
    const data = await Contact.findByIdAndUpdate(id, body, {new: true});

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateFavorite;
