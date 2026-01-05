const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
    res.json({
        message: "Book added successfully",
        data: req.body
    });
});

module.exports = router;

