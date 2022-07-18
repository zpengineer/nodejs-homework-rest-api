const listContacts = require('../../models/contacts');

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();

    const result = contacts.find((contact) => contact.id === id);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getContactById;
