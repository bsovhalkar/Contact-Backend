const express = require("express");
const {getContact, postContact ,getContactByID, putContactByID, delContactByID} = require("../controllers/contactController");

const router = express.Router();

router.route('/').get(getContact);

router.route('/').post(postContact);

router.route('/:id').get(getContactByID);

router.route('/:id').put(putContactByID);

router.route('/:id').delete(delContactByID);

module.exports = router;