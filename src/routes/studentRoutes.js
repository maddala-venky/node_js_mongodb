const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Create an student
router.post("/", studentController.createstudent);

// Read all students
router.get("/", studentController.getAllstudent);

// Read an student by ID
router.get("/:id", studentController.getstudentById);

// Update an student by ID
router.put("/:id", studentController.updatestudentById);

// Delete an student by ID
router.delete("/:id", studentController.deletestudentById);

module.exports = router;
