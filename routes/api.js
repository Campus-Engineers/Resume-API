const express = require("express") //import express
const router = express.Router() //instatiate the router

var experiences = [];

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
  
router.get("/experience", (req, res) => {
    res.status(200).json(experiences);
});

router.post("/experience", (req, res) => {
    const newExperience = req.body;
    experiences.push(newExperience); //say you got a new job
    res.status(201).json({message: 'New job was added'})
});

module.exports = router