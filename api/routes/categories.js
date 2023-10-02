const router = require("express").Router();
const Category = require("../models/Category");

module.exports = router;

// CREATE CATEGORY
router.post("/", async (req, res) => {
  try {
    const catgeory = await Category.create(req.body);
    res.status(201).json({ catgeory });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ...");
  }
});

// READ CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ...");
  }
});
