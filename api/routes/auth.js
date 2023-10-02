const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      req.body.password.toString(),
      salt
    );
    const newUser = User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Something went wrong ....");
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Credentials did not match ");
    }

    const validated = await bcrypt.compare(
      req.body.password.toString(),
      user.password
    );
    if (!user) {
      res.status(400).json("Credentials did not match ");
    }

    const { password, ...rest } = user._doc;
    res.status(200).json({ user: rest });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ....");
  }
});

module.exports = router;
