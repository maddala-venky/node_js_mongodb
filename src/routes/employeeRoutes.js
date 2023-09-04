const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Create an employee
router.post("/", employeeController.createEmployee);

// Read all employees
router.get("/", employeeController.getAllEmployees);

// Read an employee by ID
router.get("/:id", employeeController.getEmployeeById);

// Update an employee by ID
router.put("/:id", employeeController.updateEmployeeById);

// Delete an employee by ID
router.delete("/:id", employeeController.deleteEmployeeById);

module.exports = router;
