const express = require("express");
const app = express();
// a library that constructs absolute paths regardless of OS
const path = require("path");

app.use(express.urlencoded({ extended: true }));
// parse application/json
// allow us to access the json data within the request body as req.body
app.use(express.json());

app.get("/", function (req, res) {
  // __dirname is an absolute path to the directory containing the currently executing file
  // send the index.html file to the client when they access the '/' path on our server
  // path.join() method joins all given path segments together
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api", (req, res) => {
  // send a json response with the status code of 200 to the client
  // json() method takes a json object as an argument, converts it to a json-like string,
  // and then sends it to the client
  res.status(200).json({
    name: "Peter Nguyen",
    university: "California State University, East Bay",
    major: "Computer Science",
  });
});

app.listen(3000, () => {
  console.log("App is listening on Port 3000");
});
