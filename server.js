const express = require("express");
const path = require("path");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Parse JSON
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/books", bookRoutes);

// Server test
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
