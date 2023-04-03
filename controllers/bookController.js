const Book = require("../models/book");
const  Author  = require("../models/author")
// const { Author, Book } = require("../models/model")


const bookController = {
    // Add book
    addBook: async(req, res) => {
       try {
        const newBook = new Book(req.body);
        const saveBook = await newBook.save();
        if(req.body.author) {
          const author = Author.findById(req.body.author)
          await author.updateOne({$push: {book: saveBook._id}})
        }
        res.status(200).json(saveBook)
       } catch (error) {
         res.status(500).json(error);
       }
    },

    // Get all book
    getBook: async(req, res) => {
      try {
        const books = await Book.find().populate("author");
        res.status(200).json(books);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Get book by id
    getBookById: async(req, res) => {
      try {
        const book = await Book.findById(req.params.id).populate("author");
        res.status(200).json(book);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Delete book
    deleteBook: async(req, res) => {
      try {
        await Book.findByIdAndDelete(req.params.id)
        await Author.updateMany({book: req.params.id}, {$push: {book: req.params.id}})
        res.status(200).json("Delete success !");
      } catch (error) {
        res.status(200).json(error)
      }
    },
    // Update book
    updateBook: async(req, res) => {
      try {
        const book = await Book.findById(req.params.id);
        await book.updateOne({$set: req.body});
        res.status(200).json("Update success !")
      } catch (error) {
        res.status(200).json(error)
      }
    }
}

module.exports = bookController;