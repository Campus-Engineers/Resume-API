const express = require("express");
const app = express();
// a library that constructs absolute paths regardless of OS
const path = require("path");

app.get("/", function (req, res) {
  res.send("Hello Node");
});

app.listen(3000, () => {
  console.log("App is listening on Port 3000");
});
