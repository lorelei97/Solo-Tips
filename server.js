const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/accommodation", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "accommodation.html"));
});

app.get("/food", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "food.html"));
});

app.get("/items", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "items.html"));
});

app.get("/budgeting", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "budgeting.html"));
});

app.get("/health", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "health.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
