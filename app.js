// app.js
const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/test";

// Middleware (optional for future use)
app.use(express.json());

// MongoDB connection
main()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Test home route
app.get("/", (req, res) => {
  res.send("successfully");
});

// Sample listing creation route
app.get("/testListing", async (req, res) => {
  console.log("📦 Listing is a", typeof Listing); // Debug

  const samplelisting = new Listing({
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

// Server listening
app.listen(8080, () => {
  console.log("🚀 Server is running on port 8080")
});
