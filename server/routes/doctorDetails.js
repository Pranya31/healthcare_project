const express = require("express");
const { registerDoctor, getDoctors } = require("../controllers/doctorsDetailsController");
const { jwtAuthMiddleware} = require('../middleware/jwtMiddleware')
const router = express.Router();

// POST route to register a new doctor
router.post("/register", registerDoctor);

// Route to get all doctors
router.get("/", getDoctors);

module.exports = router;