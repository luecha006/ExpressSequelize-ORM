const models = require("../models/index");

const Book = models.Book;

const createBook = async (req) => {
    const data = {
        ...req.body
        , createdAt: new Date()
        , updatedAt: new Date()
    };
    return await Book.create(data);
}

const findAllBooks = async () => {
    return await Book.findAll();
}

const findBookById = async (req) => {
    const bookId = req.params.id;
    return await Book.findAll({
        where: {
            id: bookId
        }
    });
}

const updateBook = async (req) => {
    const bookId = req.params.id;
    const data = {
        ...req.body
        , updatedAt: new Date()
    };
    await Book.update(data, {
        where: {
            id: bookId
        }
    });
    return await Book.findAll({
        where: {
            id: bookId
        }
    });
}

const deleteBook = async (req) => {
    const bookId = req.params.id;
    return await Book.destroy({
        where: {
            id: bookId
        }
    });
}

module.exports = {
    createBook
    , findAllBooks
    , findBookById
    , updateBook
    , deleteBook
}