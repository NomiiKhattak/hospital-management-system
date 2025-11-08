const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: String,
    phone: String,
    email: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
