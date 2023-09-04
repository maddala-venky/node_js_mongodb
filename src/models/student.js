const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new mongoose.Schema({
  studentId: ObjectId,
  name: String,
  age: Number,
  phone: String,
  // Add more fields as needed
});

module.exports = mongoose.model("student", studentSchema);
