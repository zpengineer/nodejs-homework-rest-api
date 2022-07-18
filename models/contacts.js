const fs = require('fs/promises');

const contactsPath = require('./filePath');

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  const parseData = JSON.parse(contacts);

  return parseData;
};

module.exports = listContacts;
