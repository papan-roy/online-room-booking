const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

// Corrected this line
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi Sonali, how are you doing? 😊");
});

app.get("/testListing", async (req, res) =>{
  let samplelisting = new Listing({
    title: "my new villa",
    description: "by the beach",
    price: 1200,
    location: "calangute, Goa",
    country: "India",
});

await samplelisting.save();
console.log("sample was saved");
res.send("successful testing");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
