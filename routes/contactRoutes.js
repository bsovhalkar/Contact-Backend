const express = require("express");
const {getContact, createContact ,getContactByID, editContactByID, delContactByID} = require("../controllers/contactController");

const router = express.Router();

router.route('/').get(getContact);

router.route('/').post(createContact);

router.route('/:id').get(getContactByID);

router.route('/:id').put(editContactByID);

router.route('/:id').delete(delContactByID);

module.exports = router;