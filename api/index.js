const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const products = require("./data/Products");
const mongoose = require("mongoose");

//connect db
mongoose.connect(process.env.MONGOOSEDB_RULc).then((err) => {
  err;
});
//test route
app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
