const Book = require('../models/book'); // Adjust the path as necessary

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  addBook: async (req, res) => {
    console.log("add book called"+req.body+"  "+req.body.title);
    try {
      const book = await Book.create(req.body);
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  updateBook: async (req, res) => {
    try {
      await Book.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).send("Book updated successfully.");
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  deleteBook: async (req, res) => {
    try {
      await Book.destroy({
        where: { id: req.params.id },
      });
      res.status(200).send("Book deleted successfully.");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = bookController;
