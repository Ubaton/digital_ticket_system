const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for orders (replace with a database in production)
const orders = [];

// Define the /api/checkout endpoint
app.post("/api/checkout", (req, res) => {
  try {
    const orderData = req.body;

    // Perform validation and processing of the order data here
    // For simplicity, we'll just push the order data to the in-memory array.

    orders.push(orderData);

    // Respond with a success message
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
