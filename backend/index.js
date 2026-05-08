const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const testRoutes = require("./routes/testRoutes");

require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/api/tests", testRoutes);

// DATABASE URL
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://127.0.0.1:27017/testwise";

// DATABASE CONNECTION
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("TestWise Backend is running!");
});

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});