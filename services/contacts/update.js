const fs = require('fs/promises');

const listContacts = require('../../models/contacts');
const contactsPath = require('../../models/filePath');

const updateContact = async (id, body) => {
  try {
    const contacts = await listContacts();

    const idx = contacts.findIndex((contact) => contact.id === id);

    if (idx === -1) {
      return null;
    }

    contacts[idx] = {id, ...body};

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts[idx];
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateContact;
