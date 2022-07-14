const fs = require('fs/promises');
const path = require('path');
const {v4} = require('uuid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  const parseData = JSON.parse(contacts);

  return parseData;
};

const getContactById = async (id) => {
  const contacts = await listContacts();

  const result = contacts.find((contact) => contact.id === id);

  if (!result) {
    return null;
  }

  return result;
};

const removeContact = async (id) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((contact) => contact.id === id);

  if (idx === -1) {
    return null;
  }

  const removeContact = contacts.splice(idx, 1);

  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return removeContact;
};

const addContact = async (body) => {
  const contacts = await listContacts();

  const newContact = {id: v4(), ...body};

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((contact) => contact.id === id);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = {id, ...body};

  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
