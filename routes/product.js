const router = require("express").Router();
const productController = require("../controllers/productController")

// Add product
router.post("/", productController.addProduct);

// Get all product
router.get("/", productController.getProduct)

// Get product by id
router.get("/:id", productController.getProductById);

// Delete product by id
router.delete("/:id", productController.deleteProduct);

// Update product by id
router.put("/:id", productController.updateProduct)
module.exports = router;