const listContacts = require('../../models/contacts');

const getAll = async () => {
  try {
    const data = await listContacts();
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAll;
