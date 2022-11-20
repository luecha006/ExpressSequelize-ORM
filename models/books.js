'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        static associate(models) {
        }
    }
    Book.init({
        book_name: DataTypes.STRING,
        author_name: DataTypes.STRING,
        category: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Book',
        tableName: 'Books'
    });
    return Book;
};