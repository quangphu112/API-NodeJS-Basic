const  Author  = require("../models/author")
const  Book  = require("../models/book")

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
        
    }
}

module.exports = authorController;