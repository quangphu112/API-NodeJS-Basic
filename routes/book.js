const router = require("express").Router();
const bookController = require("../controllers/bookController")

// Add product
router.post("/", bookController.addBook);

// Get all product
router.get("/", bookController.getBook)

// Get product by id
router.get("/:id", bookController.getBookById);

// Delete product by id
router.delete("/:id", bookController.deleteBook);

// Update product by id
router.put("/:id", bookController.updateBook)

module.exports = router;