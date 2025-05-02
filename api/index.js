const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
