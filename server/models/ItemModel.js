const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
