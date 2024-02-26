const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Adjust the import path as necessary

class Category extends Model {}

Category.init({
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // Pass the sequelize instance
  modelName: 'Category', // Model name
  tableName: 'Categories', // Table name
  timestamps: false // Assuming you don't want Sequelize to automatically manage createdAt and updatedAt
});

module.exports = Category;
