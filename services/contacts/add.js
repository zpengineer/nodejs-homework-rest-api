const fs = require('fs/promises');
const {v4} = require('uuid');

const listContacts = require('../../models/contacts');
const contactsPath = require('../../models/filePath');

const addContact = async (body) => {
  try {
    const contacts = await listContacts();

    const newContact = {id: v4(), ...body};

    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

module.exports = addContact;
