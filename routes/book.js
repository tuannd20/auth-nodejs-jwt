const express = require("express");
const router = express.Router();

// Get Book page
router.get("/list", (req, res) => {
  res.render("./book/index", { title: "Book" });
});

module.exports = router;
