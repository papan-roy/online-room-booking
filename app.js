const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hi Sonali,How are you doing? 😊");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});