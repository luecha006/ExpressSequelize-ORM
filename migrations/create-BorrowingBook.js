'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('BorrowingBooks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: false,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            book_id: {
                type: Sequelize.INTEGER
            },
            sDate_borrowing: {
                type: Sequelize.DATE
            },
            eDate_borrowing: {
                type: Sequelize.DATE
            },
            amount: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('BorrowingBooks');
    }
};