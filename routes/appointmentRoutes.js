const express = require("express");
const Appointment = require("../models/Appointment");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const appt = await Appointment.create(req.body);
  res.json(appt);
});

router.get("/", auth, async (req, res) => {
  const appts = await Appointment.find()
    .populate("patient")
    .populate("doctor")
    .sort({ date: 1 });
  res.json(appts);
});

module.exports = router;
