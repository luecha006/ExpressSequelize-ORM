'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BorrowingBook extends Model {
        static associate(models) {
        }
    }
    BorrowingBook.init({
        user_id: DataTypes.INTEGER,
        book_id: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        sDate_borrowing: DataTypes.DATE,
        eDate_borrowing: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'BorrowingBook',
        tableName: 'BorrowingBooks'
    });
    return BorrowingBook;
};