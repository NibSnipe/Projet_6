const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { upload, resizeImage } = require("../middleware/multer-config");

const booksCtrl = require("../controllers/books");

router.get("/bestrating", booksCtrl.getBestRatedBooks);
router.get("/", booksCtrl.getAllBooks);
router.get("/:id", booksCtrl.getOneBook);
router.post("/", auth, upload, resizeImage, booksCtrl.createBook);
router.put("/:id", auth, upload, resizeImage, booksCtrl.modifyBook);
router.delete("/:id", auth, booksCtrl.deleteBook);
router.post("/:id/rating", auth, booksCtrl.ratingBook);

module.exports = router;
