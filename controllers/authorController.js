const  Author  = require("../models/author")
const  Book  = require("../models/book")

// const { Author, Book } = require("../models/model")

const authorController = {
    // Add author
    addAuthor: async(req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
        
    },

    // Get author 
    getAuthor: async(req, res) => {
        try {
            const authors = await Author.find().populate("book");
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get author by id
    getAuthorById: async(req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("book");
            res.status(200).json(author); 
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Delete author
    deleteAuthor: async (req, res) => {
        try {
            await Author.findByIdAndDelete(req.params.id)
            await Book.updateMany({author: req.params.id}, {$push: {author: req.params.id}})
            res.status(200).json("Delete successfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Update author
    updateAuthor: async (req, res) => {
        try {
            const book = await Author.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Update successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authorController;