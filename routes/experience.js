const express = require('express')
const router = express.Router()

var experiences = []

router.get("/", (req, res) => {
    res.status(200).json(experiences);
});

router.post("/", (req, res) => {
    const newExperience = req.body; //req.body holds the JSON-formmated request body
    experiences.push(newExperience); // Add new experience to the array
    res.status(201).json({ message: 'Experience added successfully', newExperience });
});

router.put("/:id", (req, res) => {
    const expIndex = parseInt(req.params.id);

    if (expIndex >= 0 && expIndex < experiences.length) {
        // Update the experience at the found index
        experiences[expIndex] = { ...experiences[expIndex], ...req.body };
        res.status(200).json({ message: 'Experience updated successfully' });
    } else {
        res.status(404).json({ message: 'Experience not found' });
    }
});

router.delete("/:id", (req, res) => {
    const expIndex = parseInt(req.params.id);

    if (expIndex >= 0 && expIndex < experiences.length) {
        //Deleting the experience
        experiences.splice(expIndex, 1);
        res.status(200).json({ message: 'Experience deleted successfully' });
    } else {
        res.status(404).json({ message: 'Experience not found' });
    }
});


module.exports = router;

