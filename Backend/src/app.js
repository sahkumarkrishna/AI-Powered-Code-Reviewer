// src/app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import the cors package
const aiRoutes = require("./routes/ai.routes");

const app = express();

// Enable CORS for specific origin
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only this origin
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Use AI routes
app.use("/ai", aiRoutes);

// Export Express app
module.exports = app;
