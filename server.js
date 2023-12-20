const express = require("express");
const app = express();
// a library that constructs absolute paths regardless of OS
const path = require("path");

app.get("/", function (req, res) {
  // __dirname is an absolute path to the directory containing the currently executing file
  console.log("__dirname = ", __dirname);
  // send the index.html file to the client when they access the '/' path on our server
  // path.join() method joins all given path segments together
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api", (req, res) => {});

app.listen(3000, () => {
  console.log("App is listening on Port 3000");
});
