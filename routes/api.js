const express = require('express') //import express
const router = express.Router() //instantiate the router
const experienceRouter = require("./experience")

router.use("/", (req, res, next) => {
    console.log("API request received");
    next();
});
  
router.get("/intro", (req, res) => {
    // send a json response with the status code of 200 to the client
    // json() method takes a json object as an argument, converts it to a json-like string,
    // and then sends it to the client
    res.status(200).json({
      name: "Vinh Pham",
      university: "California State University, East Bay",
      major: "Computer Science",
    });
});

router.use('/experience', experienceRouter);

module.exports = router