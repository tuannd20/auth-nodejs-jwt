const express = require("express");
const router = express.Router();

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("./auth/login", { title: "Authentication" });
});

module.exports = router;

/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("./auth/register", { title: "Authentication" });
});

module.exports = router;
