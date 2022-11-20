const models = require("../models/index");

const borrowingBook = models.BorrowingBook;

const createBorrowingBook = async (req) => {
    const data = {
        ...req.body
        , sDate_borrowing: new Date()
        , eDate_borrowing: new Date()
        , createdAt: new Date()
        , updatedAt: new Date()
    };
    console.log(data);
    return await borrowingBook.create(data);
}

const findAllBorrowingBooks = async () => {
    return await borrowingBook.findAll();
}

const findBorrowingBookById = async (req) => {
    const borrowingBookId = req.params.id;
    return await borrowingBook.findAll({
        where: {
            id: borrowingBookId
        }
    });
}

const updateBorrowingBook = async (req) => {
    const borrowingBookId = req.params.id;
    const data = {
        ...req.body
        , updatedAt: new Date()
    };
    console.log(data);

    await borrowingBook.update(data, {
        where: {
            id: borrowingBookId
        }
    });
    return await borrowingBook.findAll({
        where: {
            id: borrowingBookId
        }
    });
}

const deleteBorrowingBook = async (req) => {
    const borrowingBookId = req.params.id;
    return await borrowingBook.destroy({
        where: {
            id: borrowingBookId
        }
    });
}

module.exports = {
    createBorrowingBook
    , findAllBorrowingBooks
    , findBorrowingBookById
    , updateBorrowingBook
    , deleteBorrowingBook
}