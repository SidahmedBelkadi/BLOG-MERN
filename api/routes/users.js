const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// GET User
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json("User Not Found");
    }
    const { password, ...rest } = user._doc;
    res.status(200).json({ user: rest });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ....");
  }
});

// UPDATE User
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json("Something went wrong ....");
    }
  } else {
    res.status(401).json("Unauthorized update operation");
  }
});

// DELETE User
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const userId = req.body.userId;
  if (userId === id) {
    try {
      const user = await User.findOneAndDelete({ _id: id });
      if (!user) {
        return res.status(404).json("User not found");
      }
      res.status(200).json("User has been deleted successfully ...");
    } catch (error) {
      res.status(500).json("Something went wrong ....");
    }
  } else {
    res.status(401).json("Unauthorized delete operation");
  }
});

module.exports = router;
