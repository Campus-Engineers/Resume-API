const express = require("express");
const app = express();
// a library that constructs absolute paths regardless of OS
const path = require("path");
const { connectDB } = require("./database"); //importing the connectDB function
const apiRouter = require("./routes/api"); //importing the api router
require("dotenv").config();

// connect to mongoDB database using call(this) to access local variables in this file
connectDB.call(this);

app.use(express.urlencoded({ extended: true }));
// parse application/json
// allow us to access the json data within the request body as req.body
app.use(express.json());

app.get("/", function (_, res) {
  // __dirname is an absolute path to the directory containing the currently executing file
  // send the index.html file to the client when they access the '/' path on our server
  // path.join() method joins all given path segments together
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("App is listening on Port 3000");
});
