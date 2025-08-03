const asyncHandler = require("express-async-handler");

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

const createContact = asyncHandler(async (req, res) => {
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("All fields (name, phone, email) are mandatory");
    }

    console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    res.status(201).json({ message: "Contact created successfully" });
});

const getContactByID = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact with ID ${req.params.id}` });
});

const editContactByID = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Edit contact with ID ${req.params.id}` });
});

const delContactByID = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact with ID ${req.params.id}` });
});

module.exports = {
    getContact,
    createContact,
    getContactByID,
    editContactByID,
    delContactByID
};
