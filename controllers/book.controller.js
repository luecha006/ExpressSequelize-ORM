const bookService = require("../services/book.service");

const createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req);
        return res.status(201).json({
            status: 201
            , data: book
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const findAllBooks = async (req, res) => {
    try {
        const books = await bookService.findAllBooks();
        return res.status(200).json({
            status: 200
            , data: books
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const findBookById = async (req, res) => {
    try {
        const book = await bookService.findBookById(req, res);
        if (book.length === 0) {
            return res.status(404).json({
                status: 404
                , message: `Book not found.`
            });
        }
        return res.status(200).json({
            status: 200
            , data: book
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req);
        return res.status(201).json({
            status: 201
            , data: book
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const deleteBook = async (req, res) => {
    try {
        await bookService.deleteBook(req);
        return res.status(204).json({});
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

module.exports = {
    createBook
    , findAllBooks
    , findBookById
    , updateBook
    , deleteBook
}
