const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
         infomation: {
            type: String
        },
        color: {
            type: String
        },
        quality: {
            type: Number
        }
    }
})


let Product = mongoose.model("Product", productSchema)
module.exports = Product;