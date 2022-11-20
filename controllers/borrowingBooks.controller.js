const borrowingBookService = require("../services/borrowingBooks.service");

const createBorrowingBook = async (req, res) => {
    try {
        const BorrowingBook = await borrowingBookService.createBorrowingBook(req);
        return res.status(201).json({
            status: 201
            , data: BorrowingBook
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const findAllBorrowingBooks = async (req, res) => {
    try {
        const borrowingBooks = await borrowingBookService.findAllBorrowingBooks();
        return res.status(200).json({
            status: 200
            , data: borrowingBooks
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const findBorrowingBookById = async (req, res) => {
    try {
        const borrowingBook = await borrowingBookService.findBorrowingBookById(req, res);
        if (BorrowingBook.length === 0) {
            return res.status(404).json({
                status: 404
                , message: `BorrowingBook not found.`
            });
        }
        return res.status(200).json({
            status: 200
            , data: borrowingBook
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const updateBorrowingBook = async (req, res) => {
    try {
        const borrowingBook = await borrowingBookService.updateBorrowingBook(req);
        return res.status(201).json({
            status: 201
            , data: borrowingBook
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const deleteBorrowingBook = async (req, res) => {
    try {
        await borrowingBookService.deleteBorrowingBook(req);
        return res.status(204).json({});
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

module.exports = {
    createBorrowingBook
    , findAllBorrowingBooks
    , findBorrowingBookById
    , updateBorrowingBook
    , deleteBorrowingBook
}
