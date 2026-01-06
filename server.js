const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Parse JSON
app.use(express.json());

// API routes
app.use("/books", bookRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

