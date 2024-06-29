const express = require("express");
const {
  getAllItemController,
  createItemController,
  updateItemController,
  deleteItemController,
  getItemByIdController
} = require("../controllers/ItemControlller");

// Router object
const router = express.Router();

// Routes
// GET all items
router.get("/All-Items", getAllItemController);

// POST create item
router.post("/create-Item", createItemController);

// PUT update item
router.put("/update-Item/:id", updateItemController);

// DELETE delete item
router.delete("/delete-Item/:id", deleteItemController);

//GET || SIngle item Details
router.get("/single-Item/:id", getItemByIdController);

module.exports = router;
