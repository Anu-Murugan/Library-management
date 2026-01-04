const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// TEST ROUTE (IMPORTANT)
router.get("/test", (req, res) => {
  res.send("Book route working");
});

// ADD BOOK
router.post("/add", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
