const express = require('express');
const router = express.Router();
const bookController = require("../controllers/book.controller");


router.get('/', bookController.findAllBooks);
router.post('/create', bookController.createBook);
router.get('/book/:id', bookController.findBookById);
router.put('/book/:id', bookController.updateBook);
router.delete('/book/:id', bookController.deleteBook);

module.exports = router;