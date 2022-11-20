'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        static associate(models) {
        }
    }
    Admin.init({
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        type: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Admin',
        tableName: 'Admins'
    });
    return Admin;
};