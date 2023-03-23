const mongoose = require("mongoose");

const productDetailSchema = mongoose.Schema({
    infomation: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    quality: {
        type: Number,
        require: true
    }
})

let productDetail = mongoose.model("ProductDetail", productDetailSchema);
module.exports = productDetail;