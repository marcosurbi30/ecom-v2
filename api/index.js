const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const products = require("./data/Products");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const databaseSeeder = require("./databaseSeeder");
const User = require("./models/User");
const userRoute = require("./routes/User");

//connect db
mongoose.connect(process.env.MONGOOSEDB_RULc).then((err) => {
  err;
});
//test route
app.get("/api/products", (req, res) => {
  res.json(products);
});

//database
app.use("/api/seed", databaseSeeder);

//api/users/login
app.use("/api/users", userRoute);

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
