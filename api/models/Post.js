const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      unique: [true, "Title already exists"],
    },
    description: {
      type: String,
      required: [true, "The description is required"],
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
