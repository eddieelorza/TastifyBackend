const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('restaurants', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    postCode: DataTypes.INTEGER,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    numTel: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});