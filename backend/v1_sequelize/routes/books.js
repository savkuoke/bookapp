const express = require('express');
const bookController = require('../controllers/bookController'); // Adjust the path as necessary

const router = express.Router();

// Define routes and associate them with controller functions
router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
