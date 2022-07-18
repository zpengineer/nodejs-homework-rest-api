const fs = require('fs/promises');

const listContacts = require('../../models/contacts');
const contactsPath = require('../../models/filePath');

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();

    const idx = contacts.findIndex((contact) => contact.id === id);

    if (idx === -1) {
      return null;
    }

    const removeContact = contacts.splice(idx, 1);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removeContact;
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeContact;
