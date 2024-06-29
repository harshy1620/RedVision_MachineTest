const mongoose = require("mongoose");
const ItemModel = require("../models/ItemModel");

// Get all items
module.exports.getAllItemController = async (req, res, next) => {
  try {
    const AllItems = await ItemModel.find({});
    if (!AllItems) {
      return res.status(200).send({
        success: false,
        message: "No Items Found",
      });
    }
    return res.status(200).send({
      success: true,
      ItemsCount: AllItems.length,
      message: "All Items lists",
      AllItems,
    });
  } catch (error) {
    next(error);
  }
};

// Create item
module.exports.createItemController = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    // Validation
    if (!title || !description) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const newItem = new ItemModel({ title, description });
    await newItem.save();
    return res.status(201).send({
      success: true,
      message: "Item Created!",
      newItem,
    });
  } catch (error) {
    next(error);
  }
};

// Update item
module.exports.updateItemController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const Item = await ItemModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!Item) {
      return res.status(404).send({
        success: false,
        message: "Item Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Item Updated!",
      Item,
    });
  } catch (error) {
    next(error);
  }
};

// Delete item
module.exports.deleteItemController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Item = await ItemModel.findByIdAndDelete(id);
    if (!Item) {
      return res.status(404).send({
        success: false,
        message: "Item Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Item Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};


// get single item
module.exports.getItemByIdController = async (req, res,next) => {
  try {
    const { id } = req.params;
    const Item = await ItemModel.findByIdAndUpdate(id);
    if (!Item) {
      return res.status(404).send({
        success: false,
        message: "Item not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Item found successfully ",
      Item,
    });
  } catch (error) {
    next(error);
  }
};