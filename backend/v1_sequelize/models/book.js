const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Adjust the import path to point to your sequelize.js or database.js
const Category = require('./category'); // Import the Category model if needed

class Book extends Model {}

Book.init({
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category, // Reference to the Category model
      key: 'id', // Key in the Category model that Book refers to
    }
  }
}, {
  sequelize, // Pass the sequelize instance
  modelName: 'Book', // Model name
  tableName: 'Books', // Table name
  timestamps: false // Assuming you don't want Sequelize to automatically manage createdAt and updatedAt
});
// Assuming this code is added at the end of book.js or in a separate association setup file

// Set up the association
Category.hasMany(Book, { foreignKey: 'categoryId' });
Book.belongsTo(Category, { foreignKey: 'categoryId' });

// This sets up the necessary foreign key relationship in the Book table pointing to the Category table

module.exports = Book;
