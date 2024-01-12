const mongoose = require("mongoose");

// Connect to MongoDB
function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((_) => console.log("MongoDB Connected"))
    .catch((err) => console.warn(err));
}

module.exports = { connectDB };
