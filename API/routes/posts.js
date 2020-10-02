const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//This one submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    Description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Gets back a specific post
// adding the : will be dynamic to anything added after the /
router.get("/:postID", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a specific post
router.delete("/:postID", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postID });
    res.json(removedPost);
    console.log(`Post with ID ${req.params.postID} was removed.`);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch("/:postID", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
