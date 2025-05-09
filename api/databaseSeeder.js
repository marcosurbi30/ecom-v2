const router = require("express").Router();
const User = require("./models/User");
const users = require(".data/Users");
const Product = require("./models/Product");
const products = require("./data/Products");
const AsyncHandler = require("express-async-handler");

router.post(
  "/users",
  AsyncHandler(async (req, res) => {
    await User.deleteMany({}); // Delete all users before seeding
    const UserSeeder = await User.insertMany(users);
    res.send({ UserSeeder });
  })
);

router.post(
  "/products",
  AsyncHandler(async (req, res) => {
    await Product.deleteMany({}); // Delete all users before seeding
    const ProductSeeder = await Product.insertMany(products);
    res.send({ ProductSeeder });
  })
);

module.exports = router;
