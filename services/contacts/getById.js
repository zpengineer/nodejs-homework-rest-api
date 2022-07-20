const {Contact} = require('../../models');

const getContactById = async (id) => {
  try {
    const data = await Contact.findById(id);

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getContactById;
