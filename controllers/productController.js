const Product = require("../models/product");


const productController = {
    // Add product
    addProduct: async(req, res) => {
       try {
        const newProduct = new Product(req.body);
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
       } catch (error) {
         res.status(500).json(error);
       }
    },

    // Get all product
    getProduct: async(req, res) => {
      try {
        const products = await Product.find()
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Get product by id
    getProductById: async(req, res) => {
      try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Get product by name
    getProductByName: async(req, res) => {
      try {
        const product = await Product.find(product => product.name == req.params.name);
        if(!product) {
          return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
    },

    // Delete product
    deleteProduct: async(req, res) => {
      try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Delete success !");
      } catch (error) {
        res.status(200).json(error)
      }
    },
    // Update product
    updateProduct: async(req, res) => {
      try {
        const product = await Product.findById(req.params.id);
        await product.updateOne({$set: req.body});
        res.status(200).json("Update success !")
      } catch (error) {
        res.status(200).json(error)
      }
    }
}

module.exports = productController;