// app.js
const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");

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
//   console.log("Connected to MongoDB");
  mongoose.set("strictQuery", true); // Optional: Set strict query mode
  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
  }); 
  mongoose.connection.on("disconnected", () => {
    console.log("❌ MongoDB disconnected");
  });
}

app.engine('ejs', ejsMate);

// Test home route
app.get("/", (req, res) => {
  res.send("successfully");
}); // test route

// Sample listing creation route
app.get("/testListing", async (req, res) => {
  console.log("📦 Listing is a", typeof Listing); // Debug

  const samplelisting = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
      // Add more image URLs here
    ],
  });

  await samplelisting.save();
  console.log("✅ Sample listing saved");
  res.send("✅ Listing saved successfully");
});

// Server listening
app.listen(8080, () => {
  console.log("🚀 Server is running on port 8080");
});
