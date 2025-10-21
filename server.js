const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

// Dummy user for demo
const user = { username: "admin", password: "$2a$10$encryptedexample" };

// Root route
app.get("/", (req, res) => {
  res.send("Auth API is running ✅");
});

// Register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  res.json({ message: "User registered successfully", username, hashed });
});

// Login route
app.post("/login", async (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, process.env.JWT_SECRET || "default_secret", {
    expiresIn: "1h",
  });
  res.json({ message: "Login successful", token });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Auth API running on port ${PORT}`));
