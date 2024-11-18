const express = require("express");
const router = express.Router();

router.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !",
  });
});

router.use((req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = router;
