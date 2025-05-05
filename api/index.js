const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const products = require("./data/Products");
const mongoose = require("mongoose");
const PORT = process.env.PORT;

//connect db
mongoose.connect(process.env.MONGOOSEDB_RULc).then((err) => {
  err;
});
//test route
app.get("/api/products", (req, res) => {
  res.json(products);
});

const databaseSeeder = require("./databaseSeeder");
//database
app.use("/api/seed", databaseSeeder);
app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
