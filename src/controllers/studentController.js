const student = require("../models/student");

// Create an student
exports.createstudent = async (req, res) => {
  const studentData = req.body;
  console.log("studentData====>", studentData);
  try {
    const student = new student(studentData);
    //const result = await student.create(studentData);

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Read all students
exports.getAllstudent = async (req, res) => {
  try {
    const student = await student.find();
    res.json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Read an student by ID
exports.getstudentById = async (req, res) => {
  const studentId = req.params.id;

  try {
    const student = await student.findById(studentId);
    if (!student) {
      res.status(404).send("student not found");
    } else {
      res.json(student);
    }
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Update an student by ID
exports.updatestudentById = async (req, res) => {
  const studentId = req.params.id;
  const updatedstudentData = req.body;

  try {
    const result = await student.findByIdAndUpdate(
      studentId,
      updatedstudentData
    );
    if (!result) {
      res.status(404).send("student not found");
    } else {
      res.status(204).send(); // No content
    }
  } catch (error) {
    console.error("Error updating student by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete an student by ID
exports.deletestudentById = async (req, res) => {
  const studentId = req.params.id;

  try {
    const result = await student.findByIdAndDelete(studentId);
    if (!result) {
      res.status(404).send("student not found");
    } else {
      res.status(204).send(); // No content
    }
  } catch (error) {
    console.error("Error deleting student by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};
