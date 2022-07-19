const {Contact} = require('../../models');

const removeContact = async (id) => {
  try {
    const data = await Contact.findByIdAndRemove(id);

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeContact;
