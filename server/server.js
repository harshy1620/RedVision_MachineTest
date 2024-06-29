const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/Item", require("./routes/ItemRoutes"));

// Use error handling middleware
app.use(errorHandler);

// Port
const PORT = process.env.PORT || 8090;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});
