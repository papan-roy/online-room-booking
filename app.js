// app.js
const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // ✅ Corrected path

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/test";

// Middleware to parse JSON (optional, if using POST requests later)
app.use(express.json());

// Connect to MongoDB
main()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Test route
app.get("/", (req, res) => {
  res.send("Hi Sonali, how are you doing? 😊");
});

// Route to create a sample listing
app.get("/testListing", async (req, res) => {
  let samplelisting = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  await samplelisting.save();
  console.log("✅ Sample listing saved");
  res.send("✅ Listing saved successfully");
});

// Start server
app.listen(8080, () => {
  console.log("🚀 Server is running on port 8080");
});
