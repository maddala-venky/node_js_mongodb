const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const employeeSchema = new mongoose.Schema({
  empId: ObjectId,
  name: String,
  age: Number,
  department: String,
  // Add more fields as needed
});

module.exports = mongoose.model("Employee", employeeSchema);
