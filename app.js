const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL ="mongodb://127.0.0.1:27017/test";

main()
.this(() =>{
  console.log("connected to DB");
})
.catch((err) =>{
  console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL)
}

app.get("/", (req, res) => {
  res.send("Hi Sonali,How are you doing? 😊");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});