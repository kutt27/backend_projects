const express = require('express');
const router = express.Router();
const {
    getContact,
    createContact,
    getContacts,
    updateContacts,
    deleteContacts,
} = require('../controllers/contactController.js');

// make it simple for routing without an id
router.route('/').get(getContact).post(createContact);

// simplification using routes with id parameters
router.route('/:id').get(getContacts).put(updateContacts).delete(deleteContacts);

module.exports = router;