const router = require("express").Router();
const authorController = require("../controllers/authorController")

// Add author
router.post("/", authorController.addAuthor);

// Get authors
router.get("/", authorController.getAuthor);

// Get author by id 
router.get("/:id", authorController.getAuthorById)

// Delete author
router.delete("/:id", authorController.deleteAuthor)

//Update author
router.put("/:id", authorController.updateAuthor)
module.exports = router;