const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [, "The usersname is required"],
      unique: [true, "Username already taken"],
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "the Password is required"],
    },
    profile_picture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
