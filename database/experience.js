const { Schema, model } = require("mongoose");

const ExperienceSchema = new Schema(
  {
    company: String,
    title: String,
    duration: String,
  },
  { collection: "experiences" }
);

module.exports = {
  Experiences: model("experiences", ExperienceSchema),
};
