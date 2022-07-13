const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact
} = require('../models/contacts');


const getAll = async (req, res, next) => {
        const result = await listContacts();

        res.json({
            status: "success",
            code: 200,
            data: result
        });
}

const getById = async (req, res, next) => {
        const { contactId } = req.params;

        const result = await getContactById(contactId);

        if (!result) {
            return res.status(404).json({
                message: `Not found contact with id: '${contactId}'`
            })
        }

        res.json({
            status: "success",
            code: 200,
            data: result
        });
};

const postContact = async (req, res, next) => {
        const result = await addContact(req.body);

        res.status(201).json({
            data: result
        });
}

const deleteContact = async (req, res, next) => {
        const { contactId } = req.params;

        const result = await removeContact(contactId);

        if (!result) {
            return res.status(404).json({
                message: `Not found contact with id: '${contactId}'`
            })
        }

        res.status(200).json({
            message: "Contact deleted"
        });
}

const putContact = async (req, res, next) => {
        const { contactId } = req.params;

        const result = await updateContact(contactId, req.body);

        if (!result) {
            return res.status(404).json({
                message: `Not found contact with id: '${contactId}'`
            })
        }

        res.status(200).json({
            data: result
        });
}

module.exports = {
    getAll,
    getById,
    postContact,
    deleteContact,
    putContact
}