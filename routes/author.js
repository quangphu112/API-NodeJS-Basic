const router = require("express").Router();
const authorController = require("../controllers/authorController")

// Add author
router.post("/", authorController.addAuthor);

module.exports = router;