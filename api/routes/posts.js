const router = require("express").Router();
const Post = require("../models/Post");
const { route } = require("./posts");

// CREATE POST
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ...");
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const { id: postId } = req.params;
    const post = await Post.findOneAndUpdate({ _id: postId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res > status(404).json("Post Not Found");
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Something went wrong ...");
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const { id: postId } = req.params;
    const post = await Post.findOneAndDelete({ _id: postId });
    if (!post) {
      return res.status(404).json("Post Not Found");
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Something went wrong ...");
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const { user: username, cat: category } = req.query;

  try {
    let posts = [];

    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find({});
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("Something went wrong ...");
  }
});

// GET SINGLE POST
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id });
    if (!post) {
      return res.status(404).json("Post not found 404");
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong ...");
  }
});
module.exports = router;
