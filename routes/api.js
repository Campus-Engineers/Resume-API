const express = require("express"); //import express
const router = express.Router(); //instantiate the router
const { Experiences } = require("../database/experience"); //import the Experiences model
const { isExperienceValid } = require("../utils"); //import the isExperienceValid function

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
    name: "Peter Nguyen",
    university: "California State University, East Bay",
    major: "Computer Science",
  });
});

// exclude the _id and __v fields from the query results
// .select("-_id -__v")

router.get("/experiences", async (_, res) => {
  await Experiences.find({})
    .then((experiences) =>
      res.status(200).json({ message: experiences, ok: true })
    )
    .catch((err) => res.status(500).json({ message: err, ok: false }));
});

router.post("/experiences", async (req, res) => {
  const newExperience = req.body;
  if (!isExperienceValid(newExperience)) {
    return res.status(400).json({ message: "Invalid experience" });
  }

  return await Experiences.create(newExperience)
    .then((_) =>
      res.status(201).json({ message: "New job was added", ok: true })
    )
    .catch((err) => res.status(500).json({ message: err, ok: false }));
});

router.put("/:id", (req, res) => {
  const expIndex = parseInt(req.params.id);
  if (expIndex >= 0 && expIndex < experiences.length) {
    // Update the experience at the found index
    experiences[expIndex] = { ...experiences[expIndex], ...req.body };
    res.status(200).json({ message: "Experiences updated successfully" });
  } else {
    res.status(404).json({ message: "Experiences not found" });
  }
});

router.delete("/:id", (req, res) => {
  const expIndex = parseInt(req.params.id);

  if (expIndex >= 0 && expIndex < experiences.length) {
    // Delete the experience at the found index
    // delete one element at the  expIndex
    experiences.splice(expIndex, 1);
    res.status(200).json({ message: "Experience deleted successfully" });
  } else {
    res.status(404).json({ message: "Experience not found" });
  }
});

module.exports = router;
