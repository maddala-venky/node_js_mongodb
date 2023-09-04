const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/myDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

const employeeRoutes = require("./routes/employeeRoutes");
app.use("/employee", employeeRoutes);

const studentRoutes = require("./routes/studentRoutes");
app.use("/student", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection closed");
    process.exit(0);
  });
});

// Close MongoDB connection on SIGINT (as shown in step 6)
