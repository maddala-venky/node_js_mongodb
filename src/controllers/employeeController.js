const Employee = require("../models/Employee");

// Create an employee
exports.createEmployee = async (req, res) => {
  const employeeData = req.body;
  console.log("employeeData====>", employeeData);
  try {
    const employee = new Employee(employeeData);
    //const result = await Employee.create(employeeData);

    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Read all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Read an employee by ID
exports.getEmployeeById = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      res.status(404).send("Employee not found");
    } else {
      res.json(employee);
    }
  } catch (error) {
    console.error("Error fetching employee by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Update an employee by ID
exports.updateEmployeeById = async (req, res) => {
  const employeeId = req.params.id;
  const updatedEmployeeData = req.body;

  try {
    const result = await Employee.findByIdAndUpdate(
      employeeId,
      updatedEmployeeData
    );
    if (!result) {
      res.status(404).send("Employee not found");
    } else {
      res.status(204).send(); // No content
    }
  } catch (error) {
    console.error("Error updating employee by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete an employee by ID
exports.deleteEmployeeById = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const result = await Employee.findByIdAndDelete(employeeId);
    if (!result) {
      res.status(404).send("Employee not found");
    } else {
      res.status(204).send(); // No content
    }
  } catch (error) {
    console.error("Error deleting employee by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};
