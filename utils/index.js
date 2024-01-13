const isExperienceValid = (experience) => {
  if (
    !experience ||
    !experience.company ||
    !experience.title ||
    !experience.duration
  ) {
    return false;
  }
  const { company, title, duration } = experience;

  if (
    typeof company !== "string" ||
    company.trim() === "" ||
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof duration !== "string" ||
    duration.trim() === ""
  ) {
    return false;
  }

  return true;
};

module.exports = { isExperienceValid };
