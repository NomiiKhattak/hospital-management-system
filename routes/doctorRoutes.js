const express = require("express");
const Doctor = require("../models/Doctor");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
});

router.get("/", auth, async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

module.exports = router;
