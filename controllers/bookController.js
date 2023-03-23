const Book = require("../models/book");

const bookController = {
    // Add product
    addBook: async(req, res) => {
       try {
        const newProduct = new Book(req.body);
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
       } catch (error) {
         res.status(500).json(error);
       }
    },

    // Get all product
    getBook: async(req, res) => {
      try {
        const products = await Book.find()
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Get product by id
    getBookById: async(req, res) => {
      try {
        const product = await Book.findById(req.params.id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Delete product
    deleteBook: async(req, res) => {
      try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json("Delete success !");
      } catch (error) {
        res.status(200).json(error)
      }
    },
    // Update product
    updateBook: async(req, res) => {
      try {
        const product = await Book.findById(req.params.id);
        await product.updateOne({$set: req.body});
        res.status(200).json("Update success !")
      } catch (error) {
        res.status(200).json(error)
      }
    }
}

module.exports = bookController;