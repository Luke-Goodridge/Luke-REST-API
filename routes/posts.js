const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the posts page");
});

router.get("/funny", (req, res) => {
  res.send("This is the funny posts page.");
});

module.exports = router;
