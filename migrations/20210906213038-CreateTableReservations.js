'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('reservations',{
      id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'restaurants',
          key: 'id'
        }
      },
      restaurantName: Sequelize.STRING,
      name: Sequelize.STRING,
      lastName: Sequelize.STRING,
      amountPeople: Sequelize.INTEGER,
      table: Sequelize.INTEGER,
      date: Sequelize.DATE,
      hour: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('reservations');
  }
};
