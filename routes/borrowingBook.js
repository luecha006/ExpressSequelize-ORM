const express = require('express');
const router = express.Router();
const borrowingBookController = require("../controllers/borrowingBooks.controller");


router.get('/', borrowingBookController.findAllBorrowingBooks);
router.post('/create', borrowingBookController.createBorrowingBook);
router.get('/borrowingBook/:id', borrowingBookController.findBorrowingBookById);
router.put('/borrowingBook/:id', borrowingBookController.updateBorrowingBook);
router.delete('/borrowingBook/:id', borrowingBookController.deleteBorrowingBook);

module.exports = router;